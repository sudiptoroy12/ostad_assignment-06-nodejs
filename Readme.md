# HTTP Server with Routing using Node.js

A simple Node.js HTTP Server built with the built-in `http` module. The server runs on **Port 5000** and serves multiple routes with HTML responses.

## Features

* Create an HTTP Server using Node.js `http` module
* Server runs on **Port 5000**
* Multiple Routes:

  * Home Page (`/`)
  * About Page (`/about`)
  * Contact Page (`/contact`)
* HTML Response for each route
* Navigation links between pages
* Custom **404 - Page Not Found** page for invalid routes

## Project Structure

```text
project-folder/
│
├── server.js
└── README.md
```

## Installation

1. Clone the repository:

```bash
git clone <my-repository-url>
```

2. Navigate to the project folder:

```bash
cd project-folder
```

## Run the Server

Start the server with:

```bash
npm run start
```

The server will run at:

```text
http://localhost:5000
```

## Available Routes

| Route           | Description          |
| --------------- | -------------------- |
| `/`             | Home Page            |
| `/about`        | About Page           |
| `/contact`      | Contact Page         |
| Any Other Route | 404 - Page Not Found |

## Example Pages

### Home Page

* Heading
* Description
* Navigation Links

### About Page

* Heading
* Description
* Navigation Links

### Contact Page

* Heading
* Description
* Navigation Links

### 404 Page

Displayed when a user visits an invalid route.

## Technologies Used

* Node.js
* HTTP Module
* HTML

## Learning Objectives

This project helps you learn:

* Creating an HTTP Server in Node.js
* Handling Routes Manually
* Sending HTML Responses
* Working with Status Codes
* Creating a Custom 404 Page

## Author

Made with Node.js for learning and practice.Sudipto Roy
