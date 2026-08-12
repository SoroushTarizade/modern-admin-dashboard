"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";

export default function RegisterPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear previous error when user edits the form
        if (error) {
            setError("");
        }
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setError("");

        const username = formData.username.trim();
        const email = formData.email.trim().toLowerCase();
        const password = formData.password;
        const confirmPassword = formData.confirmPassword;

        // Username validation
        if (!username) {
            setError("Username is required.");
            return;
        }

        if (username.length < 3) {
            setError(
                "Username must be at least 3 characters."
            );
            return;
        }

        // Email validation
        if (!email) {
            setError("Email is required.");
            return;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {
            setError("Please enter a valid email address.");
            return;
        }

        // Password validation
        if (!password) {
            setError("Password is required.");
            return;
        }

        if (password.length < 6) {
            setError(
                "Password must be at least 6 characters."
            );
            return;
        }

        // Confirm password validation
        if (!confirmPassword) {
            setError("Please confirm your password.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setLoading(true);

        try {
            const response = await fetch(
                "/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password,
                        confirmPassword,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message ||
                    "Unable to create your account."
                );
                return;
            }

            router.push("/");
            router.refresh();

        } catch (error) {
            console.error(
                "Register error:",
                error
            );

            setError(
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthBackground>
            <AuthCard
                title="Create Account"
                subtitle="Create your account to get started."
            >
                <form
                    onSubmit={handleSubmit}
                    className="
                        space-y-5
                        sm:space-y-6
                    "
                >
                    <AuthInput
                        label="Username"
                        id="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <AuthInput
                        label="Email Address"
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <PasswordInput
                        label="Password"
                        id="password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="Create a password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <PasswordInput
                        label="Confirm Password"
                        id="confirmPassword"
                        name="confirmPassword"
                        autoComplete="new-password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />

                    {error && (
                        <p
                            className="
                                text-center
                                text-sm
                                text-red-500
                            "
                        >
                            {error}
                        </p>
                    )}

                    <AuthButton loading={loading}>
                        Create Account
                    </AuthButton>

                    <p
                        className="
                            text-center
                            text-sm
                            text-muted-foreground
                        "
                    >
                        Already have an account?

                        <Link
                            href="/login"
                            className="
                                ml-1
                                font-semibold
                                text-primary
                                hover:underline
                            "
                        >
                            Login
                        </Link>
                    </p>
                </form>
            </AuthCard>
        </AuthBackground>
    );
}