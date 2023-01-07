---
sidebar_position: 1
---

# Installation

Persistent fast and reliable **json databases**.

## Get started with DbCopycat

**DbCopycat** works by performing **CRUD** operations such as adding, deleting, updating data to the json data file. Its purpose is to make the json file a permanent and useful database.

## Introduction

### Install DbCopycat globally.

Install `dbcopycat` with npm and create your `data.json` file.

```bash
npm install -g dbcopycat
dbcopycat init
```

### Include dbcopycat in the project.

You are ready to star

```bash
npm install dbcopycat --save
```

### Get started with your database.

It will fetch all the data in the `data.json` file.

```js title="index.js"
const dbcopycat = require('dbcopycat'); 
var data = dbcopycat.getAll();
console.log(data);
```