const mongoose = require('mongoose')
const Schema = mongoose.Schema

const infoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    numberOfTravellers: {
        type: Number,
        required: true
    },
    budgetPerPerson: {
        type: Number,
        required: true
    }
})

const TravelInfo = mongoose.model('travelInfo', infoSchema)
module.exports = TravelInfo