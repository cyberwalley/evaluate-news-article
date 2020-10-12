const dotenv = require('dotenv');
dotenv.config();
const apiKey = process.env.API_KEY;

var path = require('path')
const axios = require('axios')
const express = require('express')
const bodyParser = require('body-parser');
//var request = require('request');
//const mockAPIResponse = require('./mockAPI.js')

// Cors for cross origin allowance
const cors = require('cors');

const app = express()

//app.use(express.static('src/client'))
app.use(express.static('dist'))

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

console.log(__dirname)

app.get('/', function (req, res) {
    //res.sendFile('/client/views/index.html', { root: __dirname + '/..' })

    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8082, function () {
    console.log('listening on port 8082!')
})

/*
app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
*/


//const dataObj= [];

// GET route
/*
app.get('/', function sendData (req, res) {
 
  //res.send(projectData);

    var qs = {  
        key: '30cf1f7e9f8a1359b318a63120c0e602',
        lang: 'en',
        txt: name
    };

    req({
        url: 'https://api.meaningcloud.com/sentiment-2.1',
        qs: qs

    }, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        var dataObj = JSON.parse(body);
        res.json(dataObj.name);
        }
    });
});
*/

/*
app.post('/add', function getData(req, res){
  newEntry ={
      subjectivity: req.body.subjectivity,
      confidence: req.body.confidence,
      irony: req.body.irony,
      formText: req.body.formText
   

  };

  //add most recent entry
  dataObj.push(newEntry);
  console.log( projectData );
  
});

*/

app.post('/meaning', (req, res) => {
const url = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&txt=${req.body.formText}`
    axios({
        url: url,
        responseType:'json'

    }).then(data => res.json(data.data))

})