"use strict";

module.exports = function(grunt) {

    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

    grunt.initConfig({

        // Define Directory
        dirs: {
            js:     "src/js",
            coffee: "src/coffee",
            build:  "dist"
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        banner:
        "\n" +
        "/*\n" +
         " * -------------------------------------------------------\n" +
         " * Project: <%= pkg.title %>\n" +
         " * Version: <%= pkg.version %>\n" +
         " *\n" +
         " * Author:  <%= pkg.author.name %>\n" +
         " * Site:     <%= pkg.author.url %>\n" +
         " * Contact: <%= pkg.author.email %>\n" +
         " *\n" +
         " *\n" +
         " * Copyright (c) <%= grunt.template.today(\"yyyy\") %> <%= pkg.author.name %>\n" +
         " * -------------------------------------------------------\n" +
         " */\n" +
         "\n",

        // Compile CoffeeScript
        coffee: {
            compileBare: {
              options: {
                bare: true
              },
              files: {
                "<%= dirs.js %>/main.js" : "<%= dirs.coffee %>/main.coffee",
                "<%= dirs.js %>/keyboard.js" : "<%= dirs.coffee %>/keyboard.coffee",
                "<%= dirs.js %>/keys.js" : "<%= dirs.coffee %>/keys.coffee"
              }
            }
        },

        // Minify and Concat archives
        uglify: {
            options: {
                mangle: false,
                banner: "<%= banner %>"
            },
            dist: {
              files: {
                  "<%= dirs.build %>/gamekeyboard.min.js": [
                      "<%= dirs.js %>/main.js",
                      "<%= dirs.js %>/keyboard.js",
                      "<%= dirs.js %>/keys.js"
                  ]
              }
            }
        },

        // Notifications
        notify: {
          coffee: {
            options: {
              title: "CoffeeScript - <%= pkg.title %>",
              message: "Compiled and minified with success!"
            }
          },
          js: {
            options: {
              title: "Javascript - <%= pkg.title %>",
              message: "Minified and validated with success!"
            }
          }
        }
});


    // Register Taks
    // --------------------------

    // Observe changes, concatenate, minify and validate files
    grunt.registerTask( "default", [ "coffee", "notify:coffee", "uglify", "notify:js" ]);

};