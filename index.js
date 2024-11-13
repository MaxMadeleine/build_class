const express = import('express');
const app = express();
const port = process.env.PORT || 3000;

const CarModel = import('./assets/JS/carModel').default;
const Person = import('./assets/JS/person').default;

app.use(express.json());

app.use('/assets', express.static('assets'));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 