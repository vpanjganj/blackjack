# Blackjack

This project is an implementation of a Blackjack game in [AngularJS](http://angularjs.org/).

## Getting Started

To get you started, simply clone the Blackjack repository and install the dependencies:

### Prerequisites

Git is needed to clone the Blackjack repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

A number of node.js tools to initialize run Blackjack. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone Blackjack

Clone the Blackjack repository using:

```
git clone https://github.com/vpanjganj/blackjack
cd blackjack
```

To start a new project without the Blackjack commit history you can do:

```bash
git clone --depth=1 https://github.com/vpanjganj/blackjack <your-project-name>
```

The `depth=1` tells git to only pull down one commit worth of historical data.

### Install Dependencies

There are two kinds of dependencies in this project: tools and angular framework code.  These tools helps
you to  manage the application.

* Tools will be loaded via `npm`, the [node package manager][npm].
* Angular and Bootstrap will be loaded via `bower`, a [client-side code package manager][bower].

'npm' is preconfigured to automatically run `bower` so please simply do:

```
npm install
```
If it didn't work, try:

```
sudo npm install
```
Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `bower_components` - contains the angular and bootstrap files

### Run the Application

The project is preconfigured with a simple development web server.  The simplest way to start
this server is:

```
npm start
```
If it didn't work, try:

```
sudo npm start
```
It should open the browser automatically to the app at `http://localhost:8000/`.



