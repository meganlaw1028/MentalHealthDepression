 
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
        };
    
        alertPlaceholder.addEventListener("click", () => {
            let closealert = document.getElementById("Subscribe");
            if (closealert.classList.contains("d-none")) {
                (closealert.classList.remove("d-none"));
            } else {
                closealert.classList.add("d-none");
            }
        })