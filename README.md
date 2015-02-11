Ionic App Base
=====================

A starting project for Ionic that optionally supports using custom SCSS.

## Using this project

We recommend using the [Ionic CLI](https://github.com/driftyco/ionic-cli) to create new Ionic projects that are based on this project but use a ready-made starter template.

For example, to start a new Ionic project with the default tabs interface, make sure the `ionic` utility is installed:

```bash
npm install -g ionic gulp bower
```

Install tools 
```bash
npm install
```

Install dependencies using bower

```bash
bower install
```

Then run:

```bash
$ ionic serve
```

### Using typescript and sass

Install typescript tools:

```bash
npm install -g typescript
```

In order to compile sass and typescript files run:

```bash
gulp 
```

If you are in development, you shuld run:

```bash
gulp watch
```

After that, when you change some file it will be compiled. Actually all the
typescript files will be compiled to a single Javascript file called app.js


