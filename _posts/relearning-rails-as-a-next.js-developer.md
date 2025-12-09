### Authors Note

As of writing, I work for Vercel. I am actively invested in making the Next.js, React and larger JavaScript ecosystem successful. Nothing here is an official viewpoint from Next or Vercel, I'm just logging my thoughts as I go back to learning something new. 

## Allow myself to introduce....myself

I started my "learn to code" journey during the absolute beginning and into the height of Codecademy, Teach Yourself to Code and the Bootcamp wave. The entire time I always just loved frontend more than anything backend. It came easier to me, was more tangible and fun. I built a few small things with Ruby. Cloud 66 had a Sinatra app  for their docs that I worked on with their founder Cash during a Saturday morning. And took A LOT of Learn Rails courses online AND read a few books. This is way before YouTube creators were really good at teaching so it wasn't as easy as today but also massively easy to learn and get access to content. 

Through a few fits and starts I learned to shift to focus on just JavaScript and never ever looked back. I spent a considerable amount of time working WordPress and Django up until 2018 but mostly dialed in on JavaScript and its related tools. I'm not a great developer by any means but I can get around in JS-land and I'm familiar with the ecosystem. I've made a decent career of it as a dev for over 10 years. I then switched into sales (Sales Engineering at Vercel) at the largest  and best front end deployment tool in the world helping brands large and small, start up and everything in between use the hell out of Next.js. 

There is nothing like the thrill of hitting refresh and seeing what you wrote on the page change to be what you want. Nothing. The current vibe coding tools have maybe softened some of that excitement but also heightened it as well. Which leads me today. 

I want to build something in the few hours a week I'm relaxing watching TV before bed. I normally reach for a design challenge, updating one of my million Next.js apps or catching up on my scrolling addition. Vibe coding tools make it so I can get really any Next.js app started instantly but I was hoping for a little bit of a challenge. I love to run through a good tutorial and learn something new. 

Tomorrow night I'll probably crack open a Next.js site again but for tonight, maybe grab a glass of wine instead of beer. Maybe read James Patterson instead of David Baldacci. It might be time to try to do something totally different, I'm a man of adventure after all! 

