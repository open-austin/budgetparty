# Budget Party

<img src="http://dsh.re/af3f9" width="300"/>

### Table of Contents

- [Project Description](#project-description)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
  - [Design](#design)
  - [Development](#development)

## Hello!

We're Team Budget Party! Our team includes developers, designers, a publisher, a curriculum writer and educators from [Open Austin](https://www.open-austin.org/), the [Austin Monitor](https://www.austinmonitor.com/), and Austin ISD.

We are interested in the health of our civic fabric and we are excited about the potential for youth inclusion in the decision making process of local government.

Thanks for coming here to learn more!

### Our Team

- Graphic & UX Design:
  - [Vickie O'Dell](https://github.com/VictoriaODell)
  - [Miles Gilbert](https://github.com/brainnews)
- Web Development:
  - [Mateo Clarke](https://github.com/mateoclarke)
- Classroom Implementation
  - Michael Kanin
  - Sasha Cesare
- More volunteers...

## Project Description

Austin Budget Party has been [awarded a Mozilla Gigabit Community Fund grant](https://learning.mozilla.org/blog/mozilla-awards-241000-to-explore-the-intersection-of-gigabit-technology-and-civics-robotics-farming-and-more) to help design and develop a **Digital Mock City Council** experience with [austinbudget.party](https://austinbudget.party/).

The goal of the grant is to create an online, open-source, digital budget debate platform and curriculum designed for middle and high school students to explore civic challenges and priorities.

Open Austin contributors partnered with the [Capital of Texas Media Foundation](https://www.cotmf.org/), publisher of the [Austin Monitor](http://www.austinmonitor.com/), to improve the budget app, develop a teaching curriculum, and implement the program in 10 pilots schools in Austin.

You can read more on our [blog post](https://www.open-austin.org/blog/2017/02/08/budget-party-mozilla-gigabit-grant-announcement) announcing the grant and from the [original project proposal](https://github.com/open-austin/project-ideas/issues/70).

## Roadmap

At this stage, we have:

1. A working prototype (version 0.0) [austinbudget.party](http://austinbudget.party/).
2. Designs for version 1.0 of Budget Party. See examples [here](https://github.com/open-austin/budgetparty/issues/74#issuecomment-284244078) and [here](https://github.com/open-austin/budgetparty/issues/73#issuecomment-284243962).
3. Tested the prototype at a Budget Game Nights and in a high school classroom.

**For the 1.0 release, we are working on:**

- A curriculum to provide context for middle school and high school students for understanding how the City Council makes decisions.
- [Information Architecture](https://github.com/open-austin/budgetparty/issues/79) and improved user workflows.
- [District Profiles](https://github.com/open-austin/budgetparty/issues/80) for users to learn about City Council demographics.
- Page Redesigns.
- [Login](https://github.com/open-austin/budgetparty/issues/72) & [save session data](https://github.com/open-austin/budgetparty/issues/75).
- New icons and [imagery](https://github.com/open-austin/budgetparty/issues/71).
- Other [technical](https://github.com/open-austin/budgetparty/issues/43) improvements.

Our target launch for v1.0 is April 7, 2017.

We will present the game and curriculum to AISD high school departments chairs on April 11, 2017.

Teachers will implement the instructional tools in May 2017.

v1.1 will follow with feedback from user testing and teachers.

## Slack

[Invite yourself](https://slack.open-austin.org/) to the Open Austin Slack Channel and join the [#budgetparty channel](https://open-austin.slack.com/messages/budgetparty).

## Contributing

This project has received contributions from some wonderful volunteers. We would love to add your name to the list below. Over the course of this project, we have opportunities to help with design, development, QA & testing, writing, and more. To contribute, you can:

- Report a bug or request a feature by opening a new issue.
- Review open issues and leave a comment if you'd like to help or if you need more information.

For more information, check out [CONTRIBUTING.md](/CONTRIBUTING.md)

### Previous Contributors
- [@graceatkins](https://github.com/graceatkins) - Policy Domain Expert, Research & Writing
- [@wilsaj](https://github.com/wilsaj) - Javascript, Web Development
- [@kmclaugh](https://github.com/kmclaugh) - Javascript, Web Development

### Design

Here is a link to our [design assets and documentation](./design). Here are [open issues labeled "Design"](https://github.com/open-austin/hack-the-budget/issues?q=is%3Aissue+is%3Aopen+label%3Adesign) where you can discuss, provide feedback or volunteer to help.

### Development

The Budget Party app is primarily written in javascript and leans heavily into the libraries [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). The static assets are hosted via [Github pages](https://pages.github.com/). Data submitted to the server lives in a [Firebase](https://www.firebase.com/), a cloud service bought by Google.

**Getting started**

Once you have cloned this repo to you local machine, open the `app` directory in your Terminal.

`cd app`

### Installation

1. `npm install`

### Development

1. `npm start`
2. visit http://0.0.0.0:1111/ in your browser

### Build

1. `npm run build`


___
