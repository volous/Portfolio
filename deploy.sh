#!/usr/bin/env sh

# Abort on errors
set -e

# Build the application
npm run build

# Navigate into the build output directory
cd dist

# Initialize a clean git repository inside dist
git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

# Push to your repository's gh-pages branch
# Replace 'username/Portfolio' with your GitHub username and repo name
git push -f git@github.com:volous/Portfolio.git gh-pages

cd -