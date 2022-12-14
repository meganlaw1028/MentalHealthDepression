document.addEventListener("DOMContentLoaded", function(){
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
        })
    });

document.addEventListener("DOMContentLoaded", function(){
    var NavButton = document.getElementById("NavButton")
    var Navbar = document.getElementById("Navbar")
    var Menu = document.getElementById("Menu")

    Navbar.style.right = "-200px";

    // DOM - event: onclick
    NavButton.onclick = function openCloseNav() {
        if (Navbar.style.right == "-200px") {
            Navbar.style.right = "0";
            Menu.src = "image/close.png";
        } else {
            Navbar.style.right = "-200px";
            Menu.src = "image/menu.png";
        }
    }});

 //slidecontainer
 document.addEventListener("DOMContentLoaded", function(){
    var slider = document.getElementById("RangeBar");
    var output = document.getElementById("RangeValue");
    output.innerHTML = slider.value;

    slider.oninput = function RangeBar() {
        output.innerHTML = this.value;
    }});
// Definition of Depression
document.addEventListener("DOMContentLoaded", function(){
    let WhatisDepression = "Major depressive disorder, sometimes known as depression,  is a serious medical condition that frequently affects people's feelings,  thoughts, and behaviours. The main symptom of depression is long-term persistent depression, which will affect the daily life of patients. Mild depression can only be depressed, which may not affect daily life, but it may make patients feel difficult and meaningless. In the most serious case, depression can threaten life and make patients suicidal.";
        document.getElementById("WhatisDepression").innerHTML = WhatisDepression});


// Blue picture of Depression
document.addEventListener("DOMContentLoaded", function(){
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
            }});
    
//Symptoms of Depression
document.addEventListener("DOMContentLoaded", function(){
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
        line0 + line1 + line2 + line3 + line4 + line5 + line6 + line7 + line8 + line9 + line10});

//Symptoms Table of Depression

