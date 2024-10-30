let startTime, endTime, totalTime, wordsTyped, wpm;

document.getElementById('start-btn').addEventListener('click', startTest);
document.getElementById('reset-btn').addEventListener('click', resetTest);

function startTest() {
    startTime = new Date().getTime();
    document.getElementById('typing-area').focus();
}

function resetTest() {
    document.getElementById('typing-area').value = '';
    document.getElementById('speed-display').innerHTML = 'Your typing speed: 0 wpm';
}

document.getElementById('typing-area').addEventListener('input', calculateSpeed);

function calculateSpeed() {
    endTime = new Date().getTime();
    totalTime = (endTime - startTime) / 1000;
    wordsTyped = document.getElementById('typing-area').value.trim().split(' ').length;
    wpm = Math.round((wordsTyped / totalTime) * 60);
    document.getElementById('speed-display').innerHTML = `Your typing speed: ${wpm} wpm`;
}