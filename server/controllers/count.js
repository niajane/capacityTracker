const Count = require('../models/count.js');

const getCounts = async(req, res) => {
    try {
        const posts = await Count.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({success: false, error});
    }
}

module.exports = { getCounts }