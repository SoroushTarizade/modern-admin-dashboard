import Link from "next/link";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";

export default function RegisterPage() {
    return (
        <AuthBackground>

            <AuthCard
                title="Create Account"
                subtitle="Create your account to get started."
            >

                <form className="space-y-6">

                    <AuthInput
                        label="Username"
                        id="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Enter your username"
                    />

                    <AuthInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                    />

                    <PasswordInput
                        label="Password"
                        id="password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="Create a password"
                    />

                    <PasswordInput
                        label="Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                    />

                    <AuthButton>
                        Create Account
                    </AuthButton>

                    <p className="text-center text-sm text-muted-foreground">

                        Already have an account?

                        <Link
                            href="/login"
                            className="ml-1 text-primary font-semibold hover:underline"
                        >
                            Login
                        </Link>

                    </p>

                </form>

            </AuthCard>

        </AuthBackground>
    );
}