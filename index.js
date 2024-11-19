import express from "express";
import carModel from "./models/carModel.js";
import personModel from "./models/personModel.js";
import { SongModel } from "./models/songModel.js";
import { songController } from "./controlers/songController.js";
import { albumModel } from "./models/albumModel.js";
import { albumController } from "./controlers/albumController.js";
const app = express();
const port = process.env.PORT || 3300;

app.use(express.urlencoded({ extended: true }));



//route til forsiden
app.get("/", (req, res) => {
  res.send("velkommen");
});

app.use(songController);

app.use(albumController);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
