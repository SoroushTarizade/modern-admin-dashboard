import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";

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

        // Validate required fields
        if (
            !username ||
            !email ||
            !password ||
            !confirmPassword
        ) {
            return Response.json(
                {
                    success: false,
                    message: "All fields are required.",
                },
                {
                    status: 400,
                }
            );
        }

        const normalizedUsername = username.trim();
        const normalizedEmail = email
            .toLowerCase()
            .trim();

        // Validate username
        if (normalizedUsername.length < 3) {
            return Response.json(
                {
                    success: false,
                    message:
                        "Username must be at least 3 characters.",
                },
                {
                    status: 400,
                }
            );
        }

        // Validate password length
        if (password.length < 6) {
            return Response.json(
                {
                    success: false,
                    message:
                        "Password must be at least 6 characters.",
                },
                {
                    status: 400,
                }
            );
        }

        // Confirm password
        if (password !== confirmPassword) {
            return Response.json(
                {
                    success: false,
                    message:
                        "Passwords do not match.",
                },
                {
                    status: 400,
                }
            );
        }

        // Check existing user
        const existingUser = await User.findOne({
            email: normalizedEmail,
        });

        if (existingUser) {
            return Response.json(
                {
                    success: false,
                    message:
                        "An account with this email already exists.",
                },
                {
                    status: 409,
                }
            );
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(
            password,
            10
        );

        // Create user
        const user = await User.create({
            username: normalizedUsername,
            email: normalizedEmail,
            password: hashedPassword,
        });

        // Create session
        const token = await createSession(
            user._id.toString()
        );

        const response = Response.json(
            {
                success: true,
                message:
                    "Account created successfully.",
                user: {
                    id: user._id.toString(),
                    username: user.username,
                    email: user.email,
                },
            },
            {
                status: 201,
            }
        );

        // Set session cookie
        response.headers.set(
            "Set-Cookie",
            `session=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`
        );

        return response;

    } catch (error) {
        console.error(
            "Register Error:",
            error
        );

        return Response.json(
            {
                success: false,
                message:
                    "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}