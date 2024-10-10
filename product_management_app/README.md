## Project Overview
This project is a product management frontend application built with React, Chakra UI for styling, Axios for API requests, and React Router for navigation. It allows users to register, log in, view, create, and delete products. The application manages authentication through local storage and uses token-based authorization to interact with protected endpoints.

## Frontend Setup Instructions

**Prerequisites:**

- Node.js installed (version >= 14)
- Package manager (npm or yarn)

**Installation Steps:**

Clone the Repository: Open a terminal and run:
    git clone https://github.com/ktiya23/FullStackFrontEnd
    cd FullStackFrontEnd

Install Dependencies:
    npm install

Start the Application:
    npm start

The app will be available at http://localhost:3000.

**Key Dependencies:**

- React: Frontend library
- Chakra UI: For styling components
- Axios: For making API requests
- React Router: For client-side routing

##  Project Structure

/src
  /components
    - NavBar.js         // Navigation bar component
    - Login.js          // Login form
    - Signup.js         // Signup form
    - ProductForm.js    // Form to add products
    - ProductList.js    // List of products
  /context
    - authContext.js    // Context API for managing authentication
  /pages
    - HomePage.js       // Home page of the application
    - ProductPage.js    // Page to view products
    - NotFoundPage.js   // 404 page
  App.js                // Main app file
  index.js              // Entry point for the React app

## API Service Integration

Interacting with Backend Endpoints:
The app interacts with a backend API using Axios. Below are the key operations:

**Signup (POST):**

- Endpoint: /api/signup
Request: { email: 'test@example.com', password: 'password' }
On success, user is redirected to the login page.
Login (POST):

- Endpoint: /api/login
Request: { email: 'test@example.com', password: 'password' }
On success, a token is stored in localStorage and used for authorization in subsequent requests.
Fetch Products (GET):

- Endpoint: /api/products
Requires Authorization header with the stored token.
Fetches all available products for the logged-in user.
Create Product (POST):

- Endpoint: /api/products
Request: { name: 'Product Name', price: 100 }
Adds a new product to the list.
Delete Product (DELETE):

- Endpoint: /api/products/:id
Deletes the specified product based on the product ID.


## Authentication Flow

Sign Up: Users can create an account using their email and password.
Log In: Once logged in, the user receives a token which is stored in localStorage.
Protected Routes:
The product-related routes are protected and only accessible when the user is authenticated.
Token-based authentication is implemented by attaching the Authorization header with the token to each API request.
On log out, the token is removed from localStorage and the user is redirected to the login page.

## User Instructions

- Registration:
Navigate to the Signup page (/signup).
Enter your email and password, then click "Sign Up."
On successful registration, you’ll be redirected to the login page.
- Login:
Navigate to the Login page (/login).
Enter your registered email and password.
Upon successful login, you will be taken to the product page.
- CRUD Operations:
View Products: After logging in, visit the products page to view all products.
Create a Product: Use the product form to add new products.
Delete a Product: Each product in the list has a delete button. Click it to remove the product.

## API Endpoints

- Sign Up: /api/signup (POST)
- Login: /api/login (POST)
- Get Products: /api/products (GET)
- Create Product: /api/products (POST)
- Delete Product: /api/products/:id (DELETE)

## Authentication Handling

**Auth Context:**

The AuthProvider wraps the application and provides authentication-related logic through React's Context API.
This handles checking if a user is logged in, storing and retrieving tokens, and managing log out.

**Protected Routes:**

Routes related to products are protected using the token-based mechanism.
When the user is not logged in, they cannot access these routes and are redirected to the login page.

**Storing Token:**

The token is stored in localStorage after a successful login.
Each API request checks for this token and attaches it to the Authorization header.

## Deployment Instructions

You can deploy the application to platforms like Vercel, Netlify, or GitHub Pages.

**Netlify Deployment:**

Login to Netlify and connect your GitHub repository.

Deploy the Site:

On Netlify's dashboard, choose "New Site from Git."
Select the repository containing your project.
Click "Deploy" and wait for the deployment to complete.
Custom Domain: Optionally, set up a custom domain through Netlify’s domain settings.
