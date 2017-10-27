#!/usr/bin/env node

var express = require('express');
var openInEditor = require('express-open-in-editor');
var yargs = require('yargs');

var argv = yargs
  .usage('Usage: open-in-editor-server -e [editor]')
  .example('open-in-editor-server -e code', 'Run server on default port and open files in VSCode')
  .demand(['e'])
  .string('e')
  .alias('e', 'editor')
  .describe('e', 'Editor to open file in (choose one of supported https://www.npmjs.com/package/open-in-editor)')
  .number('p')
  .default('p', 9246)
  .alias('p', 'port')
  .describe('p', 'Port to listen on')
  .argv;

var app = express();
app.use(openInEditor({ editor: argv.editor }));
app.listen(argv.port);
console.log(`Server is running on port ${argv.port}...`);
