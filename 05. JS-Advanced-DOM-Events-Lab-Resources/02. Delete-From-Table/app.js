function deleteByEmail() {
    let email = document.getElementsByName('email')[0].value;
    document.getElementsByName('email')[0].value = '';
    let div = document.getElementById('result');

    if (email !== '') {
        let cells = Array.from(document.querySelectorAll('table td:nth-child(2)'));
        let found = false;
        cells.forEach(function(cell) {
            if (cell.textContent === email) {
                cell.parentElement.remove();
                found = true;
                div.textContent = 'Deleted';
            }
        })

        if (found == false) {
            div.textContent = 'Not found.';
        }
    }


}