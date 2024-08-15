# Wordle Project

## Overview

This project is a Wordle game implementation with separate client and server components. The client side is built with React, and the server side uses Node.js. This README provides instructions on how to set up and run the application locally.

## Features

- **Client:** Provides the user interface for the Wordle game.
- **Server:** Handles game logic and state management.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or later) installed on your machine.
- [npm](https://www.npmjs.com/) (Node Package Manager) installed.

### Setup

1. **Clone the Repository**

   ```bash
   git clone https://github.com/RockingMat/Wordle-Project.git
   cd Wordle-Project
   ```

2. **Install Dependencies**

   Navigate to the `client` folder and install the dependencies:

   ```bash
   cd client
   npm install
   ```

   Navigate to the `server` folder and install the dependencies:

   ```bash
   cd ../server
   npm install
   ```

3. **Run the Application**

   In two separate terminal windows, start both the client and server:

   - **Client:**

     ```bash
     cd client
     npm run start
     ```

   - **Server:**

     ```bash
     cd server
     npm run start
     ```

4. **Access the Application**

   Open your browser and go to `http://localhost:3000` to play the game.

## Folder Structure

- `client/` - Contains the React frontend application.
- `server/` - Contains the backend server code.

## Contributing

Feel free to submit issues or pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
