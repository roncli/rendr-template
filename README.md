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
2. Run `npm install -g grunt-cli` to install the grunt client.  In Windows, this must be done from an admin command prompt.
3. Run `npm install` to install all of the dependencies.
4. Run `grunt all` to compile and run the application.

Status
======

This is the list of direct package dependencies that have yet to be upgraded to the latest version or are not final, along with the reasons why they are not upgraded.  If an outdated package is not listed here, I simply haven't gotten around to looking at it yet.

* handlebars - The sole reason for the reference to handlebars is for rendr-handlebars, which no longer has a hard dependency on any specific handlebars version.  However, grunt-contrib-handlebars@0.10.2 depends on handlebars@3.0.3, and attempting to upgrade handlebars to the latest version breaks API compatibility.  See gruntjs/grunt-contrib-handlebars#150 for the issue filed with the project. 
* errorhandler - This is not the final error handler, as it's meant for development only.  I will look into getting a more production-ready error handler.

Got Better?
===========

I'm always looking for ways to improve this template.  Feel free to fork the code and hack on it yourself, and if you improve something, be sure to send a Pull Request back to the project!
