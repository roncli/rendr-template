rendr-template
==============

This is a template for use with the [rendr](https://github.com/rendrjs/rendr) application framework.  The purpose is to allow a potential rendr developer to get up and running using rendr without having to go through the trouble of creating the template themselves.

Features
========

* Designed to allow a developer to merge the code as a baseline for a new web project.
* Provides a starting point for creating a simple server-side API.
* Provides working examples of how to work with models and collections in the controller and templates.
* Includes JavaScript, CSS, and HTML compression in an automated grunt build process.
* Includes the latest and most compatible versions of the core modules used with rendr.

Installing
==========

1. Clone into a directory of your liking.
2. Run `npm install` to install all of the dependencies.
3. Run `grunt all` to compile and run the application.

Status
======

This is the list of direct package dependencies that have yet to be upgraded to the latest version, along with the reasons why they are not upgraded.  If an outdated package is not listed here, I simply haven't gotten around to looking at it yet.

* remapify / grunt-browserify - Attempting to upgrade grunt-browserify from 2.1.4 to 3.2.9 and remapify from 1.4.3 to 1.4.4.  remapify is a browserify plugin that does not run synchronously, however grunt-browserify expects plugins to run synchronously.  joeybaker/remapify#26 provides one potential workaround that makes remapify synchronous.  The issue-24-simple branch of jmm/remapify provides potential workaround that allows remapify to remain asynchronous, but presently doesn't work with this library.
* handlebars / grunt-contrib-handlebars - Attempting to upgrade handlebars from 1.3.0 to 2.0.0 and grunt-contrib-handlebars from 0.8.0 to 0.9.2.  I suspect that rendr-handlebars currently does not support handlebars 2.0.0 at this time.
* errorhandler - This is not the final error handler, as it's meant for development only.  I will look into getting a more production-ready error handler.

Got Better?
===========

I'm always looking for better ways to improve this template.  Feel free to fork the code and hack on it yourself, and if you improve something, be sure to send a Pull Request back to the project!
