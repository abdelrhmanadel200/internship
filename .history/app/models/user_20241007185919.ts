import pool from '../../config/database';
import bcrypt from 'bcrypt';
import { ResultSetHeader, RowDataPacket } from 'mysql2'; // Ensure you import the correct types


interface User {
    id: number; 
    name: string;
    email: string;
    password: string;
    firstName: string, 
    lastName: string, 
    age: number, 
    phoneNumber: string, 
    country: string, 
    state: string, 
    city: string, 
    university: string 
}

export const createUser = async (
    name: string, 
    email: string, 
    password: string, 
    firstName: string, 
    lastName: string, 
    age: number, 
    phoneNumber: string, 
    country: string, 
    state: string, 
    city: string, 
    university: string
): Promise<number> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query<ResultSetHeader>(
        'INSERT INTO users (name, email, password, firstName, lastName, age, phoneNumber, country, state, city, university) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
            name, 
            email, 
            hashedPassword, 
            firstName, 
            lastName, 
            age, 
            phoneNumber, 
            country, 
            state, 
            city, 
            university
        ]
    );
    return result.insertId;
};