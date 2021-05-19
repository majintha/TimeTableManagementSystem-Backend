const NotAvailableBatch = require('../models/notAvailableBatch.model');

const createNotAvailableBatch = (req, res) => {

    const notavailablebatch = new NotAvailableBatch(req.body);

    notavailablebatch.save().then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(500).json({
            success: false,
            message: err.message
        });
    });
};

const ViewNotAvailableleBatch = (req, res) => {
    NotAvailableBatch.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const viewAllLecturers = (req, res) => {
    NotAvailableBatch.find({}).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};


const viewUnavailabilitylById = (req, res) => {
    NotAvailableBatch.findById(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};

const deleteunavailabilitylById = (req, res) => {
    NotAvailableBatch.findByIdAndDelete(req.params.id).then(result => {
        res.status(200).json({
            success: true,
            data: result
        });
    }).catch(err => {
        res.status(501).json({
            success: false,
            message: err.message
        });
    });
};


module.exports = {
    createNotAvailableBatch,
    deleteunavailabilitylById,
    viewUnavailabilitylById,
    viewAllLecturers,
    ViewNotAvailableleBatch
}