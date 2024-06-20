// import data from './data.json' assert { type: 'json' };

const currentStats = document.querySelectorAll('.current');
const previousStats = document.querySelectorAll('.previous');
const dailyBtn = document.getElementById('daily');
const weeklyBtn = document.getElementById('weekly');
const monthlyBtn = document.getElementById('monthly');


fetch('/data.json').then((request) => {  
    if(!request.ok) {
      return null;
    }
    
    return request.json();
  }).then((data) => {
   console.log(data);
   
       function displayWeeklyStats() {
    for (let i = 0; i < currentStats.length; i++) {
        currentStats[i].textContent = data[i].timeframes.weekly.current + 'hrs';
    }

    for (let i = 0; i < previousStats.length; i++) {
        previousStats[i].textContent = 'Last Week - ' + data[i].timeframes.weekly.previous + 'hrs';
    }
           
}

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

displayWeeklyStats();

   dailyBtn.addEventListener('click', () => {
    displayDailyStats();
    dailyBtn.classList.toggle('selected');
    weeklyBtn.classList.remove('selected');
    monthlyBtn.classList.remove('selected');
   });
   monthlyBtn.addEventListener('click', () => {
    displayMonthlyStats();
    dailyBtn.classList.remove('selected');
    weeklyBtn.classList.remove('selected');
    monthlyBtn.classList.toggle('selected');
   });
   weeklyBtn.addEventListener('click', () => {
    displayWeeklyStats();
    dailyBtn.classList.remove('selected');
    weeklyBtn.classList.toggle('selected');
    monthlyBtn.classList.remove('selected');
   });

});

const ellipsisIcons = document.querySelectorAll('img[src="./images/icon-ellipsis.svg"]');
const cards = document.querySelectorAll('.card:not(:first-child)');


cards.forEach(card => {
    card.addEventListener('mouseover', (e) => {
       if (e.target.tagName !== 'IMG') {
        card.classList.add('card-hover-state');
       }
    })
    card.addEventListener('mouseout', () => {
        card.classList.remove('card-hover-state'); 
    })
})

ellipsisIcons.forEach(icon => { 
     icon.addEventListener('mouseover', () => {
     icon.classList.add('img-hover-state');
     cards.forEach(card => {
     card.classList.remove('card-hover-state'); 
     })   
     })
     icon.addEventListener('mouseout', () => {
        icon.classList.remove('img-hover-state');   
     })
})

