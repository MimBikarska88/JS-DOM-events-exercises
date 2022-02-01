function validate() {
    let emailElement = document.getElementById('email');
    let pattern = /([a-z])+@([a-z])+\.([a-z])+/g;
    emailElement.addEventListener('change', function(event) {
        let val = emailElement.value;
        if (!val.match(pattern)) {
            emailElement.classList.add('error');
        } else {
            emailElement.classList.remove('error');
        }

    })


}