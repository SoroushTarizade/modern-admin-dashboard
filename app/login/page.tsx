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

                <form
                    className="
                        space-y-5
                        sm:space-y-6
                    "
                >

                    <AuthInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                    />


                    <div>

                        <div
                            className="
                                mb-3
                                flex
                                flex-col
                                gap-2

                                sm:flex-row
                                sm:items-center
                                sm:justify-between
                            "
                        >

                            <label
                                className="
                                    text-sm
                                    font-semibold
                                "
                            >
                                Password
                            </label>


                            <Link
                                href="/forgot-password"
                                className="
                                    text-sm
                                    text-primary
                                    hover:underline
                                "
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


                    <p
                        className="
                            text-center
                            text-sm
                            text-muted-foreground
                        "
                    >

                        Don't have an account?

                        <Link
                            href="/register"
                            className="
                                ml-1
                                font-semibold
                                text-primary
                                hover:underline
                            "
                        >
                            Register
                        </Link>

                    </p>


                </form>

            </AuthCard>

        </AuthBackground>
    );
}