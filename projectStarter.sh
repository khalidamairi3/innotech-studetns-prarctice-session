#!/usr/bin/bash 


DIRECTORY=${1:-basicbash}

mkdir $DIRECTORY;
cd $DIRECTORY;
touch index.html;
echo "Creating a new project";
echo "Hello World" >> index.html;
mkdir css;
cd css;
touch style.scss;
cd ..;
mkdir js;
cd js;
touch app.js;
cd ..;
echo "All done";