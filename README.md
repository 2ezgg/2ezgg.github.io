2ezgg.github.io
===============

Welcome to the Git Hub repository of 2ez.gg

2ez.gg is a website that aims to improve the viewing experience of league of legends related material.


How to use 2ez.gg
=================

Head over to http://2ez.gg

Enter your summoner name and server or champion and click a link directly below for related content. 2ez.gg uses localstorage to remember your details for next time you log on.

2ez.gg lets you follow streamers from Twitch and Azubu. Get notifications when a favourite streamer comes online or the Riot Games is available.

2ez.gg keeps track of new content as it is posted. The lol news, RoG (reign of gaming) and onGamer tabs give you a visual notification of when new content is available.

You can change the settings of 2ez.gg by clicking on the settings tab up the top.

Development
==============
Here's our public trello board - https://trello.com/b/lBoZlT4v/2ez-gg-todo

How to run tests
* Add 'chromedriver' in /test/<yourOperatingSystem>driver to your environment path
* Start selenium server 'java -jar selenium-server-standalone***.jar'
* Open the test file you plan to run, e.g. champGuides/validateGeneratedURLs.js
* Point appUrl variable to your 2ez.gg development instance (can be offline file or web/hosted)
* Run tests via command 'mocha validateGeneratedURLs.js'

Future Changes
==============
GENERAL
- Fix back button issue with popstate
- Make navigation expand button more intuitive

Twitch
- Make add/favourite/remove icons more intuitive
- Remove recently added champions from notification on next ajax request.

Reddit
- Allow for youtube and reddit permalink settings (so that users can refresh the page)
- Fix issue with requests of under 100 data responses repeating on scroll after back button is pressed
- Mobile version scrolling is causing page to say nothing found when it is actually loading
