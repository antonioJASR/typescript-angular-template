TypeScript and Angular WebApp Base
==================================

A starting project using Ionic tools that optionally supports using custom SCSS.

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

### Using sass

In order to compile sass files run:

```bash
gulp
```

If you are in development, you shuld run:

```bash
gulp watch
```

Open the project with an Editor that support the new standard tsconfig.json,
the TypeScript files will be compiled and saved on www/js folder.
