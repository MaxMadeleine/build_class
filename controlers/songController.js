import express from 'express';
import { SongModel } from '../models/songModel.js';

export const songController = express.Router();

songController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords();
    console.log(data);
    res.status(200).send(data);
});
//kan ikke fange id eller [0-9]
songController.get('/songs:id', async (req, res) => {
    console.log(id);
   // hvad gjorde den =D const data = await SongModel.getRecordById(req.params.id););

});


//single gør at du får den ud som en object istedet for en array