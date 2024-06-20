# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

I've wanted to alternatively throw myself or the computer out the window, I prayed to the gods of development to give me one (just one!) straight-forward answer, to have one thing make sense—no matter how small, no matter how useless!—I found myself blabbering JS gibberish in my sleep, dancing crazed-eyed in the moonlight scaring my cats—but it works. The project works. How? Beats the hell of me. But it works.

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Screenshot

![](./images/Screenshot%202024-06-20%20at%2015-14-56%20Frontend%20Mentor%20Time%20tracking%20dashboard.png)


### Links

- Solution URL: [https://www.frontendmentor.io/solutions/time-tracking-dashboard-with-grids-E_muFmftB3](https://www.frontendmentor.io/solutions/time-tracking-dashboard-with-grids-E_muFmftB3)
- Live Site URL: [https://tortaruga.github.io/time-tracking-dashboard/](https://tortaruga.github.io/time-tracking-dashboard/)

## My process

Honestly I just plunged into this one without rhyme nor reason (which might explain why it took me almost four days). I kept going from html to css to js to the design files to the church to ask for guidance. I think the devil tried to lead me astray multiple times whispering very seducing ideas in my ears—like smash this laptop with a hammer and let fetch and APIs and JSON and asynchronous functions blow up in glory and just go to sleep and hopefully don't ever wake up.
Note for self: for the love of everything that is sacred please organize your work better (or, like, AT ALL) next time. 

### Built with

- HTML5 
- CSS 
- Flexbox
- CSS Grid
- Mobile-first workflow
- JS 
- Amount of patience significantly larger than the one I possess

### What I learned

Boy. Where do I begin.

- I learned a few new things about selectors, like .card:not(:first-child) to select all cards but the user one, and img[src="./images/icon-ellipsis.svg"] to select all the images of the ellipsis icon.

- I had a LOT of trouble trying to get that damned hover effect on the three dots icon without triggering the hover effect for the .card element. I tried everything I could with CSS and :hover, but I had to admit my defeat and deal with it with JS. 

- I then had a LOT of trouble getting that damned hover effect to work on JS as well... And apparently mouseover needs a mouseout event listener to handle when you hover away or the style applied just stays there in perpetuity. 

- e.target.tagName !== 'IMG' is NOT the same as !e.target.tagName === 'IMG'. I wasted WAY too much time to figure it out. It makes sense: !e.target.tagName gets evaluated first and then compared to 'IMG', which is not at all what I wanted to happen, but for some reason my brain refused to understand it for well over half an hour.

- I was about to say something about JSON and everything related, but let's be honest: I didn't learn a single thing. I understood absolutely nothing. I'm not even sure why this code finally works. My brain is a foggy swamp where meaningless words like 'AJAX', 'fetch', and 'await'  roam purposelessly like tiny frogs.

- I had used this tiny, gorgeous line:
```
import data from './data.json' assert { type: 'json' };
```

Everything worked smoothly. Until I opened the project on a browser. Then my hopes and dreams got cruelly shattered. 

So I tried using fetch, and the first issue here is that I understood virtually nothing of the whole syntax but we'll worry about that later, and the rest of the issues were that no matter what I did I could not access the data! So it turned out I can only access it from inside the fetch function. Technically my research told me there are ways to access it outside, but I must be doing something wrong because I could not get that to work. 
So what did we learn? We learned that importing .json files is spectacular but useless on both chrome and firefox, that fetch is a mysterious thing that lets me access the .json file but only if I move all my code inside, and that there's something called an anynchronous function, with a whole plethora of new concepts like await, response, .then, and at this point I just want to sleep and I'm strating to get verbose so I'll just end it here.

### Continued development

 I always use the same very basic selectors and I think I could do interesting things (or even do the same things faster) if I learned more about it.

 I need to understand this whole JSON business. Just thinking about it makes me want to cry. 

## Author

- Frontend Mentor - [@tortaruga](https://www.frontendmentor.io/profile/tortaruga)
