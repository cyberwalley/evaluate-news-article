
//var dotenv = require('dotenv').config({path: path.join(__dirname, '.env')})
//const dotenv = require('dotenv');
//dotenv.config();
/*
console.log(require('dotenv').config())
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let lang = 'en';
const apiKey = process.env.API_KEY;
//let apiKey = 'process.env.API_KEY;
console.log(process.env.API_KEY)
//const dataURL =`${baseURL}?key=${apiKey}&lang=${lang}&txt=${formText}`;

//'/sentiment-2.1?key=<your_key>&lang=<lang>&txt=<text>&model=<model>',

function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('name').value;
    const dataURL =`${baseURL}?key=${apiKey}&lang=${lang}&txt=${formText}`;
console.log(dataURL)
    // Get weather data from open weather Map
    getMeaningData(dataURL)

  .then(function(data){
      // post data to server
    postData('/add', {
      subjectivity: data.subjectivity,
      confidence: data.confidence,
      irony: data.irony,
      formText: formText
    })
    updateUI('/all');
  })

  document.getElementById('name').value ="";


}


// function to get weather data from open weather Map
const getMeaningData = async(dataURL)=> {

    const res = await fetch(dataURL)
        try {
          const data = await res.json()
          console.log(data)
          return data
  
        }catch(error){
       console.log("error", error)
      } 
  
  };


  // function to post data to server
const postData = async(url ='', data ={}) => {
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
    });

    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }

};


// function to update UI
const updateUI = async (url='') => {
    const request = await fetch(url);
    try{

      const allData = await request.json();

          document.getElementById('subjectivity').innerHTML = allData[0].subjectivity;
          document.getElementById('confidence').innerHTML = allData[0].confidence;
          document.getElementById('irony').innerHTML = allData[0].irony;
        
     
    }catch(error){
      console.log("error", error);
    }
  }



export { 
    handleSubmit, 
    updateUI,
    postData,
    getMeaningData
}

*/

/*
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('subjectivity').innerHTML = res.subjectivity
    })

};
  */ 

function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  Client.checkForName(formText)

  console.log("::: Form Submitted :::")
  fetch('/meaning', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      formText: formText
      
    })
    
  }).then(res => res.json()).then(data => {
  
    document.getElementById('subjectivity').innerHTML = data.subjectivity;
    document.getElementById('confidence').innerHTML = data.confidence;
    document.getElementById('irony').innerHTML = data.irony;
    
    
  }).catch(err => alert("error"));
 

};

   export { 
    handleSubmit
}

