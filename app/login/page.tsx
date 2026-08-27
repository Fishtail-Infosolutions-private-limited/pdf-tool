"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { IconFileText, IconLoader2, IconEye, IconEyeOff, IconArrowLeft } from "@tabler/icons-react";

function GoogleIcon() {
  return (
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.27 21.36 7.33 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
      />
      <path
        fill="#EA4335"
        d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.27 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
      />
    </svg>
  );
}

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleCredentialsLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn("credentials", {
      redirect: false,
      email: email.trim(),
      password,
    });

    setIsLoading(false);

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("Welcome back!");
      router.push("/");
      router.refresh();
    }
  };

  const handleGoogleLogin = async () => {
    setIsGoogleLoading(true);
    await signIn("google", { callbackUrl: "/" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#FAFAF9] px-4 py-12 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div 
        aria-hidden 
        className="pointer-events-none absolute -top-40 right-1/4 w-96 h-96 rounded-full bg-brand-teal/5 blur-3xl" 
      />
      <div 
        aria-hidden 
        className="pointer-events-none absolute -bottom-40 left-1/4 w-96 h-96 rounded-full bg-brand-sage/10 blur-3xl" 
      />

      <div className="w-full max-w-md bg-white rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.05)] border border-[#E0DED9] p-8 sm:p-10 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Link href="/" className="flex items-center gap-2 group cursor-pointer">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-brand-teal text-white shadow-md shadow-brand-teal/20 transition-transform group-hover:scale-105">
              <IconFileText size={22} stroke={2} />
            </span>
            <span className="font-bold text-2xl tracking-tight text-brand-dark" style={{ fontFamily: "var(--font-inter)" }}>
              PDF <span className="text-brand-teal">Maya</span>
            </span>
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-center text-brand-dark mb-1.5">Welcome Back</h1>
        <p className="text-center text-neutral-500 text-sm mb-7">Sign in to continue to your workspace.</p>

        {/* Credentials Form */}
        <form onSubmit={handleCredentialsLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5 ml-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@gmail.com"
              required
              className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E0DED9] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all text-brand-dark placeholder:text-neutral-400 text-sm"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5 ml-1 mr-1">
              <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider">
                Password
              </label>
              <Link 
                href={`/forgot-password?email=${encodeURIComponent(email)}`}
                className="text-xs font-semibold text-brand-teal hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#E0DED9] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all text-brand-dark placeholder:text-neutral-400 text-sm pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-dark transition-colors"
                tabIndex={-1}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <IconEyeOff size={18} stroke={2} /> : <IconEye size={18} stroke={2} />}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading || isGoogleLoading}
            className="w-full bg-brand-teal text-white font-semibold py-3.5 rounded-xl mt-2 hover:bg-[#036649] transition-all shadow-md shadow-brand-teal/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer"
          >
            {isLoading && <IconLoader2 size={18} className="animate-spin" />}
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-[#E0DED9]" />
          <span className="px-3 text-xs font-medium text-neutral-400 uppercase tracking-wider">Or continue with</span>
          <div className="flex-1 border-t border-[#E0DED9]" />
        </div>

        {/* Google OAuth (Below Credentials Form) */}
        <button
          onClick={handleGoogleLogin}
          disabled={isGoogleLoading || isLoading}
          className="w-full flex items-center justify-center gap-3 bg-white border border-[#E0DED9] text-brand-dark font-semibold py-3 rounded-xl hover:bg-[#FAFAF9] transition-all shadow-sm active:scale-[0.98] disabled:opacity-50 cursor-pointer text-sm"
        >
          {isGoogleLoading ? (
            <IconLoader2 size={18} className="animate-spin text-brand-teal" />
          ) : (
            <GoogleIcon />
          )}
          <span>Continue with Google</span>
        </button>

        {/* Footer Link */}
        <p className="text-center text-sm text-neutral-500 mt-7">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-brand-teal hover:underline">
            Sign up
          </Link>
        </p>
      </div>

      {/* Back to home */}
      <Link 
        href="/"
        className="inline-flex items-center gap-1.5 text-xs text-neutral-500 hover:text-brand-dark transition-colors mt-6 font-medium"
      >
        <IconArrowLeft size={14} />
        Back to PDF Maya
      </Link>
    </div>
  );
}