document.addEventListener("DOMContentLoaded", function(){
        fetch("DataSet/DepList.json")
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
          `;}
    
            placeholder.innerHTML = out;
    
    
        })
    });

//Searching function for Symptoms Table of Depression
function Searchlist() {
    // Declare variables 
    
    var input = document.getElementById("SearchingInput");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("TypeOfDescription");
    var tr = table.getElementsByTagName("tr");
    var td, i, txtValue;

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

//MouseDown for StaffList
    function mouseDown() {
        document.getElementById("StaffListBtn").style.color = "red";
        };
//MouseUp for StaffList
    function mouseUp() {
        document.getElementById("StaffListBtn").style.color = "grey";
    };


  //var NeedHelp = document.getElementById("NeedHelp");
    //function SeekOver(){alert("Call 0800 652 2863 for free if you need help immediately.");}
    //NeedHelp.addEventListener("mouseover", SeekOver);

//Map
document.addEventListener("DOMContentLoaded",
    function (d3,topojson) {
    'use strict';

    const svg = d3.select('svg');

    const projection = d3.geoNaturalEarth1();
    const pathGenerator = d3.geoPath().projection(projection);

    const g = svg.append('g');

    g.append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({type: 'Sphere'}));

    svg.call(d3.zoom().on('zoom', () => {
        g.attr('transform', d3.event.transform);
    }));

    Promise.all([
        d3.tsv('https://unpkg.com/world-atlas@1.1.4/world/50m.tsv'),
        d3.json('https://unpkg.com/world-atlas@1.1.4/world/50m.json')
    ]).then(([tsvData, topoJSONdata]) => {
        
        const countryName = tsvData.reduce((accumulator, d) => {
        accumulator[d.iso_n3] = d.name;
        return accumulator;
        }, {});
        
        const countries = topojson.feature(topoJSONdata, topoJSONdata.objects.countries);
        g.selectAll('path').data(countries.features)
        .enter().append('path')
            .attr('class', 'country')
            .attr('d', pathGenerator)
        .append('title')
            .text(d => countryName[d.id]);

        
    });

    }(d3,topojson));
    
//Staff List
fetch("DataSet/EmployeeList.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let placeholder = document.querySelector("#MailingListTabletr");
        let out = "";
        for (let product of products) {
            out += `
         <tr>
            <td style="width:5%;"><h1>${product.id}</h1></td>
            <td style="width:10%;"> <img src='${product.image}' class="StaffIcon"> </td>
            <td style="width:20%;"><h2>${product.LastName}</h2></td>
            <td style="width:35%;"><h3>${product.Email}</h3></td>
            <td style="width:30%;"><h4>${product.Position}</h4></td>
            </td>
         </tr>
      `;
        }
        placeholder.innerHTML = out
    });

StaffListBtn.addEventListener("click", () => {
    let close = document.getElementById("MailingListTable");
    if (close.classList.contains("d-none")) {
        (close.classList.remove("d-none"));
    } else {
        close.classList.add("d-none");
    }
});

//Doctor01 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor01 = "You may find it very difficult to tell others about your feelings, but many people find that just telling your own experience can make you feel better. In fact, the care and listening of others are enough to help themselves.";
    document.getElementById("Doctor01Comment").innerHTML = doctor01});
    
//Doctor02 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor02 = "Being plagued by depression can make you unable to take care of yourself. But taking good care of your body step by step can help improve your mood,like try to get enough sleep and do some exercises.";
    document.getElementById("Doctor02Comment").innerHTML = doctor02});
    
//Doctor03 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor03 = "Recording your mood diary can help you observe your mood changes,and you may also find that you have more beautiful moments than you think. ";
    document.getElementById("Doctor03Comment").innerHTML = doctor03});
    
//Doctor04 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor04 = "The study found that enjoying natural time can help solve mental health problems, such as relieve mild to moderate depression, probably because it combines constant exercise and social interaction.";
    document.getElementById("Doctor04Comment").innerHTML = doctor04});
    
//Doctor05 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor05 = "Take time to take care of yourself, such as doing something you like to do, which can help you improve your quality of life. ";
    document.getElementById("Doctor05Comment").innerHTML = doctor05});
    
//Doctor06 Comments
document.addEventListener("DOMContentLoaded", function(){
    let doctor06 = "Eating regularly and keeping your blood sugar stable can improve your mood and physical strength.";
    document.getElementById("Doctor06Comment").innerHTML = doctor06});

    function addClient() {
        var lastname = document.sample.lastname.value;
        var email = document.sample.email.value;
    
        var tr = document.createElement('tr');
    
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
    
    
        td1.innerHTML = lastname;
        td2.innerHTML = email;
        td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML = '<input type="button" name="up" value="Update" onclick="UpClient(this);" class="btn-primary">'
    
        document.getElementById("tbl").appendChild(tr);
    }
    
    function UpClient(Client) {
        var lastname = document.sample.lastname.value;
        var email = document.sample.email.value;
        var s = Client.parentNode.parentNode;
        var tr = document.createElement('tr');
    
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
    
    
        td1.innerHTML = '<input type="text" name="lastname1">';
        td2.innerHTML = '<input type="text" name="email1">';
        td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML = '<input type="button" name="up" value="Update" onclick="addUpClient(this);" class="btn-primary">'
    
        document.getElementById("tbl").replaceChild(tr, s);
    }
    
    function addUpClient(Client) {
        var lastname = document.sample.lastname1.value;
        var email = document.sample.email1.value;
        var s = Client.parentNode.parentNode;
        var tr = document.createElement('tr');
    
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
    
    
        td1.innerHTML = lastname;
        td2.innerHTML = email;
        td3.innerHTML = '<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML = '<input type="button" name="up" value="Update" onclick="UpClient(this);" class="btn-primary">'
    
        document.getElementById("tbl").replaceChild(tr, s);
    }
    
    function delClient(Client) {
        var s = Client.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }
    
    