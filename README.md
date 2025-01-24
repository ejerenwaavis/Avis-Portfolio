# Node.js Portfolio Website

This is a simple Node.js portfolio website built using Express and EJS. It showcases various projects and provides information about the developer.

## Project Structure

```
nodejs-portfolio
├── src
│   ├── app.js                # Entry point of the application
│   ├── controllers           # Contains controller files
│   │   └── index.js         # Index controller for handling requests
│   ├── routes                # Contains route definitions
│   │   └── index.js         # Route definitions for the application
│   ├── views                 # Contains EJS view templates
│   │   ├── index.ejs        # Home page template
│   │   └── layout.ejs       # Main layout template
│   └── public                # Contains static files
│       ├── css              # CSS styles
│       │   └── styles.css   # Styles for the website
│       └── js               # JavaScript files
│           └── scripts.js    # Client-side scripts
├── package.json              # npm configuration file
├── .gitignore                # Git ignore file
└── README.md                 # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd nodejs-portfolio
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To start the application, run:
```
npm start
```

The application will be available at `http://localhost:3000`.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.

## License

This project is licensed under the MIT License.