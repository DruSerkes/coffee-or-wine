import dotenv from 'dotenv';
dotenv.config();

export const API_KEY: string | undefined = process.env.GOOGLE_API_KEY;
export const PORT: number = process.env.PORT ? +process.env.PORT : 3000;


