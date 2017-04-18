deadsimple JSON.stringify which cares less (omits decircularizes values)

![Build Status](https://travis-ci.org/--repourl=git@github.com:coderofsalvation/safer-json-stringify..svg?branch=master)

## Usage

    require('safer-json-stringify')

    JSON.stringify( yourcircularjson )

## Why

![](https://media.giphy.com/media/3SBi8gMf8BqBG/giphy.gif)

I tried safe-json-stringify which didn't do what i wanted:

* didn't patch JSON.stringify
* didn't proxy all arguments to the original JSON.stringify (like JSON.stringify(foo,null,2))
* introduces null-values which breaks json-format

This is a really simple patch which only patches the input only, and proxies all arguments
