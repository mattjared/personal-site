---
title: Scraping Every NBA Player Ever
published: true
date: March 31, 2023
updated: September 16, 2025
icon: ⛹🏻‍♂️
---

## How to make an interesting commit message

Updated: September 16th, 2025



I recently stumbled upon a comprehensive list of every NBA player ever on Basketball Reference, and I couldn't resist the urge to scrape it.

Using Puppeteer, a Node.js library for automating headless Chrome and Firefox, I was able to navigate to the webpage, extract the necessary data, and store it all in a huge array of 5101 items.

Next, I decided to upload this array to Upstash, a serverless Redis platform. Upstash makes it easy to store and manage large data sets without the need for complex infrastructure or server maintenance.

Once the array was uploaded to Upstash, I was able to bootstrap a new Next.js project with create-next-app. From there, I created a route that hits my Upstash set containing the giant array of NBA players. Using Upstash's built-in SRANDMEMBER function, I can randomly select an entry from the set with every request.

And that's it! With just a few lines of code and some powerful tools, I was able to scrape and store a massive amount of data, and build a simple web app that can leverage that data to provide endless entertainment for NBA fans everywhere. Who knows what other treasures await?

p.s. All of the above was written by ChatGPT. Here's my prompt..

```bash
rewrite the following to be more interesting, all content should be output in markdown: 
- I found a list of every NBA player ever on <https://www.basketball-reference.com/players/>
- I used [Puppeteer](https://pptr.dev/) to go and scrape and store all of those players in a huge array (5101 items so far!)
- I took that array and uploaded it to [Upstash](https://upstash.com/)
- I bootstrapped a new [Next.js](https://nextjs.org/) project with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and created a route that hits my Upstash set containing my giant array. Upstash randomly selects an entry for me
- Profit
```

Hit this url to get a random hooper: https://github.com/mattjared/random-hooper
And check out the code to see how I pull it all together: https://github.com/mattjared/random-hooper