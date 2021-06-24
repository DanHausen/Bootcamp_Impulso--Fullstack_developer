fetch('/data.json').then(resoinseStream => resoinseStream.json()).then(data => {
    console.log(data);
}).catch(err => {
   console.log(err); 
});