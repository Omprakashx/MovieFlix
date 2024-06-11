
# MovieFlix

- A web application to manage movies, allowing users to add, read, update, and delete movie details.

- Movieflix is a simple web application that allows users to manage a collection of movies. Users can add new movies, update existing ones, delete movies, and view a list of all movies.



## Table of Contents

1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Getting Started](#getting-started)
5. [Installation](#installation)
6. [Usage](#usage)
7. [API Endpoints](#api-endpoints)
8. [Contributing](#contributing)
9. [License](#license)
10. [Contact](#contact)
## Features

- Add a new movie with a name, description, and URL.
- View details of all movies.
- Update existing movie details.
- Delete a movie from the collection.


## Getting Started
## Demo

Insert gif or link to demo


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)


## Tech Stack
- **Backend:**   Node.js, Express
- **Frontend:**  React
- **Database:**  MongoDB
- **Other:**     REST API



## Prerequisites

- Node.js and npm installed
- MongoDB installed and running
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`MONGODB_URL`

`ANOTHER_API_KEY`


## Installation

Install my-project with npm


- **Backend Configuration**

1. Clone the repository
    ```bash
    git clone https://github.com/your-username/movieflix.git
    ```

2. Navigate to the server directory
    ```bash
    cd server
    ```

3. Install dependencies
    ```bash
    npm install
    ```

4. Set up environment variables
    - Create a `.env` file in the root directory
    - Add the following variables:
        ```
        MONGODB_URI=your_mongodb_connection_string
        PORT=5000
        ```

5. Start the development server
    ```bash
    node index.js
    ```


**Frontend Congiguration** 

1. Navigate to the client directory
    ```bash
    cd client
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Start the Frontend  
    ```bash
    npm run dev
    ```    
## API Endpoints


### Add a Movie

- **URL:** `/api/movies`
- **Method:** `POST`
- **Body:**
    ```json
    {
      "name": "Movie Name",
      "description": "Movie Description",
      "url": "http://example.com"
    }
    ```

### Get All Movies

- **URL:** `/api/movies`
- **Method:** `GET`

### Update a Movie

- **URL:** `/api/movies/:id`
- **Method:** `PUT`
- **Body:**
    ```json
    {
      "name": "Updated Movie Name",
      "description": "Updated Movie Description",
      "url": "http://updatedexample.com"
    }
    ```

### Delete a Movie

- **URL:** `/api/movies/:id`
- **Method:** `DELETE`

## Deployment

To deploy this project run

```bash
  npm run deploy
```


## Contributing


Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Reques
## License


Distributed under the MIT License. See `LICENSE` for more information.


## 🚀 About Me
I'm a full stack developer...


## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/)


