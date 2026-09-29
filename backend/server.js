const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(cors());
app.use(express.json());

const pool = new Pool({
    host: process.env.DB_HOST,
    port: 5432,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

app.get("/api/health", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json({
            status: "OK",
            database: "connected",
            time: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            status: "ERROR",
            database: "disconnected"
        });
    }
});

app.get("/api/users", async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM users");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(5000, "0.0.0.0", () => {
    console.log("Backend running on port 5000");
});