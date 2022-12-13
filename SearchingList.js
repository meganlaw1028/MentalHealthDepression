
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