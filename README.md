# Image Search App

The **Image Search App** allows users to search for images using the [Unsplash API](https://unsplash.com/developers) and displays the results in a visually appealing way. Users can click on image links to view them directly on Unsplash.

## Features

- **Search Images**: Type a keyword in the search bar to fetch relevant images from Unsplash.
- **Responsive Design**: The layout adjusts based on screen size, ensuring a good experience on desktop and mobile devices.
- **Lazy Loading**: Additional results can be fetched using the "Show more" button.

## Technologies Used

- **HTML5**: Structure of the app.
- **CSS3**: Styling and layout (including responsive design).
- **JavaScript (ES6 Modules)**: Fetching images from Unsplash API, DOM manipulation.
- **Unsplash API**: Retrieves free images from the Unsplash service.

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/Image-Search-App.git
    ```
2. Navigate into the project directory:
    ```bash
    cd Image-Search-App
    ```
3. Open the `index.html` file in your browser to view the app.

## API Key Setup

To fetch images, the app uses an Unsplash API key. You can use the included key or replace it with your own in the `main.js` file:

```javascript
export const accessKey = "YOUR_UNSPLASH_ACCESS_KEY";
