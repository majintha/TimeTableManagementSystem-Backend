const mongoose = require('mongoose');
const { Schema } = mongoose;

const notAvailableBatchSchema = new mongoose.Schema({
    batchId: { type: Schema.Types.ObjectId, ref: 'batch'},
    subject1: { type: String},
    subject: { type: String},
    day: { type: String},
    startTime: { type: String},
    endTime: { type: String}
}, {timestamps: true});

module.exports =  mongoose.model('notavailablebatches', notAvailableBatchSchema);