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


// from https://getbootstrap.com/docs/5.2/components/alerts/

const alertPlaceholder = document.getElementById('Subscribe')

const alert = (message, type) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('SignupBtn')
if (alertTrigger) {
    alertTrigger.addEventListener('click', () => {
        alert('Thank you for subscribing to the Metal Help newsletter.', 'success')
    })
}

alertPlaceholder.addEventListener("click", () => {
    let closealert = document.getElementById("Subscribe");
    if (closealert.classList.contains("d-none")) {
        (closealert.classList.remove("d-none"));
    } else {
        closealert.classList.add("d-none");
    }
})