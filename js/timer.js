const painel = document.querySelector('.painel');
const start = document.querySelector('.start-button');
const pause = document.querySelector('.pause-button');
const stop = document.querySelector('.stop-button');
let timer;
let seconds = 0;

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        painel.innerHTML = createTimer(seconds);
    }, 1000);
}

function createTimer(seconds) {
    const data = new Date(seconds * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}

start.addEventListener('click', (event) => {
    event.preventDefault();
    clearInterval(timer);
    startTimer();
});

pause.addEventListener('click', (event) => {
    event.preventDefault();
    // caso queira pegar o valor de tempo em que é pausado. Pode ser usado apra marcar/salvar tempo.
    // console.log(painel.textContent);
    clearInterval(timer)
});

stop.addEventListener('click', (event) => {
    event.preventDefault();
    painel.innerHTML = '00:00:00'
    clearInterval(timer);
    seconds = 0;
})