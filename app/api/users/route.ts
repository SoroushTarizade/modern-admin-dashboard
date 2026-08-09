import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
    try {
        await connectDB();

        const body = await request.json();

        const {
            username,
            email,
            password,
            confirmPassword,
        } = body;

        if (!username || !email || !password || !confirmPassword) {
            return Response.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                { status: 400 }
            );
        }

        if (password !== confirmPassword) {
            return Response.json(
                {
                    success: false,
                    message: "Passwords do not match.",
                },
                { status: 400 }
            );
        }

        if (password.length < 6) {
            return Response.json(
                {
                    success: false,
                    message: "Password must be at least 6 characters.",
                },
                { status: 400 }
            );
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return Response.json(
                {
                    success: false,
                    message: "User with this email already exists.",
                },
                { status: 409 }
            );
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });

        return Response.json(
            {
                success: true,
                message: "User created successfully.",
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                },
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Register error:", error);

        return Response.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            { status: 500 }
        );
    }
}