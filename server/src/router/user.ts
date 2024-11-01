import { Router } from "express"
import express, { Express, Request, Response } from "express";
import pool from "@/db";
import { authenticateToken } from "@/middleware/authenticate";

interface CustomRequest extends Request {
    user?: any; // หรือระบุ type ที่เหมาะสมกับข้อมูลของคุณ
}

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    try {
        const result = await pool.query('SELECT * FROM users'); // ทดสอบการดึงข้อมูลจากตาราง users
        res.send(result.rows);
    } catch (error) {
        console.error('Error fetching data:', error);
        res.status(500).send('Internal Server Error');
    }
})

router.get('/protected-route', authenticateToken, async (req: CustomRequest, res: Response) => {
    console.log(req.user)
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [req.user.userId]); // 
    res.json({ message: "This is a protected route", user: result.rows[0] });
});


export default router