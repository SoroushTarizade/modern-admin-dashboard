import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import bcrypt from "bcrypt";
import { createSession } from "@/lib/session";

export async function POST(request:Request){
    try{
        await connectDB();

        const body = await request.json();

        const {email , password} = body;

        if( !email || !password){
            return Response.json({
                success:false,
                message:"Email and Password are required",
            },
            {status : 400}
        );
    }
        const user = await  User.findOne({
            email: email.toLowerCase().trim()
        })

        if(!user){
            return Response.json({
                success:false,
                message:"Invalid email or password",
            }, {status : 401})
        }

        const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
        );

        if(!isPasswordCorrect){
            return Response.json({
                success: false,
                message:"Invalid email or password",
            },{status : 401})
        }

        const token = await createSession(user._id.toString());

        const response = Response.json({
            success: true,
            message: "Login successful.",
            user: {
            id: user._id,
            username: user.username,
            email: user.email,
        }, 
        }, {
        status: 200,
        });

        response.headers.set(
            "Set-Cookie",
            `session=${token}; HttpOnly; Path=/; Max-Age=604800; SameSite=Lax`  
        );

return response;
    } catch (error) {
        console.log("Login Error" , error)

        return Response.json({
            success: false,
            message:"Something went wrong",
        },{status: 500})
    }
}