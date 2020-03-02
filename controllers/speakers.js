const express = require('express');
const router = express.Router();
let data = require('../data/data.json');


//this one gets all the speakers 


router.get('/speakers', (req, res)=>{
    let pagePhotos = [];
    data.speakers.forEach((speakerObj)=>{
        pagePhotos = pagePhotos.concat(speakerObj.artwork)
    })
    res.render('speakers', {
        pageTitle: "Speaker List",
        artistName: "",
        artwork: pagePhotos,
        allSpeakers: data.speakers,
        pageID: 'speakerList'


    })
   
})

router.get('/speakers/:speakerid', (req,res) => {
    pagePhotos = [];
    pageSpeakers = [];
    data.speakers.forEach((speakerObj)=>{
        if (speakerObj.shortname == req.params.speakerid){
            pageSpeakers.push(speakerObj);
            pagePhotos = speakerObj.artwork;
        }


    })
    res.render('speakers', {
        pageTitle: "Speaker List",
        artistName: pageSpeakers[0].artistName,
        artwork: pagePhotos,
        allSpeakers: pageSpeakers,
        pageID: 'speakerList'
    })
})

// router.get('/speaker/:speakerid', (req, res) => {
//     let pagePhotos = [];
//     let pageSpeakers = [];
//     data.speakers.forEach((speakerObj)=>{
//         if(speakerObj.shortname == req.params.speakerid){
//             pageSpeakers.push(speakerObj);
//             pagePhotos = speakerObj.artwork


//         }
//     })
//     res.render('speakers', {
//         pageTitle: "Speaker Details",
//         artistName: pageSpeakers[0].artistName,
//         artwork: pagePhotos,
//         allSpeakers: pageSpeakers,
//         pageID: 'pageSpeakers'
//     } )
// })


module.exports = router;