import express from 'express';
import { SongModel } from '../models/songModel.js';

export const songController = express.Router();

songController.get('/songs', async (req, res) => {
    const data = await SongModel.getAllRecords();
    console.log(data);
    res.status(200).send(data);
});

songController.get('/songs/:id', async (req, res) => {
    console.log(req.params.id);
   const data = await SongModel.getRecordById(req.params.id);
   console.log(data);

   res .status(200).send(data);
});

songController.post('/songs', async (req, res) => {
    const data = await SongModel.createRecord(req.body);
    console.log(data);
    res.status(201).send(data);
});

songController.put('/songs', async (req, res) => {
    const data = await SongModel.updateRecord(req.body);
    console.log(data);
    res.status(200).send(data);
});

songController.delete('/songs', async (req, res) => {
    const data = await SongModel.deleteRecord(req.body);
    console.log(data);
    res.status(200).send(data);
});

//single gør at du får den ud som en object istedet for en array