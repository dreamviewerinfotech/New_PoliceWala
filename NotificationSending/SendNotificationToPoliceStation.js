

const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
}, 'PoliceClub1');

const sendNotificationToNearestPolice = async (notificationData,token) => {

 
    
    const message = {
        token,
        notification: {
            title: `complaint registered about ${notificationData.missing_Location}`,
            body: `complaint registered in ${notificationData.missing_City} against ${notificationData.missing_Complaint}`,
        },
    };

    admin.messaging().send(message)
        .then((response) => {
            console.log('Notification sent successfully:', response);
        })
        .catch((error) => {
            console.error('Error sending notification:', error.message);
        });
};

module.exports = sendNotificationToNearestPolice;
