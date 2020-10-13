function handleSubmit(event) {
  event.preventDefault()
  // check what text was put into the form field
  let formText = document.getElementById('name').value
  

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

