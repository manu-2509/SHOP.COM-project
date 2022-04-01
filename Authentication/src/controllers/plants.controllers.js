const express = require('express');
const Plants = require('../models/plants.models')
let router = express.Router()

router.post("",async(req, res)=>{
    try {
        let plants = await Plants.create(req.body)
       return res.status(201).send(plants)
    } catch (err) {
        return res.status(500).send({ err: err.message })
    }
})

router.get("",async(req,res)=>{
    try {
        let plants =await Plants.find().lean().exec()
        return res.status(201).send(plants)
    } catch (err) {
        return res.status(500).send({ err: err.message })
    }
})

module.exports=router