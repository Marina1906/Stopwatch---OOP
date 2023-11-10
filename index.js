class Stopwatch {
    constructor() {
        let duration = 0;
        let startTime = null;
        let running = false;
        let timerInterval;
        const display = document.querySelector('.display');
        const startButton = document.getElementById('start');
        const stopButton = document.getElementById('stop');
        const resetButton = document.getElementById('reset');

        const formatTime = (timeInSeconds) => {
            const hours = Math.floor(timeInSeconds / 3600);
            const minutes = Math.floor((timeInSeconds % 3600) / 60);
            const seconds = Math.floor(timeInSeconds % 60);
            return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        };

        this.start = function () {
            if (running) {
                throw new Error('Stopwatch has already started');
            }
            running = true;
            startTime = Date.now() - (duration * 1000); 
            timerInterval = setInterval(updateDisplay, 1000);
        };

        this.stop = function () {
            if (!running) {
                throw new Error('Stopwatch has not started.');
            }
            running = false;
            clearInterval(timerInterval);
        };

        this.reset = function () {
            running = false;
            duration = 0;
            display.textContent = formatTime(duration);
            clearInterval(timerInterval);
        };

        const updateDisplay = () => {
            const currentTime = Math.floor((Date.now() - startTime) / 1000);
            duration = currentTime;
            display.textContent = formatTime(currentTime);
        };

        startButton.addEventListener('click', () => {
            if (!running) {
                this.start();
            }
        });

        stopButton.addEventListener('click', () => {
            if (running) {
                this.stop();
            }
        });

        resetButton.addEventListener('click', () => {
            this.reset();
        });
    }
}
const stopwatch = new Stopwatch();

  
  const style = document.createElement('style');

  style.innerHTML = `
  body {
    background-color: rgb(243, 203, 249);
    margin: 50px;
    font-family: Times New Roman;
  }
  
  .stopwatch {
    text-align: center;
    margin-top: 50px;
  }
  h1 {
    color: #d40bf3;
  }
  .display {
    font-size: 36px;
    color: magenta;
    font-weight: bold;
    margin-bottom: 20px;
  }
  
  button {
    margin: 5px;
    padding: 10px 20px;
    font-size: 16px;
    border: none;
    border-radius: 5px;
    background-color: #d94fee;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e907c7;
  }
  
  button:active {
    background-color: #e80cbf;
  }
`