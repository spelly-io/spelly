#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const rootPath = process.cwd();
const packageJsonPath = path.resolve(rootPath, 'package.json');

const buffer = fs.readFileSync(packageJsonPath);

const pkgJson = JSON.parse(buffer.toString());

const [newVersion] = process.argv.slice(2);

if (!newVersion) {
  throw new Error('"New version" argument has not passed ');
}

pkgJson['version'] = newVersion;

fs.writeFileSync(packageJsonPath, JSON.stringify(pkgJson, undefined, 2));
