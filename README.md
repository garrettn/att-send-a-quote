# Send-a-Quote

> Get a random quote from Wikiquote and send it to a lucky person! Built for the AT&T contest at the StartSLC 2015 Hackathon.

## Setup

You need [Node.js](http://nodejs.org) installed to be able to run or build this app. I recommend using [nvm](https://github.com/creationix/nvm).

When you have Node installed, install Grunt and Bower locally:

```
npm install -g grunt-cli bower
```

Then install all the dependencies:

```
npm install && bower install
```

## Development

The source for the app is in the `app` directory. All the existing JavaScript functionality is in `app/scripts/main.js.`

To run a local development server with live reloading, run

```
grunt serve
```

You can then view the app at http://localhost:9000.

## Building

To build the app into an optimized package you can deploy to a web server, simply run

```
grunt
```

You will then find the built app inside the `dist` directory.

## License

The MIT License (MIT)

Copyright (c) 2015 Garrett Nay

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
