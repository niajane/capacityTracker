const Count = require('../models/count.js'); 

const getCounts = async(req, res) => {
    try {
        const posts = await Count.find();
        res.status(200).json(posts);
    } catch (error) {
        res.status(400).json({success: false, error});
    }
}

const getLastFourWeeks = async(req, res) => {
    try {
        var d = new Date();
        d.setDate(d.getDate()-28);
        d.setHours(0, 0, 0, 0);
        const posts = await Count.find({ date: {$gte: d}});
        var average = []
        for(i in posts){
            
        }
        res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({success: false, error});
    }
}

const getAverage = async(req, res) => {
    try {
        const posts = await Count.aggregate(
            [
                {
                    $project: {
                        time: {$add: [{$multiply: [{$hour: "$date2"}, 60]}, {$minute: "$date2"}]},
                        date: 1,
                        count: 1
                    }
                },
                {
                    $group:
                    {
                        _id: "$time",
                        avgCount: { $avg: "$count" }
                    }
                },
                { 
                  $sort : 
                    { 
                        _id : 1
                    }
                }   
            ]
        )
        res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({success: false, error});
    }
}

const getAvDay = async(req, res) => {
    //sanitize input
    try {
        var day = 0;
        if (0 < parseInt(req.params.day) < 8){
            day = parseInt(req.params.day)
        } 
        const posts = await Count.aggregate(
            [
                {
                    $match: {
                        weekday : day
                    }
                },
                {
                    $project: {
                        time: {$add: [{$multiply: [{$hour: "$date2"}, 60]}, {$minute: "$date2"}]},
                        date: 1,
                        count: 1
                    }
                },
                {
                    $group:
                    {
                        _id: "$time",
                        avgCount: { $avg: "$count" }
                    }
                },
                { 
                  $sort : 
                    { 
                        _id : 1
                    }
                }   
            ]
        )
        res.status(200).json(posts);
    } catch(error) {
        res.status(400).json({success: false, error});
    } 
}

module.exports = { getCounts, getLastFourWeeks, getAverage, getAvDay }