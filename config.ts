import dotenv from 'dotenv';
dotenv.config();

export const PORT: number = process.env.PORT ? +process.env.PORT : 3000;


