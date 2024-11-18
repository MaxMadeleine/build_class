import express from 'express';
import { albumModel } from '../models/albumModel.js';

export const albumController = express.Router();

albumController.get('/album', async (req, res) => {
    const data = await albumModel.getAllRecords();
    console.log(data);
    res.status(200).send(data);
});