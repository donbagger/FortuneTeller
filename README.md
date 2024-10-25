
# Fortune Teller Application

This is a simple web-based application where users can receive a random fortune based on an image they click. The application also personalizes the experience based on the user's location, showing a customized greeting depending on the country they are visiting from.

## Features

- **Fortune Teller**: Users can click on an image to receive a random fortune.
- **Country-based Greeting**: The app identifies the user's country and displays a personalized greeting.
- **Delayed Paragraph Display**: Some elements (like paragraphs) are delayed and appear 3 seconds after the page loads, enhancing the user experience.
- **PNG Image Button**: The app uses a transparent PNG image as a button with hover effects like radiating shadows.

## Technologies Used

- **Node.js** and **Express**: For server-side functionality.
- **Handlebars.js**: As the templating engine for rendering dynamic views.
- **CSS**: For styling, including custom hover effects and transition animations.
- **JavaScript (Client-Side)**: Used for interacting with the DOM, local storage, and delaying content appearance.

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/fortune-teller.git
cd fortune-teller
```

### 2. Install Dependencies

To install the required Node.js dependencies, run:

```bash
npm install
```

### 3. Create a `.gitignore` File

Ensure that your `.gitignore` file contains the following line to prevent the `node_modules/` folder from being tracked:

```bash
node_modules/
```

### 4. Run the Application

To start the server, run:

```bash
node index.js
```

The application will start on `http://localhost:3000`.

### 5. Test Features

1. Visit the home page to see a customized greeting based on your location.
2. Click the fortune-teller image to receive a random fortune.
3. Hover over the image to see the cursor and shadow effects.

### 6. Delay Feature

Some content, such as specific paragraphs, will appear 2 seconds after the page loads.

## License

This project is open source and available under the [MIT License](https://opensource.org/licenses/MIT).
