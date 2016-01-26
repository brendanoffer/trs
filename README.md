# TRS Map

# For people who don't know what the hell to do to see this

You are going to need some development tools to run this on top of git itself. My suggestion is that you use NPM, Bower, and Grunt..

# GIT

Install git, clone/fork this project onto your computer 

## To install NPM 
Use this link to install NPM, which is bundled with nodesjs
https://nodejs.org/en/download/

Make sure you add NodeJS to you environment variables so you can type 'npm -version' from the command line and you see a single line with the version number.

From there install bower and grunt with npm

So in the command line type
'npm install -g bower'
'npm install -g grunt-cli'


You should be able to runt the commands 'bower' and 'grunt' from the command line.


Navigate to the TRS Map project on your computer and run (note this might take second depending on your computer & connection) 
1. 'npm install'
2. 'bower install'
3. 'grunt serve'


## Build & development

Run `grunt` for building and `grunt serve` for preview.

## Testing

Running `grunt test` will run the unit tests with karma.
