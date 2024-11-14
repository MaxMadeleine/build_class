import express from 'express';
import carModel from './models/carModel.js';
import personModel from './models/personModel.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {

  const student = new personModel('John', 86, ' Male');
  console.log(student.present());
  
  //Car Models
  const Ford = new carModel(2019, 'Ford', 'Focus', );
  
  console.log(Ford.present());
  // Other stuff
  

});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
}); 