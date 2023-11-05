


const geoCoder = require('geocoder'); 

const findNearestPoliceStation = (userLocation) => {
   
    const policeStations = [
        { name: 'Police Station 1', latitude: 40.7128, longitude: -74.0060 }, 
        { name: 'Police Station 2', latitude: 34.0522, longitude: -118.2437 }, 
    ];

    let nearestStation = null;
    let minDistance = Number.MAX_VALUE;

    for (const station of policeStations) {
        const stationLocation = { latitude: station.latitude, longitude: station.longitude };
        const distance = geoCoder.distance(userLocation, stationLocation); 

        if (distance < minDistance) {
            nearestStation = station;
            minDistance = distance;
        }
    }

    return nearestStation;
};

module.exports = findNearestPoliceStation;
