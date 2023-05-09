require("../config/DB");
const mongoose = require("mongoose");
const collection = require('../config/Collection')

const DataSchema = new mongoose.Schema({
    phone_number: String,
    campaign_id: String,
    agent_id: String,
    volunteer_no: String,
    date: String
})

const Data = mongoose.model(collection.Data,DataSchema);

module.exports = Data ;