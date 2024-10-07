import { NextResponse } from 'next/server';
import { findUserByEmail } from '../../../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();

        const user = await findUserByEmail(email);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
        }

        // Create a JWT token with user information
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, process.env.JWT_SECRET!, { expiresIn: '1h' });

        // Set the cookie with the JWT
        const response = NextResponse.json({ message: 'Login successful' });
        response.cookies.set('session', token, { httpOnly: true, maxAge: 3600, secure: process.env.NODE_ENV === 'production' });

        return response;
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
    }
}