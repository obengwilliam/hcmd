#!/usr/bin/env node

const argParser = require('yargs-parser')

const postCount = argParser(process.argv.slice(2)).posts

if(postCount === undefined){
  throw  Error('--post=34 or posts=34 flag is required')
}

const topPost = [
  {
  content: "helo top post"
  }
]

console.log(topPost)

