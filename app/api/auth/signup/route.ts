import { NextResponse } from 'next/server';
import { createUser } from "../../../models/user";
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    try {
        const { name, email, password } = await req.json();

        // Check for missing fields
        if (!name || !email || !password) {
            return new Response(
                JSON.stringify({ message: "All fields are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Create the user and get the user ID
        const userId = await createUser(name, email, password);

        // Create a JWT token with user information
        const token = jwt.sign({ id: userId, name, email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Create a response object
        const response = NextResponse.json({ id: userId });

        // Set a session cookie with the JWT
        response.cookies.set('session', token, { httpOnly: true, maxAge: 3600, secure: process.env.NODE_ENV === 'production' });

        return response;
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
