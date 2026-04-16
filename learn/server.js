import express from 'express';
import dotenv from 'dotenv';
import NoteRoutes from './routes/NoteRoute.js'
import connectDB from './config/db.js';

dotenv.config();

connectDB();

const app = express();



app.use("/api/notes", NoteRoutes)



const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
        console.log(`server started at port ${PORT} with this mode : ${process.env.NODE_ENV}`.bgYellow)
});
