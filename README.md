egemsoft-web [![Build Status](https://travis-ci.org/egemsoft/egemsoft-web.svg?branch=src)](https://travis-ci.org/egemsoft/egemsoft-web) ![node-dependencies](https://david-dm.org/egemsoft/egemsoft-web.png)
============

Web app for egemsoft.net.

Scaffolding via [yeoman-angular](https://github.com/yeoman/generator-angular) generator.

Install
=======
```bash
$ npm install -g bower grunt-cli 
$ npm install  
$ gem install compass  
$ bower install  
```

Test & Run
===========
```bash
$ grunt test
$ grunt serve
```  

Build
=====
```bash 
$ grunt build
```
This command minifies js, css, html and image files, concats them, renames resources to provide revisions and so on. [See Grunt task](https://github.com/egemsoft/egemsoft-web/blob/src/Gruntfile.js#L420). 

Documentation
=============
Documentation files can be found under `docs` directory. Documentation pages are generated with [grunt-ngdocs](https://github.com/m7r/grunt-ngdocs) using `ngdoc`. Build task re-generates these documentation pages. `grunt ngdocs` command can also be used to generate documentations.

Documentation pages can be accessed [here](https://rawgit.com/egemsoft/egemsoft-web/src/docs/index.html) through [RawGit](http://rawgit.com).

Distribution
============
Web app is published with Github Pages through Travis CI. After any push to the src branch, app is tested, built and released on gh-pages branch. So to be permanent, changes should be done on src branch.

Travis CI [build status page](https://travis-ci.org/egemsoft/egemsoft-web) indicates current release state.
