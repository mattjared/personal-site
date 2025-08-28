---
title: Personalizing every new tab experience
published: true
date: August 20, 2025
icon: 🚙
excerpt: Building a Papier Clone with v0
---

My favorite Chrome Extension, Papier is unmaintained and I was getting some warnings about it from the Chrome Web Store. At its core, Papier is super simple. On every new tab it persist as an open text field. Between new tabs your notes are stored in localStorage so no matter what you're doing anything you jot in Papier gets stored. I made a duplicate version while I was at Atlassian to send tasks to Trello. I think I uploaded a late version to github somewhere but with v0 and Cursor I wanted to give it a fresh try to build it over again.

A quick rundown on what needs to happen: 

- Chrome extension for "new tab"
- Textarea to jot notes
- Said notes go to localStorage 
- Nice to have: look cool and act as a "personal launch page" type of thing. 

v0 did a pretty great job on my early versions: https://void-neon.vercel.app/

But that's half the battle, I want to be able to update it all the time and fiddle. v0 making an app that is cool is the easy part, making it so I am the human-in-the-loop alongside AI is where the challenges lie. The first issue I had was taking my Next.js application and converting it to Chrome Extension ready index.html, index.js and index.css. Old school stuff! How do you take a Next.js site and deploy it? Easy: Vercel. How do you take a Chrome Extension and make it adopt to that world? Also easy: v0! When the app hit the shape that I liked I had v0 spit out a "Chrome Extension" version which is now central to my development process.

One more thing: this is the future of software development. Not making stuff for the masses but reaching for tools and finding a groove that puts me in the heart of the work. Building for the web is going to change because we're going to need to know how to quickly modify what we've built and take it to the platforms where our work needs to live. This same flow is going to apply beyond just simple web apps, we need to be able to quickly know how to backfill the best-in-class tools of today to the not-so-best-in-class platforms of the past that are still where our needs lie. 

Some future thinking here: I want to make this an iPhone app or a trmnl dashboard. How? AI to migrate current React / Next and Postgres / KV code to places that need it represents a huge opportunity at large. Who's going to meet me there?