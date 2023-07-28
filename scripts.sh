#!/bin/bash

# All package scripts to not polute
# package.json file with long scripts

cmd=$1
args=${@:2}


function start(){
  node build/server.js
}

function build() {
  clean
  echo "🚀 Building...";
  npx tsc;
};

function dev() {
  echo "🚀 Starting dev server...";
  npx nodemon server.ts;
};

function test() {
  echo "🧪 Running tests...";
  DATABASE_URL="postgres://postgres:postgres@localhost:5432/_test_database_"
  DATABASE_URL=$DATABASE_URL npx prisma migrate reset --force
  npx prisma generate
  npx jest --coverage --verbose $1;
};

function lint() {
  echo "🧹 Linting...";
  npx eslint . --ext ts,tsx $1
};

function clean() {
  echo "🧹 Cleaning up...";
  rm -rf build;
  rm -rf coverage;
  rm -rf .nyc_output;
  rm -rf .cache;
};

eval $cmd $args
