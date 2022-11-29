        var NavButton = document.getElementById("NavButton")
        var Navbar = document.getElementById("Navbar")
        var Menu = document.getElementById("Menu")

        Navbar.style.right = "-200px";

        NavButton.onclick = function(){
            if(Navbar.style.right == "-200px"){
                Navbar.style.right = "0";
                Menu.src = "image/close.png";
            }
            else{
                Navbar.style.right = "-200px";
                Menu.src = "image/menu.png";
            }
        }


 // All animations will take exactly 500ms
    var scroll = new SmoothScroll('a[href*="#HOME"]', {
        speed: 1000,
        speedAsDuration: true
    });


//

//function of the mailing list
             
    function addClient()
    { 
        var lastname=document.sample.lastname.value; 
        var email=document.sample.email.value; 
        
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        
        
        td1.innerHTML=lastname;
        td2.innerHTML=email;
        td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML='<input type="button" name="up" value="Update" onclick="UpClient(this);" class="btn-primary">'

        document.getElementById("tbl").appendChild(tr);
    }

    function UpClient(Client){
        var lastname=document.sample.lastname.value; 
        var email=document.sample.email.value; 
        var s = Client.parentNode.parentNode;
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        
        
        td1.innerHTML='<input type="text" name="lastname1">';
        td2.innerHTML='<input type="text" name="email1">';
        td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML='<input type="button" name="up" value="Update" onclick="addUpClient(this);" class="btn-primary">'

        document.getElementById("tbl").replaceChild(tr, s);
    }

    function addUpClient(Client){
        var lastname=document.sample.lastname1.value; 
        var email=document.sample.email1.value; 
        var s = Client.parentNode.parentNode;
        var tr = document.createElement('tr');
        
        var td1 = tr.appendChild(document.createElement('td'));
        var td2 = tr.appendChild(document.createElement('td'));
        var td3 = tr.appendChild(document.createElement('td'));
        var td4 = tr.appendChild(document.createElement('td'));
        
        
        td1.innerHTML=lastname;
        td2.innerHTML=email;
        td3.innerHTML='<input type="button" name="del" value="Delete" onclick="delClient(this);" class="btn-danger">'
        td4.innerHTML='<input type="button" name="up" value="Update" onclick="UpClient(this);" class="btn-primary">'

        document.getElementById("tbl").replaceChild(tr, s);
    }

    function delClient(Client){
        var s=Client.parentNode.parentNode;
        s.parentNode.removeChild(s);
    }


//End of mailing List 


        function Searchlist() {
            // Declare variables 
            var input, filter, table, tr, td, i, txtValue;
            input = document.getElementById("myInput");
            filter = input.value.toUpperCase();
            table = document.getElementById("Client_Record");
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
        }

 //function of the mailing list