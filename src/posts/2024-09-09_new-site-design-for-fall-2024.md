---
title: New Site Design for 2024
date: 2024-09-12
summary: I'm excited to share my personal website with a fresh new design, built with Deno Lume.
tags:
  - coding
  - web development
---

A new website! It's beyond time that I create a professional website to display my abilities, interest and what I'm currently working on. And here it is!

<!--more-->

I built this site to serve as a journal of sorts. The scope of this website encompasses all of my work - creative, technical, and physical - because as a software engineer and as person I have too many interests/passions to adequately fit on a single page resume.

I aim to post regular devlogs on the state of my projects. I plan on creating (and finishing!) more bite-sized projects and adding them to a (future planned) projects tab on this site.

## Tools

I first started building this site using [NextJS](https://nextjs.org) but as I came to learn and work with the [Deno](https://deno.com) ecosystem I discovered [Lume](https://lume.land). NextJS is overkill for a static site without a database and lacks many of the content management/generation tools built-in to a static site generator.

Firstly, what is a static site? A static site is pre-built - all of the webpages and content are organized into full pages ahead of time for all users. This means it's fast because the server is only passing along the pre-built files - it isn't performing any calculations or API calls to assemble or deliver data.

### Lume

Why Lume? I really enjoy the Deno developer experience. Deno was created as a modern solution to a lot of the issues inherent in NodeJS. Managing packages and dependencies is more streamlined. Deno values security and explicit with runtime permissions. It's Typescript first! Lume is **the** static site generator for Deno.

Lume provides plugins for useful functions and data like date, table of contents, pagefind, transform images, and more. I had my choice of templating engines to build my pages - I chose [preact](https://preactjs.com). A full site search  was easy with the [pagefind](https://pagefind.app) plugin, which I limited to just the posts. Like most static site generators I can write my posts in markdown and build a page from it.

### Design

I designed the site! I used [Tailwind](https://tailwindcss.com) for base styling and the [daisyUI](https://daisyui.com) component library. The themes are "light" and "business". The theme toggle is custom - try it out!

### Interactivity

One of the limitations of static sites is limited clientside interactivity and dynamism. So I wrote vanilla Javascript (compiled from Typescript) to add some fun.

A simple example where I added a bottom border to the navbar on scroll:
```typescript
const navBar = document.getElementById("nav-bar");

globalThis.addEventListener("scroll", () => {
	if (
    globalThis.scrollY <= 0 && 
    navBar?.classList.contains("border-b")
    ) {
		navBar?.classList.remove("border-b");
	} else if (
		globalThis.scrollY > 0 &&
		!navBar?.classList.contains("border-b")
	) {
		navBar?.classList.add("border-b");
	}
});
```



My code for this site is public! [Check it out](https://github.com/Justiceleeg/jpw-blog-lume).