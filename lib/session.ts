import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";

const secretKey = process.env.SESSION_SECRET;

if (!secretKey) {
    throw new Error("SESSION_SECRET is not defined.");
}

const encodedKey = new TextEncoder().encode(secretKey);

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

export async function getCurrentUser() {
    const cookieStore = await cookies();

    const sessionCookie = cookieStore.get("session");

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
    return user;
}