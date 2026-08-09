"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

import AuthBackground from "@/components/auth/AuthBackground";
import AuthCard from "@/components/auth/AuthCard";
import AuthInput from "@/components/auth/AuthInput";
import PasswordInput from "@/components/auth/PasswordInput";
import AuthButton from "@/components/auth/AuthButton";

export default function LoginPage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (
        event: React.FormEvent<HTMLFormElement>
    ) => {
        event.preventDefault();

        setMessage("");
        setError("");
        setLoading(true);

        try {
            const response = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Invalid email or password."
                );
                return;
            }

            setMessage(data.message);

            router.push("/");
        } catch (error) {
            console.error("Login error:", error);

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
                title="Welcome Back"
                subtitle="Please enter your email and password to continue."
            >
                <form
                    onSubmit={handleSubmit}
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
                        value={formData.email}
                        onChange={handleChange}
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
                                htmlFor="password"
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
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

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

                    {message && (
                        <p
                            className="
                                text-center
                                text-sm
                                text-green-500
                            "
                        >
                            {message}
                        </p>
                    )}

                    <AuthButton>
                        {loading ? "Signing In..." : "Sign In"}
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