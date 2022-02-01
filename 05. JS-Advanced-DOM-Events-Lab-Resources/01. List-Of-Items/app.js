function addItem() {
    let listElement = document.getElementById('items');
    let elementToAdd = document.getElementById('newItemText').value;
    document.getElementById('newItemText').value = '';
    if (elementToAdd !== '') {
        let li = document.createElement('li');
        let textNode = document.createTextNode(elementToAdd);
        li.appendChild(textNode);
        listElement.appendChild(li);
    }
}