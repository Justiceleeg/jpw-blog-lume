---
title: Tutorials and a First Game
date: 2024-10-02
summary: Learning a game engine requires tutorials and building a demo project.
tags:
  - coding
  - game development
---

I spent a week on following tutorials for the [Godot](https://godotengine.org) game engine and another week on an artsy clone of Minesweeper.

<!--more-->



## The Learning Process

Learning new tech can be daunting but thankfully there are plenty of tutorials and online documentation available for Godot. I started with Youtube. I watched these tutorial series by [Heartbeast](https://www.youtube.com/watch?v=zUeLesdL7lE&list=PL9FzW-m48fn09w6j8NowI_pSBVcsb3V78) and [GodotGameLab](https://www.youtube.com/watch?v=2dIZu8jyHmg&list=PL6SABXRSlpH_0UEV3gJ53I7a2eGL8pqs3).

### Components

In Godot there are two main paradigms to structure your apps by: Inheritance and Components. The best way to structure your development is by an artful combination of the two. I'm familiar with inheritance - its common enough and done purely in code through the construction of classes. On the other hand, components require a composition of nodes in the editor and careful planning for reusability. Both tutorials focused on composition.

## The Doing Process

I followed [another tutorial](https://www.youtube.com/watch?v=LEiL4rrZbqQ) for the barebones minesweeper game. Then created a whole new game without watching the tutorial. This one was much more complex because of all the different `TileMapLayers` and the fact that some of the "tiles" are scenes themselves. I added features like not dying on the first click, indicating if a flag was incorrect at the end of the game, and a custom cursor.

## The Result

<img src="/img/posts/paintsweeper-cover-regular.webp" alt="A screenshot of Paintsweeper" width="600" loading="lazy" decoding="async" />

So I made [Paintsweeper](https://justiceleeg.itch.io/paintsweeper)! Check it out.
