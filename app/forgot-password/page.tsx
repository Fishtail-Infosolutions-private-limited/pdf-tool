"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import toast from "react-hot-toast";
import { 
  IconFileText, 
  IconLoader2, 
  IconArrowLeft, 
  IconLock, 
  IconMail, 
  IconShieldCheck,
  IconEye,
  IconEyeOff
} from "@tabler/icons-react";

function ForgotPasswordContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // States: email -> otp -> success
  const [step, setStep] = useState<"email" | "otp" | "success">("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-fill email from URL if present
  useEffect(() => {
    const emailParam = searchParams.get("email");
    if (emailParam) {
      setEmail(emailParam);
    }
  }, [searchParams]);

  // 1. Request OTP
  const handleRequestOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/forgot-password", {
        method: "POST",
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Request failed");
      
      toast.success("Reset code sent! Please check your inbox.");
      setStep("otp");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 2. Reset Password
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch("/api/auth/reset-password", {
        method: "POST",
        body: JSON.stringify({ email, otp, newPassword }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Reset failed");
      
      toast.success("Password updated successfully!");
      setStep("success");
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setIsLoading(false);
    }
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
            <span className="font-bold text-2xl tracking-tight text-brand-dark" style={{ fontFamily: "var(--font-inter)"}}>
              PDF <span className="text-brand-teal">Maya</span>
            </span>
          </Link>
        </div>

        {step === "email" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-2xl font-bold text-center text-brand-dark mb-1.5">Forgot Password?</h1>
            <p className="text-center text-neutral-500 text-sm mb-7">Enter your email and we&apos;ll send you a code to reset it.</p>
            
            <form onSubmit={handleRequestOtp} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5 ml-1">
                  Account Email
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <IconMail size={18} stroke={2} />
                  </span>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@gmail.com"
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#FAFAF9] border border-[#E0DED9] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all text-brand-dark placeholder:text-neutral-400 text-sm"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-teal text-white font-semibold py-3.5 rounded-xl mt-2 hover:bg-[#036649] transition-all shadow-md shadow-brand-teal/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                {isLoading ? <IconLoader2 size={18} className="animate-spin" /> : "Send Reset Code"}
              </button>

              <button
                type="button"
                onClick={() => router.push("/login")}
                className="flex items-center justify-center gap-1.5 text-sm font-semibold text-neutral-500 hover:text-brand-dark transition-all cursor-pointer mt-2"
              >
                <IconArrowLeft size={16} />
                Back to Login
              </button>
            </form>
          </div>
        )}

        {step === "otp" && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h1 className="text-2xl font-bold text-center text-brand-dark mb-1">Enter Code</h1>
            <div className="text-center mb-7">
              <p className="text-neutral-500 text-sm leading-relaxed mb-1">
                A 6-character code was sent to:
              </p>
              <div className="font-bold text-brand-dark text-base mb-1.5">{email}</div>
              <button 
                type="button"
                onClick={() => { setStep("email"); setOtp(""); }}
                className="text-xs font-bold text-brand-teal hover:underline uppercase tracking-wider cursor-pointer"
              >
                Not you? Change email
              </button>
            </div>
            
            <form onSubmit={handleResetPassword} className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5 ml-1">
                  6-Character Code
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <IconShieldCheck size={20} stroke={2} />
                  </span>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.toUpperCase())}
                    placeholder="ABCDEF"
                    maxLength={6}
                    required
                    className="w-full pl-12 pr-4 py-3 bg-[#FAFAF9] border border-[#E0DED9] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all text-brand-dark tracking-[4px] font-mono text-base font-bold text-center uppercase"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-brand-dark uppercase tracking-wider mb-1.5 ml-1">
                  New Password
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
                    <IconLock size={18} stroke={2} />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    minLength={6}
                    className="w-full pl-12 pr-12 py-3 bg-[#FAFAF9] border border-[#E0DED9] rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-teal/20 focus:border-brand-teal transition-all text-brand-dark placeholder:text-neutral-400 text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-dark transition-colors"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <IconEyeOff size={18} /> : <IconEye size={18} />}
                  </button>
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-brand-teal text-white font-semibold py-3.5 rounded-xl hover:bg-[#036649] transition-all shadow-md shadow-brand-teal/20 active:scale-[0.98] disabled:opacity-50 flex items-center justify-center gap-2 mt-2 cursor-pointer text-sm"
              >
                {isLoading ? <IconLoader2 size={18} className="animate-spin" /> : "Reset Password"}
              </button>
            </form>
          </div>
        )}

        {step === "success" && (
          <div className="text-center py-4 animate-in fade-in zoom-in duration-500">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-100">
              <IconShieldCheck size={32} stroke={2} />
            </div>
            <h1 className="text-2xl font-bold text-brand-dark mb-2">Password Updated!</h1>
            <p className="text-neutral-600 text-sm mb-7 leading-relaxed">
              Your password has been changed successfully. You can now log in with your new credentials.
            </p>
            <button
              onClick={() => router.push("/login")}
              className="w-full bg-brand-teal text-white font-semibold py-3.5 rounded-xl hover:bg-[#036649] transition-all shadow-md shadow-brand-teal/20 active:scale-[0.98] cursor-pointer text-sm"
            >
              Back to Login
            </button>
          </div>
        )}

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

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-[#FAFAF9]"><IconLoader2 className="animate-spin text-brand-teal" size={36} /></div>}>
      <ForgotPasswordContent />
    </Suspense>
  );
}
