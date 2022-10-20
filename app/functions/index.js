const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');
const serviceAccount = require('../key.json')

const app = express();
app.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const DB = admin.firestore();

app.get('/appDayStore', (req, res) => {
    return res.send('Hola mundo');
})

app.post('/appDayStore', async (req, res) => {
    const data = req.body;
    try {
        const cities = await DB.collection('ciudades').doc().create({
            ciudad: data.ciudad,
            servicio: data.servicio,
            meta: data.meta
        });

        return res.status(200).json({ cities });
    } catch (error) {
        console.error(error);
    }
})

app.get('/appDayStore/ciudades', async (req, res) => {
    try {
        const { docs } = await DB.collection('ciudades').get();
        const ciudades = docs.map(e => ({ id: e.id, ...e.data() }));
        return res.status(200).json({ ciudades });


    } catch (error) {
        console.error(error);
    }
})

exports.app = functions.https.onRequest(app);