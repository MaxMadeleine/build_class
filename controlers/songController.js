import express from 'express';
import { SongModel } from '../models/songModel.js';

export const songController = express.Router();

songController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords();
    console.log(data);
    res.status(200).send(data);
});