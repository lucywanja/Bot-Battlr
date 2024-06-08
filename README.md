## Introduction

Bot Battlr is a React-based application that fetches data from a local JSON DB server to display a list of available bots. Users can interact with the bots, view their details, and add them to their army. The application is designed with a user-friendly interface, making it easy to navigate and manage your bot collection.

## Features

- **Browse Bots**: View a comprehensive list of available bots.
- **Bot Details**: Click on a bot to view detailed information.
- **Enlist Bots**: Add bots to your personal army.
- **Responsive Design**: Enjoy a seamless experience on both desktop and mobile devices.

## Technologies Used

- **React**: For building the user interface.
- **JSON Server**: For serving bot data locally.
- **Tailwind CSS**: For styling the application.
- **Netlify**: For deployment.

## Setup and Installation

To set up and run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/bot-battlr.git
   cd bot-battlr
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start JSON Server**:
   ```bash
   npx json-server --watch db.json --port 8001
   ```

4. **Start the React application**:
   ```bash
   npm start
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

Once the application is running, you can:
- Browse through the list of available bots.
- Click on a bot to view its details.
- Enlist bots into your army by clicking the enlist button.