As I'm evaluating what to do I perused Astro, Laravel, Next.js (why am I doing something new?) and remembered the old pal Rails! Ruby on Rails is still around? RoR?!  What's going on with Rails? [is it dead yet? ](https://israilsdead.com/) [They had the last ever Rails conf a few months ago](https://world.hey.com/dhh/the-last-railsconf-c6188593), it must not work anymore?

[It's still alive! ](https://rubyonrails.org/) Some pretty insane layout shift on load but whatever. In the words of Russel Wilson....Let's Ride! 

## Learning up from down

Ok. Rails stil exists, and its something I can build with. Let's rip a site of some kinda, ideally I'll dumb data into a DB and pull it out later. I'll Create, Read, Update and Delete. Where rails rips, CRUD! 

But first how do I even get going on this. What's the package manager in Ruby to get me going. Is it still gems? In JS land everything in npm / pnpm / yarn. In Python it's pip. It's not so bad to get going with npm in JS land but there's conflicting answers on in pnpm is the way to go or yarn or I also heard bun is the way to go now. And Python is really super annoying with venv and virtual env stuff that is prohibitively hard to do anything, to me, it feels like you're not in control and its a literal black box to figure out what's going on. In JS its package.json and node_modules. 

There's a fella with a big head of hair immediately telling me how to build a Hello World application right on the homepage. (We need this for Next.js!) Let's roll with with he has to say, he seems like he has my best interests at heart. 

First thing he tells me is to run "rails new blog". K. WTF is that. Now i have to scroll to figure out how to get to the starting point. Scroll and see Hey and Basecamp. Maybe that fella with all the hair picked those to be on here for a reason. Not sure. Will come back to that after I figure out what "rails new blog does" And Shopify and Github...same logos from back in the day! Still going strong, love it! 

## Lets go...find some packages to download

Gotta pop over to the Rails getting started guide to figure out how to install this thing. https://guides.rubyonrails.org/getting_started.html

And now I have to go over to the Rails installation guide! https://guides.rubyonrails.org/install_ruby_on_rails.html

Ok, notes to self: if I'm brand new to Next.js how do I learn npm and all that jazz! Maybe we need a video to introduce new coders to this stuff! With all the vibe coding out there this might be useful for folks regardless of stack. 

Grabbing a script to install ruby and stuff via homebrew. Super scary! This held me back by a few months if not years when I was first starting. Downloading and versions and environments are hard and scary and boring. A prominent tech figure told me they lost an entire hackathon just install python on their machine. :harold-pain: 

Ruby, mise, gmp, brew. OMG maybe I should have just slopped some AI together. 

....waiting...

...doomscrolling...

....check back....

This isn't rails fault. It's not Next.js fault. But this is something that really sucks as a developer that AI hasn't solved...setting up dev environments. 

## We are so back...to install stuff

Got Ruby installed and now back to the old editor + instructions and maybe that friendly fella with the hair can help me again! He probably lives a peaceful friendly life interacting with people only in real life and nature. No way this guy has a twitter account! 

`$ ruby --v` 

doesn't work! spell it out, dawg 

Ok we're up and running

Nope. Now gotta install gem and *then* Rails. 45 minutes into writing this post and we aren't even up and running yet but we're getting close 

List of everything that spits out from `gem install rails` 

```Fetching rack-3.2.1.gem
Fetching zeitwerk-2.7.3.gem
Fetching thor-1.4.0.gem
Fetching rackup-2.2.1.gem
Fetching concurrent-ruby-1.3.5.gem
Fetching tzinfo-2.0.6.gem
Fetching i18n-1.14.7.gem
Fetching connection_pool-2.5.4.gem
Fetching activesupport-8.0.3.gem
Fetching useragent-0.16.11.gem
Fetching nokogiri-1.18.10-arm64-darwin.gem
Fetching crass-1.0.6.gem
Fetching loofah-2.24.1.gem
Fetching rails-html-sanitizer-1.6.2.gem
Fetching rails-dom-testing-2.3.0.gem
Fetching rack-test-2.2.0.gem
Fetching rack-session-2.1.1.gem
Fetching erubi-1.13.1.gem
Fetching builder-3.3.0.gem
Fetching actionview-8.0.3.gem
Fetching actionpack-8.0.3.gem
Fetching railties-8.0.3.gem
Fetching marcel-1.1.0.gem
Fetching activemodel-8.0.3.gem
Fetching activerecord-8.0.3.gem
Fetching globalid-1.3.0.gem
Fetching activejob-8.0.3.gem
Fetching activestorage-8.0.3.gem
Fetching actiontext-8.0.3.gem
Fetching mini_mime-1.1.5.gem
Fetching mail-2.8.1.gem
Fetching actionmailer-8.0.3.gem
Fetching rails-8.0.3.gem
Fetching actionmailbox-8.0.3.gem
Fetching websocket-extensions-0.1.5.gem
Fetching websocket-driver-0.8.0.gem
Fetching nio4r-2.7.4.gem
Fetching actioncable-8.0.3.gem
Successfully installed zeitwerk-2.7.3
Successfully installed thor-1.4.0
Successfully installed rack-3.2.1
Successfully installed rackup-2.2.1
Successfully installed concurrent-ruby-1.3.5
Successfully installed tzinfo-2.0.6
Successfully installed i18n-1.14.7
Successfully installed connection_pool-2.5.4
Successfully installed activesupport-8.0.3
Successfully installed useragent-0.16.11
Successfully installed nokogiri-1.18.10-arm64-darwin
Successfully installed crass-1.0.6
Successfully installed loofah-2.24.1
Successfully installed rails-html-sanitizer-1.6.2
Successfully installed rails-dom-testing-2.3.0
Successfully installed rack-test-2.2.0
Successfully installed rack-session-2.1.1
Successfully installed erubi-1.13.1
Successfully installed builder-3.3.0
Successfully installed actionview-8.0.3
Successfully installed actionpack-8.0.3
Successfully installed railties-8.0.3
Successfully installed marcel-1.1.0
Successfully installed activemodel-8.0.3
Successfully installed activerecord-8.0.3
Successfully installed globalid-1.3.0
Successfully installed activejob-8.0.3
Successfully installed activestorage-8.0.3
Successfully installed actiontext-8.0.3
Successfully installed mini_mime-1.1.5
Successfully installed mail-2.8.1
Successfully installed actionmailer-8.0.3
Successfully installed actionmailbox-8.0.3
Successfully installed websocket-extensions-0.1.5
Building native extensions. This could take a while...
Successfully installed websocket-driver-0.8.0
Building native extensions. This could take a while...
Successfully installed nio4r-2.7.4
Successfully installed actioncable-8.0.3
Successfully installed rails-8.0.3
```

What is all this stuff? Where does it all go? I now fully get why people freak when they see the cost of the `node_modules` directory. Almost home! 

OK I've got Rails installed...what next... back to the hairy fella! 

## Rails installed, lets go!

The Hairy Fella has spoken for 2 minutes and he's using zero words I understand. 

Ok, there's a lot to unpack and there's too much to compare and dissect in this video but Rails comes with A LOT of stuff right out of the box. You basically start on 3rd base, a lot like Next.js in a way. The big difference is because there's a lot of inside baseball and tiny encapsulated solutions for things that *just work*. It's a lot of magic which I love. I don't know a lot of this magic so I'm going to pivot away from this and go to the written version of the tutorial so I can get something shipped. 

### A quick stop on the video and meta notes

The Hairy Fella is David Hennemeir Hansen the creator of Ruby on Rails. he's also the CTO of Basecamp + Hey.com and an incredible developer and laeder of the community. Someone to learn from and look up to! But I'm going to go and work through another tutorial and chat about that process. 

After watching said video...there are a lot a lot alot of thigns you can do with Rails really easily...but you have to know where things are and the options at hand. It's a big project with a million insider terms and ways of doing things. Most are not THAT much different from Next.js. However, the Convention > Configuration paradigm means I need to know the convention. I have to go and learn what's going on and why it's easy for me. if you work in this ecosystem a lot, then I bet you can really cook and do a lot. For beginners, this might take a little bit more learning curve. 

Getting to about the 20 minute mark and I'm seeing some pretty sweet stuff about websockets! Super cool use case. We *don't* have that in Next.js and Vercel. It's because of our serverless nature that means we can't support many, long running sessions. Interesting! 

Last note before switching to more Rails vs. Next context...I would need to spend a lot of time learning all the language of Rails. There are a million zillion little things. The deployment section is super dense talking about Ubuntu and VMs and something else. For me,. that's too much work! I'm going to reach for something easy. This is where Vercel i think is great, you just chuck a link to a github repo at it and it works. Ubuntu and dealing with production and Kamal and thinking and researching and reasoning.......too much! Lemme focus on learning, building and getting things into people's hands. I know I don't understand this ecosystem and I'm sure there are existing Vercel-like tools out there that do this. Speaking of...where is Heroku? They were the vanguard for the PaaS a dozen years ago. Interesting to see how it's all changed but is still the same thing. 

## Finally, real code stuff 

I want to get the basics going and I want it to be in CRUD land. But how? From the documentation here 

|File/Folder|Purpose|
|---|---|
|app/|Contains the controllers, models, views, helpers, mailers, jobs, and assets for your application. **You'll focus mostly on this folder for the remainder of this guide.**|
|bin/|Contains the `rails` script that starts your app and can contain other scripts you use to set up, update, deploy, or run your application.|
|config/|Contains configuration for your application's routes, database, and more. This is covered in more detail in [Configuring Rails Applications](https://guides.rubyonrails.org/configuring.html).|
|config.ru|[Rack](https://rack.github.io/) configuration for Rack-based servers used to start the application.|
|db/|Contains your current database schema, as well as the database migrations.|
|Dockerfile|Configuration file for Docker.|
|Gemfile  <br>Gemfile.lock|These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the [Bundler](https://bundler.io/) gem.|
|lib/|Extended modules for your application.|
|log/|Application log files.|
|public/|Contains static files and compiled assets. When your app is running, this directory will be exposed as-is.|
|Rakefile|This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing `Rakefile`, you should add your own tasks by adding files to the `lib/tasks` directory of your application.|
|README.md|This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.|
|script/|Contains one-off or general purpose [scripts](https://github.com/rails/rails/blob/main/railties/lib/rails/generators/rails/script/USAGE) and [benchmarks](https://github.com/rails/rails/blob/main/railties/lib/rails/generators/rails/benchmark/USAGE).|
|storage/|Contains SQLite databases and Active Storage files for Disk Service. This is covered in [Active Storage Overview](https://guides.rubyonrails.org/active_storage_overview.html).|
|test/|Unit tests, fixtures, and other test apparatus. These are covered in [Testing Rails Applications](https://guides.rubyonrails.org/testing.html).|
|tmp/|Temporary files (like cache and pid files).|
|vendor/|A place for all third-party code. In a typical Rails application this includes vendored gems.|
|.dockerignore|This file tells Docker which files it should not copy into the container.|
|.gitattributes|This file defines metadata for specific paths in a Git repository. This metadata can be used by Git and other tools to enhance their behavior. See the [gitattributes documentation](https://git-scm.com/docs/gitattributes) for more information.|
|.git/|Contains Git repository files.|
|.github/|Contains GitHub specific files.|
|.gitignore|This file tells Git which files (or patterns) it should ignore. See [GitHub - Ignoring files](https://help.github.com/articles/ignoring-files) for more information about ignoring files.|
|.kamal/|Contains Kamal secrets and deployment hooks.|
|.rubocop.yml|This file contains the configuration for RuboCop.|
|.ruby-version|This file contains the default Ruby version.|
There's a tremendous amount of "stuff" in here that has nothing to do with writing code. Once I get to this point am now starting to question, how do I even deploy this thing? When I get something going? Am I in for a nightmare after this? 

### How to deploy to Rails 

There's a number of heroku like services that provide easy integration and deployment. One huge catch i've seen is that they all have big changes around how the DB is setup. They all recommend using postgres insteald of SQLite which comes out of the box, free 

So now I'm going BACK to the original post and trying to figure out which type of thing I should be making. 


