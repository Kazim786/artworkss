const express = require('express');
const router = express.Router();
let data = require('../data/data.json');


//this one gets all the speakers 
router.get('/speakers', (req, res)=>{
    res.render('speakers')
    let pagePhotos = [];
    data.speakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })

})

router.get('/speakers/:speakerid', (req,res) => {
    res.render('speakers', {
        pageTitle: "Speaker List",
        artistName: "",
        artwork: pagePhotos,
        allSpeakers: data.speakers,
        pageID: 'speakerList'
    })
})


module.exports = router;