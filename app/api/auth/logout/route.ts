import { cookies } from "next/headers";

export async function POST(){
    try{
        const cookieStore = await cookies();

        cookieStore.delete("session");

        return Response.json({
            success:true ,
            message:"Logout successful.",
        })
    }catch(error){
        console.log("Logout Error", error);

        return Response.json({
            success: false,
            message: "Something went wrong.",
        },{status:500})

    }
}