
const express = require('express');
const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json'); // Replace with the path to your service account key file
const rounter = express.Router();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});

const sendNotification = rounter.post('/send-notification', async (req, res) => {
    const { token, longitude,latitude, mynearbyLocation } = await req.body;
    const message = {
        token :"303331736262",
        notification: {
            title :"test",
            body:"test"
            // longitude,latitude,
            // mynearbyLocation,
        },
    };
    admin.messaging().send(message)
        .then((response) => {
            console.log('Notification sent successfully:', response);
            res.json({ success: true, message: 'Notification sent successfully' });
        })
        .catch((error) => {
            console.error('Error sending notification:', error);
            res.status(500).json({ success: false, message: 'Error sending notification' });
        });
});


module.exports = { sendNotification };