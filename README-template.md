# Frontend Mentor - IP address tracker solution

This is a solution to the [IP address tracker challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

### The challenge

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

A disclaimer here. The users won't be able to reach the api through the webpage sadly.
The logic is there for it to load, but I've realized a bit late that the ip parameter for the api is optional, and haven't made it to call the api on the initial load. Oops...

### Screenshot

![](./screenshot.jpg)

Hoping the formatting isn't ugly and follows the page flow.

### Links

- Solution URL: [Add solution URL here](https://github.com/Tschikish/ip-address-tracker-Tschikish)
- Live Site URL: [Add live site URL here](https://ip-address-tracker-caki-2y9g2nm1w-tschikishs-projects-dfb26c66.vercel.app/)

## My process

### Built with

- React + TypeScript
- Vite
- Flexbox
- CSS Grid
- Leaflet.js
- Desktop-first workflow

### What I learned

I learned why some third-party APIs block client-side requests unless the domain is whitelisted, and how to handle errors like:
strict-origin-when-cross-origin 403

Some insight into Typescript and how it behaves. A few headaches here and there, but I'm getting the jist of it (Hopefully!)

Leaflet is an old friend of mine. I had encountered it years ago, when i first gave it a go at this project, but gave up since development wasn't a focus at the time (Back in 2020/21). It's also being incorporated in another project I'm developing with other people at this moment. Shamefully Google Maps charges for their API, but hopefully I will get to work on that at some point in a company, since my last job position was supporting a software company which automates bus schedules, and more.


### Continued development

Beyond orienting myself towards full-stack, I’m aiming to deepen my understanding of HTTP/HTTPS protocols, RESTful API design, request-response lifecycles, latency optimization, and network connectivity patterns.

## Author

- Frontend Mentor - [@Tschikish](https://www.frontendmentor.io/profile/Tschikish)
