// import data from './data.json' assert { type: 'json' };

fetch('./data.json')
.then((response) => response.json())
.then((json) => console.log(json))

const currentStats = document.querySelectorAll('.current');
const previousStats = document.querySelectorAll('.previous');

// curr = [p , p, p ,,p ]
// data[i].timeframes.current.weekly 
 

function displayWeeklyStats() {
    for (let i = 0; i < currentStats.length; i++) {
        currentStats[i].textContent = data[i].timeframes.weekly.current + 'hrs';
    }

    for (let i = 0; i < previousStats.length; i++) {
        previousStats[i].textContent = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
    }
           
}

displayWeeklyStats();

function displayDailyStats() {

    for (let i = 0; i < currentStats.length; i++) {
        currentStats[i].textContent = data[i].timeframes.daily.current + 'hrs';
    }

    for (let i = 0; i < previousStats.length; i++) {
        previousStats[i].textContent = 'Yesterday - ' + data[i].timeframes.daily.previous + 'hrs';
    }

}

function displayMonthlyStats() {
    for (let i = 0; i < currentStats.length; i++) {
        currentStats[i].textContent = data[i].timeframes.monthly.current + 'hrs';
    }

    for (let i = 0; i < previousStats.length; i++) {
        previousStats[i].textContent = 'Last Month - ' + data[i].timeframes.monthly.previous + 'hrs';
    }
}

const dailyBtn = document.getElementById('daily');
const monthlyBtn = document.getElementById('monthly');
const weeklyBtn = document.getElementById('weekly');

dailyBtn.addEventListener('click', displayDailyStats);
monthlyBtn.addEventListener('click', displayMonthlyStats);
weeklyBtn.addEventListener('click', displayWeeklyStats);