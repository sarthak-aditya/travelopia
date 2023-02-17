const express = require('express')
const router = express.Router()

const TravelInfo = require("../models/TravelInfo")

// @route GET api/info/getAllInfo
// @desc Get all the entries
// @access Public
router.get('/', async (req, res) => {
    const info = await TravelInfo.find({})
    return res.status(200).send({
        success: true,
        data: info
    })
})

// @route POST api/info/addInfo
// @desc Add an entry to DB
// @access Public
router.post('/addInfo', async (req, res) => {
    const info = new TravelInfo({
        name: req.body.name
    })

    await info.save()
    return res.status(200).send({
        success: true,
        data: info
    })

})

module.exports = router