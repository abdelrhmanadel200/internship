import { createUser } from "../../../models/user";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

       
        if (!name || !email || !password) {
            return new Response(
                JSON.stringify({ message: "All fields are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        
        const userId = await createUser(name, email, password);

        
        return new Response(JSON.stringify({ id: userId }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: unknown) {
        console.error(error); 

        
        if (error instanceof Error) {
            return new Response(
                JSON.stringify({ message: "Error signing up", error: error.message }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

       
        return new Response(JSON.stringify({ message: "Error signing up" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
