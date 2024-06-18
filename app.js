import data from './data.json' assert { type: 'json' };

const work = document.getElementById('work');
work.innerHTML = data[0].title;
console.log('pak jinyeong jinjja jalsenggyeotta')