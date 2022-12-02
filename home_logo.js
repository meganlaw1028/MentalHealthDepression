
console.log ('fetch a logo');
    fetch("image/MentalHealthLogo.png")
    .then(response=> {
        console.log(response);
        return response.blob();

    })
    .then(blob=>{
        console.log(blob);
        document.getElementById('logo').src = URL.createObjectURL(blob);
    })

    .catch(error=> {
        console.log('logo error!');
        console.error(error);
    });