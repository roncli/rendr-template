var path = require("path"),
    pathmodify = require("pathmodify"),
    remapify = require("remapify"),
    pjson = require("./package.json"),
    minifier = require("html-minifier"),
    currentDir = path.resolve("."),

    /**
     * Minify HTML content
     */
    minifyHtml = function(content, file) {
        "use strict";

        return minifier.minify(content, {
            removeComments: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true,
            minifyCSS: true
        });
    };

/**
 * Setup project configuration.
 * @param {object} grunt - The grunt object.
 */
module.exports = function(grunt) {
    "use strict";

    // Load the initial configuration.
    grunt.initConfig({
        // Read in the initial configuration.
        pkg: grunt.file.readJSON("package.json"),

        // Setup handlebars.
        handlebars: {
            compile_main_templates: {
                options: {
                    namespace: false,
                    commonjs: true,
                    processContent: minifyHtml,

                    /**
                     * Returns the require path for the file.
                     * @param {string} filename - The filename of the template to process.
                     */
                    processName: function(filename) {
                        return filename.replace("app/templates/", "").replace(".hbs", "");
                    }
                },
                files: {
                    "app/templates/compiledTemplates.js": ["app/templates/**/*.hbs"]
                },

                /**
                 * Exclude files that begin with two underscores.
                 * @param {string} filepath - The filename to filter.
                 */
                filter: function(filepath) {
                    return path.basename(filepath).slice(0, 2) !== "__";
                }
            }
        },

        // Setup browserify to send node assets to the client.
        browserify: {
            combine_main_js_files: {
                options: {
                    require: Object.keys(pjson.browser),
                    plugin: [
                        [pathmodify, {mods: [
                            function(rec) {
                                if (/^app\//.test(rec.id)) {
                                    return {
                                        id: path.join(currentDir, rec.id),
                                        expose: rec.id
                                    };
                                    return a;
                                }

                                if (rec.id.indexOf(currentDir) === 0) {
                                    return {
                                        id: rec.id,
                                        expose: rec.id.substr(currentDir.length + 1).replace(/\\/g, "/").replace(/\.js$/, "")
                                    };
                                }
                                return {};
                            }
                        ]}]
                    ]
                },
                files: {
                    "grunt_work/js/site.js": ["app/**/*.js"]
                }
            }
        },

        // Setup cssmin to send CSS assets to the client.
        cssmin: {
            combine_main_css_files: {
                files: {
                    "grunt_work/css/site.css": ["assets/css/*.css"]
                }
            },
            minify_main_css_files: {
                expand: true,
                cwd: "grunt_work/css/",
                src: ["site.css"],
                dest: "public/css/",
                ext: ".min.css"
            }
        },

        // Setup uglify to send JS assets to the client.
        uglify: {
            minify_main_js_files: {
                options: {
                    preserveComments: false
                },
                files: {
                    "public/js/site.min.js": ["grunt_work/js/site.js"]
                }
            }
        },

        execute: {
            target: {
                src: ["index.js"]
            }
        }
    });

    // Load NPM tasks.
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-execute");

    // Register tasks.
    grunt.registerTask("compile", ["handlebars", "browserify", "cssmin", "uglify"]);
    grunt.registerTask("run", ["execute"]);
    grunt.registerTask("all", ["compile", "run"]);
    grunt.registerTask("noop", []);
    grunt.registerTask("default", ["compile"]);
};
