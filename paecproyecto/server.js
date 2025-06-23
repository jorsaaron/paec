const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://aaron:123@clusterpaec.gjr9zg8.mongodb.net/?retryWrites=true&w=majority&appName=clusterpaec';
const client = new MongoClient(uri);

async function connect() {
  await client.connect();
}
connect();

app.post('/participante', async (req, res) => {
  const data = req.body;
  await client.db('paec').collection('participantes').insertOne(data);
  res.send('Participante guardado');
});

app.post('/aporte', async (req, res) => {
  const data = req.body;
  await client.db('paec').collection('aportes').insertOne(data);
  res.send('Aporte guardado');
});

app.get('/participantes', async (req, res) => {
  const datos = await client.db('paec').collection('participantes').find().toArray();
  res.send(datos);
});

app.get('/aportes', async (req, res) => {
  const filtro = req.query.participante;
  let query = {};
  if (filtro) query.participante = filtro;
  const datos = await client.db('paec').collection('aportes').find(query).toArray();
  res.send(datos);
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
