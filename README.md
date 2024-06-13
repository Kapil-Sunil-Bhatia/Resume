# MERN Stack Resume Builder

## Project Overview

This project is a Resume Builder application developed using the MERN stack (MongoDB, Express, React, and Node.js). This project aims to provide a professional resume-building tool that users can use without relying on third-party websites or software like MS Word. This README provides an overview of the course content, project functionalities, and how to set up and run the application.

## Course Content and Learning Outcomes

Throughout the course, I have gained comprehensive knowledge and hands-on experience with the following concepts:

- **CRUD Operations**: Implemented Create, Read, Update, and Delete operations using the MERN stack.
- **Real-Time Project Development**: Understood the process of developing real-time projects with the MERN stack.
- **Complex Web Apps**: Built complex web applications without using state management tools like Redux.
- **MongoDB**: Worked with MongoDB, a popular non-relational database, to store and manage application data.
- **Full-Stack Application Development**: Developed a full-stack resume builder application capable of running in both local and production environments.
- **Deployment**: Deployed the application to Heroku, making it accessible in a live production environment.
- **24/7 Support**: Received continuous support throughout the course to resolve issues and clarify doubts.

## Technologies Used

- **MongoDB**: Document-oriented NoSQL database.
- **Express.js**: Web application framework for Node.js.
- **React.js**: JavaScript library for building user interfaces.
- **Node.js**: JavaScript runtime for server-side development.

## Prerequisites

Before running this project, ensure you have the following prerequisites:

- Basic knowledge of React.js
- Basic knowledge of Node.js
- Understanding of JavaScript

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/Kapil-Sunil-Bhatia/Resume.git
    cd Resume
    ```

2. **Install Dependencies**:
    Navigate to both the `client` and `server` directories and install dependencies using npm:
    ```bash
    cd client
    npm install
    cd ../server
    npm install
    ```

3. **Configure Environment Variables**:
    Create a `.env` file in the `server` directory and add the following environment variables:
    ```env
    MONGO_URI=your_mongodb_connection_string
    PORT=5000
    ```

4. **Run the Application**:
    Open two terminal windows. In the first terminal, navigate to the `client` directory and start the React application:
    ```bash
    cd client
    npm start
    ```
    In the second terminal, navigate to the `server` directory and start the Node.js server:
    ```bash
    cd server
    npm start
    ```

5. **Access the Application**:
    Open your web browser and go to `http://localhost:3000` to view and use the resume builder application.

## Features

- **Create and Edit Resume**: Users can create and edit their resumes with a user-friendly interface.
- **Save to Database**: Resumes are saved in a MongoDB database for persistence.
- **View Resumes**: Users can view their saved resumes.
- **Delete Resumes**: Users can delete resumes they no longer need.


## Conclusion

By completing this course and developing the MERN Stack Resume Builder, I have acquired essential skills in full-stack web development, project deployment, and working with modern web technologies. This project is a testament to my capabilities in building real-world applications using the MERN stack.

## Contact

For any questions or support, please get in touch with me at [ksbcell12@gmail.com](mailto:ksbcell12@gmail.com).
