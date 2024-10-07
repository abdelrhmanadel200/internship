import { NextResponse } from 'next/server';
import { createUser } from '../../../models/user'; // Update this function to handle additional fields
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { firstName, lastName, email, password, age, phoneNumber, country, state, city, university } = body;

        // Combine first and last name
        const name = `${firstName} ${lastName}`;

        // Check for missing fields
        if (!name || !email || !password || !firstName || !lastName || !age || !phoneNumber || !country || !state || !city || !university) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        // Create the user and get the user ID
        const userId = await createUser({ name, email, password, firstName, lastName, age, phoneNumber, country, state, city, university });

        // Create a JWT token with user information
        const token = jwt.sign({ id: userId, name, email, firstName, lastName }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Create a response object
        const response = NextResponse.json({ id: userId });

        // Set a session cookie with the JWT
        response.cookies.set('session', token, { httpOnly: true, maxAge: 3600, secure: process.env.NODE_ENV === 'production' });

        // Optionally set other user info cookies
        response.cookies.set('name', name, { maxAge: 3600, secure: process.env.NODE_ENV === 'production' });
        response.cookies.set('email', email, { maxAge: 3600, secure: process.env.NODE_ENV === 'production' });
        response.cookies.set('firstName', firstName, { maxAge: 3600, secure: process.env.NODE_ENV === 'production' });
        response.cookies.set('lastName', lastName, { maxAge: 3600, secure: process.env.NODE_ENV === 'production' });

        return response;
    } catch (error: unknown) {
        console.error(error);
        const message = error instanceof Error ? error.message : "Error signing up";
        return NextResponse.json(
            { message: "Error signing up", error: message },
            { status: 500 }
        );
    }
}
