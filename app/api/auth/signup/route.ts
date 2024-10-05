import { createUser } from "../../../models/user";

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        // Validate input
        if (!name || !email || !password) {
            return new Response(
                JSON.stringify({ message: "All fields are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Attempt to create the user
        const userId = await createUser(name, email, password);

        // Return success response
        return new Response(JSON.stringify({ id: userId }), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error: unknown) {
        console.error(error); // Log the error for debugging

        // Check if error is an instance of Error
        if (error instanceof Error) {
            return new Response(
                JSON.stringify({ message: "Error signing up", error: error.message }),
                { status: 500, headers: { "Content-Type": "application/json" } }
            );
        }

        // Return a generic error message if the error is not an instance of Error
        return new Response(JSON.stringify({ message: "Error signing up" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
        });
    }
}
