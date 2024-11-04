# Real-Time Chat Application

## [Live Webpage](https://chat-app-dliy.onrender.com)

## Description
A real-time chat application that supports secure user authentication and live messaging. This application provides a responsive and interactive chat experience for users, with features such as logging in/out, signing up, and instant messaging.

## Tech Stack
* **Frontend:** React and TailwindCSS for building the user interface
* **Backend:** Node.js with Express to create RESTful APIs that allow the frontend to handle actions such as authentication, message history, and user management
* **Real-Time Communication:** Socket.io to establish a websocket connection for instant messaging
* **Authentication:** JWT was used to protect endpoints and secure chat messages by only allowing authenticated users to access chat functionality
* **Database:** MongoDB was used to store user information, conversations, and message data

## Features
* Interactive and responsive UI where users can sign up, view their messages, and participate in real-time chat
* Secure login, signup, and logout functionality using JWT
* Instant message updates without refreshing the page with Socket.io
* Messages and conversations are stored securely on MongoDB, allowing users to login and view their message history
