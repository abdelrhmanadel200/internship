import pool from '../../config/database';
import bcrypt from 'bcrypt';
import { ResultSetHeader, RowDataPacket } from 'mysql2'; // Ensure you import the correct types

// Define a User interface
interface User {
    id: number; // Assuming your user table has an id field
    name: string;
    email: string;
    password: string;
}

export const createUser = async (name: string, email: string, password: string): Promise<number> => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [result] = await pool.query<ResultSetHeader>(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hashedPassword]
    );
    return result.insertId; // This should work with the correct type
};

export const findUserByEmail = async (email: string): Promise<User | null> => {
    const [users] = await pool.query<RowDataPacket[]>(
        'SELECT * FROM users WHERE email = ?', 
        [email]
    );
    return users.length > 0 ? (users[0] as User) : null; // Type assertion to User
};
