#!/bin/bash


# Check if there are uncommited changes. Exit with an error if there are.
if [[ `git diff-index HEAD` != "" ]];
then echo "ERROR! You have uncommited changes..." && exit 1;
else echo "Deploy in progress...";
fi

# Build JS into dist/app.js
webpack --config webpack.config.js

# Copy other files into dist/
cp index.html styleguide.css dist

# git add new dist/ assets
git add dist/app.js dist/index.html dist/styleguide.css

# Commit dist/ changes
git commit -m "Deploy to gh-pages..." --no-verify

# Push commited changes to master
git push origin master

# Push dist folder to gh-pages branch
git subtree push --prefix dist origin gh-pages
