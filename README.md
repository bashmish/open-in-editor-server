# open-in-editor-server

A wrapper for [express-open-in-editor](https://www.npmjs.com/package/express-open-in-editor) middleware to simplify running a server to open files in a text editor.

## Installation

### Via npx (recommended, supported in npm since 5.2.0)

To skip global installation and get updates automatically in future you can use beautiful npx command and directly run the binary:

```
> npx open-in-editor-server
```

In other words, you don't need to install anything. Just use it.

### Via normal npm installation

You can always install it as a normal npm package:

```
> npm install -g open-in-editor-server
```

And run globally installed binary:

```
> open-in-editor-server
```

## Usage

Run in the directory of your project providing your text editor name as an argument.

```
> cd path/to/my-project
> npx open-in-editor-server -e code
Server is running on port 6437...
```

You are now running a server on a default port 6437 with VSCode configured to open files. For the list of supported editors as well as any other possible options and their values you can use `--help`:

```
> npx open-in-editor-server --help
```

You need to have VSCode binary preinstalled. Same for other text editors. Information about how to do it you can usually find in the corresponding text editor's docs.

Try opening URL having `file` param with a relative path to a file inside the project directory.

> http://127.0.0.1:6437/?file=/src/my-file.js

Behind the scenes the server will run a shell command passing path to the file to VSCode binary. Something like this:

```
> code path/to/my-project/src/my-file.js
```

That's it. Your text editor should open this file.

Normaly you don't open such URLs manually, but rather make calls from your JavaScript code to this server. Whatever use-case you have, have fun!
