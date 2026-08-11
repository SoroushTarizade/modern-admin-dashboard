"use client";

import Link from "next/link";
import {useState} from "react" ;
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

        const [message, setMessage] = useState("");
        const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (!response.ok) {
            setMessage(data.message);
            return;
        }
        router.push("/");
        router.refresh();
    } catch (error) {
        console.error("Register error:", error);
        setMessage("Something went wrong. Please try again.");
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

{message && (
    <p className="text-center text-sm">
        {message}
    </p>
)}

<AuthButton>
    {loading ? "Creating Account..." : "Create Account"}
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