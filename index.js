#!/usr/bin/env node

let chalk       = require('chalk'),
    clear       = require('clear'),
    CLI         = require('clui'),
    figlet      = require('figlet'),
    inquirer    = require('inquirer'),
    files       = require('./lib/files'),
    Spinner     = CLI.Spinner,
    program     = require('commander');

program
    .version('0.0.1')
    .arguments('<name>')
    .option('-i, --init', 'init the directory')
    .option('-p, --path', 'specify the path of directory if is different other than the current one *not working')
    .action(function(name) {
        "use strict";

        /*if (program.path) {

        } else {

        }*/



        clear();
        console.log(
            chalk.cyan(
                figlet.textSync('CSS Framework Generator', { horizontalLayout: 'full' })
            )
        );

        if (files.directoryExists(name)) {
            console.log(chalk.red('Already a exist!'));
            process.exit();
        }
    })
.parse(process.argv);
