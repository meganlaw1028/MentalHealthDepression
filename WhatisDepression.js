 //slidecontainer
 var slider = document.getElementById("RangeBar");
    var output = document.getElementById("RangeValue");
    output.innerHTML = slider.value;

    slider.oninput = function() {
        output.innerHTML = this.value;
    };
// Definition of Depression
    let WhatisDepression = "Major depressive disorder, sometimes known as depression,  is a serious medical condition that frequently affects people's feelings,  thoughts, and behaviours. The main symptom of depression is long-term persistent depression, which will affect the daily life of patients. Mild depression can only be depressed, which may not affect daily life, but it may make patients feel difficult and meaningless. In the most serious case, depression can threaten life and make patients suicidal.";
        document.getElementById("WhatisDepression").innerHTML = WhatisDepression;


// Blue picture of Depression
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
            };
    
//Symptoms of Depression
    let line0 = "<p> Depression may only occur once in a lifetime, but usually occurs multiple times. During the attack, symptoms appear almost most of the day, which may include:</p>"
    let line1 = "<li>Feel depressed, teary, lonely, or hopeless.</li>";
    let line2 = "<li>Unexplained physical issues such headaches or backaches.</li>";
    let line3 = "<li>Anger, irritability, or frustration can be sparked by even small things.</li>";
    let line4 = "<li>Loss of enjoyment or interest in most of the activities.</li>";
    let line5 = "<li>Sleep disorders, including insomnia or drowsiness</li>";
    let line6 = "<li>Exhausted. Even if you do a few tiny tasks, it's challenging.</li>";
    let line7 = "<li>Lack of appetite and weight loss, or overeating to put on weight</li>";
    let line8 = "<li>Feel guilty, feel worthless, and disappointed with yourself. </li>";
    let line9 = "<li>It is challenging to concentrate, make decisions, and re Telephonist things. </li>";
    let line10 = "<li>Considerations about suicide appears. </li>";


    document.getElementById("Symptoms_of_Depression").innerHTML =
        line0 + line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8 + line9 + line10;

//Symptoms Table of Depression
        fetch("DepList.json")
    .then(function(response) {
        return response.json();
        })
        .then(function(products) {
            let placeholder = document.querySelector("#SymptomsTable");
            let out = "";
            for (let product of products) {
                out += `
             <tr>
                <td><h1>${product.Type}</h1></td>
                <td>${product.Description}</td>
                <td><li>${product.Symptoms1}</li>
                    <li>${product.Symptoms2}</li>
                    <li>${product.Symptoms3}</li>
                    <li>${product.Symptoms4}</li>
                    <li>${product.Symptoms5}</li>
                </td>
             </tr>
          `;
            }
    
            placeholder.innerHTML = out;
    
    
        });
//Searching function for Symptoms Table of Depression
        function Searchlist() {
            // Declare variables 
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("SearchingInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("StaffRecord");
            tr = table.getElementsByTagName("tr");
        
            // Loop through all table rows, and hide those who don't match the search query
            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0];
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        };