const Tracker = require('../models/trackerModels')

module.exports = {
    findAllTrackers: (req, res) => {
        Tracker.find()
            .then((allTrackers) => {
                res.status(200).json(allTrackers)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    createTracker: (req, res) => {
        Tracker.create(req.body)
            .then((newTracker) => {
                res.status(200).json(newTracker)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    findOneTracker: (req, res) => {
        Tracker.findOne({ _id: req.params.id })
            .then((oneTracker) => {
                res.status(200).json(oneTracker)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    updateTracker: (req, res) => {
        Tracker.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true })
            .then((updatedTracker) => {
                res.status(200).json(updatedTracker)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },
    deleteTracker: (req, res) => {
        Tracker.deleteOne({ _id: req.params.id })
            .then((result) => {
                res.status(200).json(result)
            })
            .catch((err) => {
                res.status(400).json(err)
            })

    }
}