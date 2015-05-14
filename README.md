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

* handlebars / grunt-contrib-handlebars - Attempting to upgrade handlebars from 2.0.0 to 3.0.0 and grunt-contrib-handlebars from 0.9.3 to 0.10.2.  handlebars@3.0.0 breaks API compatibility with other modules that don't use the 3.0.0 API.  rendr-handlebars@1.0.1 is currently using the 2.0.0 API, which means that we cannot yet upgrade handlebars past the lowest common API, which is 2.0.0.  See rendrjs/rendr-handlebars#52 for a discussion on this issue. 
* errorhandler - This is not the final error handler, as it's meant for development only.  I will look into getting a more production-ready error handler.

Got Better?
===========

I'm always looking for ways to improve this template.  Feel free to fork the code and hack on it yourself, and if you improve something, be sure to send a Pull Request back to the project!
