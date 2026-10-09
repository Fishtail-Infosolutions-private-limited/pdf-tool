import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
    console.warn("MONGODB_URI is not defined. Using a placeholder for now.");
}

/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development and API routes.
 */
interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
    lastFailedAt: number;
}

let cached: MongooseCache = (global as unknown as { mongoose?: MongooseCache }).mongoose || {
    conn: null,
    promise: null,
    lastFailedAt: 0,
};

(global as unknown as { mongoose: MongooseCache }).mongoose = cached;

function getCandidateUris(): string[] {
    const raw = process.env.MONGODB_URI;
    if (!raw) return [];

    const candidates: string[] = [raw];

    // If URI points to 127.0.0.1 or localhost, Docker containers will fail to reach host MongoDB.
    // Automatically add host.docker.internal and mongodb service fallbacks.
    if (raw.includes("127.0.0.1") || raw.includes("localhost")) {
        candidates.push(
            raw.replace("127.0.0.1", "host.docker.internal").replace("localhost", "host.docker.internal")
        );
        candidates.push(
            raw.replace("127.0.0.1", "mongodb").replace("localhost", "mongodb")
        );
    }

    return [...new Set(candidates)];
}

async function connectToDatabase() {
    if (!process.env.MONGODB_URI) {
        console.warn("Skipping DB connect due to missing MONGODB_URI");
        return null;
    }
    
    if (cached.conn && mongoose.connection.readyState === 1) {
        return cached.conn;
    }

    // Short 5s cooldown if recent attempt failed to prevent request hanging storms
    const now = Date.now();
    if (cached.lastFailedAt && now - cached.lastFailedAt < 5000) {
        throw new Error("MongoDB connection recently failed. Cooling down before retry.");
    }

    if (!cached.promise) {
        const candidateUris = getCandidateUris();
        const opts = {
            bufferCommands: false,
            serverSelectionTimeoutMS: 5000,
            connectTimeoutMS: 5000,
        };

        cached.promise = (async () => {
            let lastError: unknown = null;

            for (const uri of candidateUris) {
                try {
                    const maskedUri = uri.replace(/\/\/([^:]+):([^@]+)@/, "//$1:****@");
                    console.log(`[Database] Attempting MongoDB connection to: ${maskedUri}`);
                    const conn = await mongoose.connect(uri, opts);
                    console.log("[Database] Connected successfully to MongoDB");
                    return conn;
                } catch (err: unknown) {
                    lastError = err;
                    const errMsg = err instanceof Error ? err.message : String(err);
                    console.warn(`[Database] Connection to candidate failed (${errMsg}). Trying next if available...`);
                }
            }

            throw lastError || new Error("Failed to connect to any MongoDB candidate URI");
        })();
    }

    try {
        cached.conn = await cached.promise;
        cached.lastFailedAt = 0;
    } catch (e) {
        cached.promise = null;
        cached.conn = null;
        cached.lastFailedAt = Date.now();
        throw e;
    }

    return cached.conn;
}

export default connectToDatabase;

