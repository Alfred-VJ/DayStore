const functions = require("firebase-functions");
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');


const app = express();
app.use(cors({ origin: true }));

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
})

const db = admin.firestore();

app.post('/appDayStore', async (req, res) => {
    const data = req.body;
    try {
        const cities = await db.collection('ciudades').doc().create({
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
        const { docs } = await db.collection('ciudades').get();
        const ciudades = docs.map(e => ({ id: e.id, ...e.data() }));
        return res.status(200).json({ ciudades });


    } catch (error) {
        console.error(error);
    }
})

app.get('/', (req, res) => {
    res.status(200).send("Todo bien")
}) 


exports.app = functions.https.onRequest(app);