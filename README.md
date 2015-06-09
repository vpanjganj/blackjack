# Blackjack

This project is an implementation of a Blackjack game in [AngularJS](http://angularjs.org/).
You can use it to quickly bootstrap your angular webapp projects and dev environment for these
projects.

## Getting Started

To get you started you can simply clone the Blackjack repository and install the dependencies:

### Prerequisites

You need git to clone the angular-seed repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I have used a number of node.js tools to initialize run Blackjack. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Blackjack

Clone the Blackjack repository using [git][git]:

```
git clone https://github.com/vpanjganj/blackjack
cd blackjack
```

If you just want to start a new project without the Blackjack commit history then you can do:

```bash
git clone --depth=1 https://github.com/vpanjganj/blackjack <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools helps
me manage the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular framework and bootstrap files

### Run the Application

I have preconfigured the project with a simple development web server.  The simplest way to start
this server is:

```
npm start
```

It should open the browser automatically to the app at `http://localhost:8000/`.



