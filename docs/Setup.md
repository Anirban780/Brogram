# Dev Dialogue Setup

## Things you will need
* Node js 
* Mongo db database

## Install steps
#### Clone the repo
`git clone https://github.com/braydenidzenga/Dev-Dialogue.git`

#### Install dependancies
* `cd api`
* `npm install`

#### Create .env file
* `create a file called .env`
* Copy and paste this into the file and change the placeholders
* ```
    PORT=[port for the api]
    DB=[mongodb connection string]
    JWT_SECRET=[a secret for jwt tokens]`

#### Run the program
* for development: `npm run dev`
* for production: `npm start`
