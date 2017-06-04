# Budget Party

<img src="http://dsh.re/af3f9" width="300"/>

## ATX Hack for Change
Our team is participating in the ATX Hack for Change on June 2-4, 2017. If you'd like to contribute to this project during the hackathon, [read this overview of our goals for the hackathon weekend](https://github.com/open-austin/budgetparty/blob/master/ATXH4C.md).

### Table of Contents

- [Project Description](#project-description)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
  - [Curriculum](#curriculum)
  - [Design](#design)
  - [Development](#development)

## Hello!

We're Team Budget Party! Our team includes developers, designers, a publisher, a curriculum writer and educators from [Open Austin](https://www.open-austin.org/), the [Austin Monitor](https://www.austinmonitor.com/), and Austin ISD.

We are interested in the health of our civic fabric and we are excited about the potential for youth inclusion in the decision making process of local government.

Thanks for coming here to learn more!

## Project Description

Budget Party helps people understand and augment a city budget for austin. 

Recently, Austin Budget Party has been [awarded a Mozilla Gigabit Community Fund grant](https://learning.mozilla.org/blog/mozilla-awards-241000-to-explore-the-intersection-of-gigabit-technology-and-civics-robotics-farming-and-more) to help design and develop a **Digital Mock City Council** experience with [austinbudget.party](https://austinbudget.party/).

The goal of the grant is to create an online, open-source, digital budget debate platform and curriculum designed for middle and high school students to explore civic challenges and priorities.

Open Austin contributors partnered with the [Capital of Texas Media Foundation](https://www.cotmf.org/), publisher of the [Austin Monitor](http://www.austinmonitor.com/), to improve the budget app, develop a teaching curriculum, and implement the program in 10 pilots schools in Austin.

You can read more on our [blog post](https://www.open-austin.org/blog/2017/02/08/budget-party-mozilla-gigabit-grant-announcement) announcing the grant and from the [original project proposal](https://github.com/open-austin/project-ideas/issues/70).

### Our Team

- Graphic & UX Design:
  - [Vickie O'Dell](https://github.com/VictoriaODell)
  - [Miles Gilbert](https://github.com/brainnews)
- Web Development:
  - [Mateo Clarke](https://github.com/mateoclarke)
- Classroom Implementation
  - Michael Kanin
  - Sasha Cesare
- Many volunteers...

## Roadmap

At this stage, we have:

1. A (mostly) working web (version 1.0) [austinbudget.party](http://austinbudget.party/). This is our second iteration of a design and user workflow. The first prototype (version 0.1) was used at our first Game Night with Glasshouse Policy. This is the [feedback](https://github.com/open-austin/budgetparty/issues/66) we got from that event.
2. Designs for version 1.0 of Budget Party. See examples [here](https://github.com/open-austin/budgetparty/issues/74#issuecomment-284244078) and [here](https://github.com/open-austin/budgetparty/issues/73#issuecomment-284243962). [Sketch File](https://github.com/open-austin/budgetparty/files/880263/budgetParty-v2.2.sketch.zip)
3. A [curriculum](https://github.com/open-austin/budgetparty/files/1009706/Budget.Game.Binder.pdf) to provide context for middle school and high school students for understanding how the City Council makes decisions. We are looking for opportunities to use the curriculum in classes with the Budget Party app.

We are currently working on bug fixes and more features to be included in v1.1. We are also looking for feedback from users and testing with educators.

## Slack

[Invite yourself](https://slack.open-austin.org/) to the Open Austin Slack Channel and join the [#budgetparty channel](https://open-austin.slack.com/messages/budgetparty).

## Contributing

This project has received contributions from some wonderful volunteers. We would love to add your name to the list below. Over the course of this project, we have opportunities to help with design, development, QA & testing, writing, and more. To contribute, you can:

- Report a bug or request a feature by opening a new issue.
- Review open issues and leave a comment if you'd like to help or if you need more information.

For more information, check out [CONTRIBUTING.md](/CONTRIBUTING.md)

### Additional Contributors
- [@gness1804](https://github.com/drewpchannel) - Javascript, CSS, Web
- [@drewpchannel](https://github.com/drewpchannel) - Javascript, CSS, Web
- [@graceatkins](https://github.com/graceatkins) - Policy Domain Expert, Research & Writing
- [@wilsaj](https://github.com/wilsaj) - Javascript, Web Development
- [@kmclaugh](https://github.com/kmclaugh) - Javascript, Web Development

### Curriculum
An awesome teacher at Lanier High School, Laurie Beaman, laurie.beaman@austinisd.org, designed and wrote a Curriculum Binder for teaching high schoolers about the City Budget. Check it out here:
[Budget Game Binder PDF](https://github.com/open-austin/budgetparty/files/1009706/Budget.Game.Binder.pdf)

We'd like to convert this PDF document into HTML to make it accessible for more educators to view and use. If you're interested in helping with this task, check out [this issue](https://github.com/open-austin/budgetparty/issues/128) and let's chat!

### Design

Here is a link to our [design assets and documentation](./design). Here are [open issues labeled "Design"](https://github.com/open-austin/hack-the-budget/issues?q=is%3Aissue+is%3Aopen+label%3Adesign) where you can discuss, provide feedback or volunteer to help.

### Development

The Budget Party app is primarily written in javascript and leans heavily into the libraries [React](https://facebook.github.io/react/) and [Redux](http://redux.js.org/). The static assets are hosted via [Github pages](https://pages.github.com/). Data submitted to the server lives in a [Firebase](https://www.firebase.com/), a Google cloud service.

**Getting started**

This project has a dependency on Node and npm. Make sure they are install on your machine by running the following commands:
`node -v`
`npm -v`

This should return the version number of your install. 
If it doesn't Google how to install Node & npm for your operating system. 
_Maybe these links could help you?_
- [Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-16-04)
- [Mac](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)

Once you have cloned this repo to you local machine, open the `app` directory in your Terminal.

`cd app`

### Installation

1. `npm install`

### Development

1. `npm start`
2. visit http://localhost:3000 in your browser

### Build

1. `npm run build`

### Deploy

1. `npm run deploy`
___
