import { deleteSessionCookie } from "@/lib/session";

export async function POST() {
    try {
        await deleteSessionCookie();

        return Response.json({
            success: true,
            message: "Logout successful.",
        });

    } catch (error) {
        console.log(
            "Logout Error",
            error
        );

        return Response.json(
            {
                success: false,
                message: "Something went wrong.",
            },
            {
                status: 500,
            }
        );
    }
}