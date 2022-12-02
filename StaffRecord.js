fetch("DepList.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let placeholder = document.querySelector("#StaffRecordTable");
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


    })