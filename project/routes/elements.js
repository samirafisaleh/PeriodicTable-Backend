const express = require('express');
const Element = require('../models/elements');
const router = express.Router()

router.get("/", async (req, res) => {
	const posts = await Element.find()
	res.json(posts)
})

router.get("/:elementId", async(req, res) => {

    const element_id = req.params.elementId
    const element = await Element.findOne({elementid : element_id})

    res.json(element)
});

module.exports = router