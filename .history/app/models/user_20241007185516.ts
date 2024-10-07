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

export const createUser = async (name: string, email: string, password: string): Promise<number> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query<ResultSetHeader>(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
    );
    return result.insertId; 
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const [users] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM users WHERE email = ?', 
        [email]
    );
    return users.length > 0 ? (users[0] as User) : null; 
};
