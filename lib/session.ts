import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

const secretKey = process.env.SESSION_SECRET;

if (!secretKey) {
    throw new Error("SESSION_SECRET is not defined.");
}

const encodedKey = new TextEncoder().encode(secretKey);

const SESSION_COOKIE_NAME = "session";

const SESSION_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function createSession(userId: string) {
    const token = await new SignJWT({
        userId,
    })
        .setProtectedHeader({
            alg: "HS256",
        })
        .setIssuedAt()
        .setExpirationTime("7d")
        .sign(encodedKey);

    return token;
}

export async function verifySession(token: string) {
    try {
        const { payload } = await jwtVerify(
            token,
            encodedKey
        );

        return payload;
    } catch {
        return null;
    }
}

export async function setSessionCookie(token: string) {
    const cookieStore = await cookies();

    cookieStore.set(
        SESSION_COOKIE_NAME,
        token,
        {
            httpOnly: true,

            secure: process.env.NODE_ENV === "production",

            sameSite: "lax",

            path: "/",

            maxAge: SESSION_MAX_AGE,
        }
    );
}

export async function deleteSessionCookie() {
    const cookieStore = await cookies();

    cookieStore.delete(SESSION_COOKIE_NAME);
}

export async function getCurrentUser() {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get(
        SESSION_COOKIE_NAME
    );

    if (!sessionCookie?.value) {
        return null;
    }

    const session = await verifySession(
        sessionCookie.value
    );

    if (!session?.userId) {
        return null;
    }

    await connectDB();

    const user = await User.findById(
        session.userId
    ).select("-password");

    if (!user) {
        return null;
    }

    return {
        id: user._id.toString(),
        username: user.username,
        email: user.email,
    };
}