---
title: How to make an interesting commit message
published: true
date: March 31, 2023
updated: September 16, 2025
icon: ⛹🏻‍♂️
---

I recently stumbled upon a comprehensive list of every NBA player ever on BasketballReference.com. For whatever reason, I didn't think they would have ALL of them. I've had to commit code publicly a lot of  and writing all the steps out has been awkward and weird and I can never think of a useful commit message.

Whenever there's a combination of new data + an extremely unimportant problem I always sprint to get a new project going. Lets figure out how to make interesting commit messages.

Problems to solve:

- how to get the data out of BasketballReference.com
- how to store that somewhere
- how to retrieve what was stored
- how to automatically dump that into a commit message

Let's break down each of these steps with some basic code and you'll be able to make your own version using whatever data you find.

## How to get the data out of BasketballReference.com

The page in question wasn't an enormous list, it was an _alphabetized_ enormous list. To scrape data off a page programmatically we can do a bunch of stuff.

- Manually go to each page and copy paste somewhere (way too long and slow)
- Go to each page and run a script in the console like `document.querySelectorAll(".some-selector")` take that and then dump it somewhere? (Better! But could take a while to get all 26 letters and a lot of manual work still)
- Use a library, such as Puppeteer, to scrape the page and get the elements we want stored somewhere. (One step better than the last option because we'll be able to increment through each letter)

Using Puppeteer, a Node.js library for automating headless Chrome and Firefox, I was able to navigate to the webpage, extract the necessary data, and store it all in a huge array of 5101 items. (note: This was 2023 and previous so this number is probably a little bit bigger now!) So what are we going to do this with this massive array? 

## What to do with a massive array of data you need 

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