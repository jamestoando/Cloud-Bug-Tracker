## Overview

This program is a basic application of CRUD functions using NodeJS, ExpressJS, ReactJS and MongoDB Atlas.

## Features

### Bug Dashboard
This is a Dashboard where you can View, Edit and Delete bugs created by users.

### Create a Bug
This is where a User can create new Bug with the following attributes:
- User Name (Drop Down)
- Description (String)
- Priority (Integer)
- Date (Date Selector)

**BUG: User should must select the Date by clicking on the calendar else, the entry will not be created**

### Create User
Very basic way to add new users into the database.

Note: There is no way to edit or delete users at this point.

### Deployed on Cloud

The application's backend database is currently deployed on AWS MongoDB cluster cloud. 

## Known Bugs
- User should must select the Date by clicking on the calendar while creating or editing bugs
else, the entry will not be created

## Prerequisites  
- Linux System or MacOS
- Node v12.13+
- NPM 6.13.2

## Installation
**Tested on Ubuntu 18.04.3 LTS**

```bash 
./InstallPackages.sh
```

This will install all the required frontend and backend package. There are two folders that will contain the node_modules, main folder and backend folder. 

## Running the App locally

**NOTE the Current BUILD is for Cloud and Local production will require manual overrides in the code**
---

Run using seperate terminals for Frontend and Backend

Frontend: In the main folder
```bash  
npm run start 
```

Backend: 
```bash 
cd backend/
npm run start 
```


## Directory Structure
```
.
├── ./backend
│   ├── ./backend/models
│   ├── ./backend/package.json
│   ├── ./backend/package-lock.json
│   ├── ./backend/routes
│   └── ./backend/server.js
├── ./InstallPackages.sh
├── ./package.json
├── ./package-lock.json
├── ./public
│   ├── ./public/favicon.ico
│   ├── ./public/index.html
│   ├── ./public/logo192.png
│   ├── ./public/logo512.png
│   ├── ./public/manifest.json
│   └── ./public/robots.txt
├── ./README.md
└── ./src
    ├── ./src/App.css
    ├── ./src/App.js
    ├── ./src/App.test.js
    ├── ./src/components
    ├── ./src/index.css
    ├── ./src/index.js
    ├── ./src/logo.svg
    └── ./src/serviceWorker.js
```

6 directories, 20 files

## Using the Application (Cloud version)
This URL will also work on mobile devices.

http://44.225.213.204:3000/

## Author
Toan (James) Minh Do
