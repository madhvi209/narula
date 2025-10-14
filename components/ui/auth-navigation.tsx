"use client";

import { Button } from "@/components/ui/button";
import { User, LogIn } from "lucide-react";

interface AuthNavigationProps {
  className?: string;
}

export function AuthNavigation({ className = "" }: AuthNavigationProps) {
  const handleLogin = () => {
    // Navigate to login page
    window.location.href = "/login";
  };

  const handleSignup = () => {
    // Navigate to signup page
    window.location.href = "/signup";
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Button
        onClick={handleLogin}
        variant="outline"
        className="flex items-center gap-2"
      >
        <LogIn className="h-4 w-4" />
        Login
      </Button>
      <Button
        onClick={handleSignup}
        className="btn-primary flex items-center gap-2"
      >
        <User className="h-4 w-4" />
        Sign Up
      </Button>
    </div>
  );
}
