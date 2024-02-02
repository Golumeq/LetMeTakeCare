# LetMeTakeCare - Sustainable Delivery Application

The idea behind the "LetMeTakeCare" project was to create an innovative application that allows for more sustainable delivery of packages, contributing to the reduction of emissions during transportation. Our application enables users to deliver packages during their trips, making use of existing routes and means of transportation in a more efficient way.

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/946f3451-5c90-4fa2-87d3-ea5eb2715607)


## Table of Contents

- [Project Status](#project-status)
- [Inspiration](#inspiration)
- [How to Use](#how-to-use)
- [Features](#features)
- [Why MERN](#why-mern)
- [Technologies](#technologies)
- [Swagger](#swagger)
- [Database](#database)
- [Features visualisation](#features-visualisation)
- [Author](#author)

## Project Status

Currently, the project is in the conceptual development phase, where we have outlined the general functionality. We plan to implement further development stages and improvements to provide users with the highest quality of service.

## Inspiration

The "LetMeTakeCare" project was born during the MERN course conducted by Dave Grey.

## How to Use

To use the "LetMeTakeCare" project, follow these steps:

1. Open the backend project in your development environment.
2. Modify the `.env` file to configure the database connection.
3. Start the backend application using the `npm run dev` command.
4. Open the frontend project in your development environment.
5. Launch the frontend application using the `npm start` command.
6. Open a web browser and go to http://localhost:3000 to start using the application.

## Features

The "LetMeTakeCare" project offers a range of features, including:

- Responsive design that adapts to various devices.
- Ability to add and edit users.
- Creating and modifying delivery orders.
- Assigning users to specific delivery orders.
- Implementation of user roles (this feature is under development).
- Marking orders as completed.
- Handling various types of errors and implementing CORS security.
- Utilizing a rate limiter for login requests.
- And many other features that ensure the effectiveness and security of the application.

## Why MERN

The choice of the MERN stack (MongoDB, Express.js, React, Node.js) for the "LetMeTakeCare" project is justified by several aspects that make it perfectly suited to the needs and goals of a project related to sustainable delivery. Here are some reasons why it was worthwhile to use MERN for this project:

-Language Uniformity: The entire MERN stack is based on JavaScript, which allows for smooth transitions between client and server and facilitates collaboration in development teams. This allowed the "LetMeTakeCare" project to be developed faster and more efficiently, as the team could focus on one programming language.

-MongoDB and Geolocation: MongoDB, as a NoSQL database, is exceptionally well-suited for handling large volumes of non-relational data and JSON data structures. Additionally, support for geolocation is key in the context of sustainable delivery, enabling efficient route planning and matching deliveries to users' current routes.

-Express.js for the Backend: Express.js is a flexible framework for web applications, which facilitates the building of server API endpoints. For the "LetMeTakeCare" project, this allows for quick creation and management of API endpoints, which are essential for functionalities related to adding, editing, and assigning delivery orders.

-React for the Frontend: React is one of the most popular libraries for building user interfaces, enabling the creation of responsive and interactive web applications. In the "LetMeTakeCare" project, React allows for the efficient implementation of dynamic and responsive design that adapts to various devices, which is crucial for mobile and desktop application users.

-Node.js as the Server Platform: Node.js enables the execution of JavaScript code on the server side, which is consistent with the rest of the stack. For "LetMeTakeCare," Node.js offers a scalable and efficient platform for handling HTTP requests, database operations, and server-side application logic.

-Flexibility and Scalability: The MERN stack is known for its adaptability to the growing requirements of a project, which is important in the context of planned expansions and improvements for "LetMeTakeCare." The flexibility of the stack allows for easy addition of new functionalities and technologies.

In the context of "LetMeTakeCare," the MERN stack perfectly fits the project's needs related to fast data access, geolocation support, building a responsive user interface, and efficiently managing server-side application logic. Its choice supports the project's goals, such as sustainable delivery and reducing emissions during transport.

## Swagger

Unfortunately, I didn't have time to implement the full Swagger logic into the project. The process has been initiated, but its completion will need to be done at a later date.

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/769addef-8532-4579-b1aa-c1d842833552)


## Database

We chose MongoDB as our database due to its fast data access and support for geolocation, which perfectly supports our goals of delivering packages in a more eco-friendly way.

Database diagram:

![Diagram](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/a7cdbec8-526f-4b5e-bdd3-11e99a70bf9a)

## Features visualisation
Login page

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/db42d26b-da90-455c-a9ff-44e45dce7cb4)

Packages overview

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/955e389d-6516-49af-99d8-e90aa543d633)

Trail Adding

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/84be76a2-63d7-4168-8ccb-738814fe7020)

Users page

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/7850f20f-ed72-47a7-b0df-284476f422a6)

User addition page

![image](https://github.com/Golumeq/LetMeTakeCare/assets/105518941/b76d0db2-cadd-45f9-b992-7146074767d5)



## Author

The "LetMeTakeCare" project was created by Łukasz Kurnik.

- Email: lukasz.kurnik@outlook.com

Together, we aim to create an innovative application that contributes to sustainable package delivery and reduces emissions during transportation. Thank you for supporting our project! #LetMeTakeCare

