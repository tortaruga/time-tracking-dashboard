import data from './data.json' assert { type: 'json' };

const currentStats = document.querySelectorAll('.current');
const previousStats = document.querySelectorAll('.previous');

for (let i = 0; i < data.length; i++) {
    currentStats.forEach(stat => {
        stat.textContent = data[i].timeframes.weekly.current
    })
}

console.log(45)

document.getElementById('work').innerHTML = data[1].timeframes.weekly.current