---
layout: post
title:  google hates me
permalink: /posts/:year/:month/:day/:title
---

## why does google hate me

Arrrghh so I'm setting up an email alias for this site, so I can eventually use `blazer@blazeriscool.dev` as a thing I can stick in the [eternal void of hell](/eternalvoidofhell)  
\
In the Google Domains setup I add an alias so all emails sent to `blazer@blazeriscool.dev` redirect to `mypersonalgmail@gmail.com`. Except that's not the real address lmao.  
\
The issue arises whenever I send *any* email to `blazer@blazeriscool.dev`, Google sends me a little notice saying that the address I just emailed doesn't exist.  
\
![Screenshot showing the email address doesn't exist, or is unable to receive mail.](https://cdn.discordapp.com/attachments/657929187004514304/1145201919120392274/firefox_40gy4l5ygv.png)
*The notice in question*  
\
Am I stupid? Like holy hell I can't figure out why this is happening. I'm gonna level with you, I'm pretty fuckin new to this whole "managing a website" thing and it's really just a pet project, but I didn't expect fucking jekyll alone to be this damn hard, let alone email. This site's GitHub repo is so scuffed. Don't look at it.  
\
Alright so the solutions I've tried so far:  
\
**MX records**: yeah they exist. It was all auto setup by Google when I did the initial email forwarding. (thank god)  
\
**Waiting**: Still in progress but I waited around 3 hours and nada. I've sent around 11 test emails so far? I'll keep waiting and updating this page. A lot of things seem to take 24-48 hours to update on Google's end, and I'm hoping this is one of that. In the mean time I'm figuring out how blog posts work.  
\
I'll post the solution if I ever find it. It'll probably just be waiting a day.  
\
Update 8/27/23: It's a day later, and I've done a teeny bit more research. (The emails still bounce) but now I have a dmarc record. It did not solve anything.  
\
I deleted the MX, SPF, and DKIM records, and Google readded them. Solid stuff. I want to say I can safely rule out it being some sort of DNS issue, but I can't be sure.  
\
I'm gonna keep waiting. That probably wont fix it but whatever.  
\
Update 8/27/23 part 2: So it didn't get better, but now I'm looking at Cloudflare's email forwarding. Right now I'm working on how to use their nameservers.  
\
Update 8/27/23 part 3: Holy shit I think it's working. It says the "Routing status" is syncing. I hope this works.  
\
Update 8/27/23 final part: It works! I'm now also transferring the domain to Cloudflare because I want this all in the same place. God bless Matthew Prince.