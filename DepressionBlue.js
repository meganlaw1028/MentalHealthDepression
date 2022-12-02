

    console.log ('fetch a depression Pic');

    catchDepressionBlue()
            .then( response=>{
                console.log ('Depression_Pic01_Done');
            })
            .catch(error=>{
                console.log('Depression_Pic01_Error!');
                console.error(error);
            });

        async function catchDepressionBlue(){
            const response = await fetch("image/depression.jpeg");
            const blob = await response.blob();
            document.getElementById('DepressionBlue').src = URL.createObjectURL(blob);
        }
