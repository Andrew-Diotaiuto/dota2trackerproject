const TrackerController = require('../controllers/trackerController')

module.exports = app => {
    app.get('/api/allTrackers', TrackerController.findAllTrackers);
    app.post('/api/newTracker', TrackerController.createTracker);
    app.get('/api/oneTracker/:id', TrackerController.findOneTracker);
    app.put('/api/updateTracker/:id', TrackerController.updateTracker);
    app.delete('/api/deleteTracker/:id', TrackerController.deleteTracker);
}