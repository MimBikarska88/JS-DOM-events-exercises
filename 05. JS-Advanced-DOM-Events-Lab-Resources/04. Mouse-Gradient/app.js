function attachGradientEvents() {
    let gradient = document.getElementById('gradient');
    gradient.addEventListener('mousemove', hover);
    gradient.addEventListener('mouseout', out);

    function hover(event) {

        let result = event.offsetX / (event.target.clientWidth - 1);
        let resultElement = document.getElementById('result');
        result *= 100;
        result = Math.trunc(result);
        resultElement.textContent = `${result}%`;
    }

    function out(event) {
        let resultElement = document.getElementById('result');
        resultElement.textContent = '';
    }
}