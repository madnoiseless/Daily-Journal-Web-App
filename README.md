# Daily Journal Web App README

Welcome to the Daily Journal web app! This project is a simple blogging platform where users can create posts, read posts, and navigate between different sections like Home, About, and Contact pages. This README will provide you with an overview of the project structure and how to run it locally.

## Project Structure
- `app.js`: This file contains the server-side code written in Node.js using Express framework to handle routing and rendering of EJS templates.
- `views` folder: Contains EJS templates for different pages of the app - `home.ejs`, `about.ejs`, `contact.ejs`, `compose.ejs`, and `post.ejs`.
- `public` folder: Contains static assets like CSS files used for styling the app.
- `partials` folder: Contains header and footer EJS partials used for code reusability and easier maintenance.
- `package.json`: Contains information about the project dependencies and scripts required to run the app.

## Running the App Locally
To run the Daily Journal web app locally, follow these steps:
1. Make sure you have Node.js installed on your machine.
2. Clone the project repository from GitHub.
3. Open a terminal window and navigate to the project directory.
4. Install project dependencies by running `npm install`.
5. Start the server by running `node app.js`.
6. Open your browser and go to `http://localhost:3000` to view the home page of the app.

## Features
- **Home Page**: Displays a list of existing posts with a snippet of content. Users can click on "Read More" to view the full post.
- **About Page**: Provides information about the project and its purpose.
- **Contact Page**: Includes contact information or form for users to reach out.
- **Compose Page**: Allows users to create new blog posts by entering a title and content.

## Contributing
If you'd like to contribute to this project, feel free to fork the repository, make your changes, and submit a pull request. Your feedback and contributions are highly appreciated!

## Author
This Daily Journal web app was created by Mohammad Salehi. You can reach out to the author at [m.h.mm.ds.l.h.00@gmail.com](mailto:m.h.mm.ds.l.h.00@gmail.com).

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

Thank you for checking out the Daily Journal web app. Happy blogging! 📝🎉
