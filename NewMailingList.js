fetch("MailingList.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(products) {
        let placeholder = document.querySelector("#MailingListTabletr");
        let out = "";
        for (let product of products) {
            out += `
         <tr>
            <td><h1>${product.id}</h1></td>
            <td> <img src='${product.image}' class="StaffIcon"> </td>
            <td><h2>${product.LastName}</h2></td>
            <td><h3>${product.Email}</h3></td>
            <td><h4>${product.Position}</h4></td>
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