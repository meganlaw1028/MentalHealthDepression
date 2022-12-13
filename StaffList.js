// Mailing list for staff. 

fetch("EmployeeList.json")
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