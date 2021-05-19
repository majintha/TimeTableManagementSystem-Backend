const NotAvailableLecturer = require('../models/notAvailableLecturer.model');

const createNotAvailableLecturer = (req, res) => {

    const notavailablelecturer = new NotAvailableLecturer(req.body);

    notavailablelecturer.save().then(result => {
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

const viewAllLecturers = (req, res) => {
    NotAvailableLecturer.find({}).then(result => {
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

const ViewNotAvailableleLecturer = (req, res) => {
    NotAvailableLecturer.find({}).then(result => {
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
    NotAvailableLecturer.findById(req.params.id).then(result => {
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
    NotAvailableLecturer.findByIdAndDelete(req.params.id).then(result => {
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
    createNotAvailableLecturer,
    deleteunavailabilitylById,
    viewUnavailabilitylById,
    viewAllLecturers,
    ViewNotAvailableleLecturer
}