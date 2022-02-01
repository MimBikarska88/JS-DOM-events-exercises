function solve() {
    let total = 0;
    let divs = Array.from(document.querySelectorAll('.product'));
    let textarea = document.getElementsByTagName('textarea')[0];
    let list = [];
    divs.forEach(function(div) {
        let button = div.querySelector('button');
        button.addEventListener('click', function(event) {
            console.log(event.currentTarget);
            let productName = div.querySelector('.product-title').textContent;
            let productPrice = Number(div.querySelector('.product-line-price').textContent);
            total += productPrice;
            list.push(productName);
            let line = `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
            let text = textarea.value;
            text += line;
            textarea.value = text;
        })
    })
    let checkOutButton = document.querySelector('.checkout');
    checkOutButton.addEventListener('click', function(event) {
        let line = `You bought ${list.join(", ")} for ${total.toFixed(2)}.`;
        textarea.value += line;
    })

}