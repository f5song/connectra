import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import pool from './db'; 

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users'); // ทดสอบการดึงข้อมูลจากตาราง users
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});