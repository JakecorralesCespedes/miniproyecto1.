document.addEventListener('DOMContentLoaded', () => {
    loadHistory();
});
function agregarAlDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}
function borrarDisplay() {
    document.getElementById('display').innerText = '0';
}
function borrarUltimo() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function calcularResultado() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.innerText);
        saveToHistory(display.innerText + ' = ' + result);
        display.innerText = result;
    } catch {
        display.innerText = 'Error';
    }
}

function saveToHistory(operation) {
    let history = JSON.parse(localStorage.getItem('historial')) || [];
    history.push(operation);
    localStorage.setItem('historial', JSON.stringify(history));
    loadHistory();
}

function loadHistory() {
    const historial = JSON.parse(localStorage.getItem('historial')) || [];
    const historyElement = document.getElementById('historial');
    historyElement.innerHTML = '';
    historial.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        historyElement.appendChild(li);
    });
}
