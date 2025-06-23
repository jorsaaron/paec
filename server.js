const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'menu.html'));
});

const uri = 'mongodb+srv://aaron:123@clusterpaec.gjr9zg8.mongodb.net/?retryWrites=true&w=majority&appName=clusterpaec&tlsAllowInvalidCertificates=true';
const client = new MongoClient(uri);
client.connect().catch(err => console.error('Error conectando Atlas:', err));

app.post('/participante', async (req, res) => {
  await client.db('paec').collection('participantes').insertOne(req.body);
  res.send('Participante guardado');
});
app.post('/aporte', async (req, res) => {
  await client.db('paec').collection('aportes').insertOne(req.body);
  res.send('Aporte guardado');
});
app.get('/participantes', async (req, res) => {
  res.json(await client.db('paec').collection('participantes').find().toArray());
});
app.get('/aportes', async (req, res) => {
  const { participante } = req.query;
  const q = participante ? { participante } : {};
  res.json(await client.db('paec').collection('aportes').find(q).toArray());
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor escuchando en puerto ${port}`));
