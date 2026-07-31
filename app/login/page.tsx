import Link from "next/link";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";

export default function LoginPage() {
    return (
        <AuthBackground>

            <AuthCard
                title="Welcome Back"
                subtitle="Please enter your email and password to continue."
            >

                <form className="space-y-6">

                    <AuthInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                    />

                    <div>

                        <div className="flex justify-between items-center mb-3">

                            <label className="text-sm font-semibold">
                                Password
                            </label>

                            <Link
                                href="/forgot-password"
                                className="text-primary text-sm hover:underline"
                            >
                                Forgot Password?
                            </Link>

                        </div>

                        <PasswordInput
                            label=""
                            id="password"
                            name="password"
                            autoComplete="current-password"
                            placeholder="Enter your password"
                        />

                    </div>

                    <AuthButton>
                        Sign In
                    </AuthButton>

                    <p className="text-center text-sm text-muted-foreground">

                        Don't have an account?

                        <Link
                            href="/register"
                            className="ml-1 text-primary font-semibold hover:underline"
                        >
                            Register
                        </Link>

                    </p>

                </form>

            </AuthCard>

        </AuthBackground>
    );
}