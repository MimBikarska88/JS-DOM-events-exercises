function focused() {
    let inputs = Array.from(document.getElementsByTagName('input'));
    inputs.forEach(function(input) {
        input.addEventListener('focus', function(event) {
            input.parentElement.classList.add('focused');
        });
        input.addEventListener('blur', function(event) {
            input.parentElement.classList.remove('focused');
        })
    })

}