# Visit Ottawa

| Student Name | Student Number |
|-|-|
| Mohamed Farah | 300147409 |
| Abigail Shanab | 300139133 |
| Jusley Xavier Amani Mutangana | 300094632 |
|  Sébastien Kock | 300137051 |  

### App Description
The purpose of our app is to assist travelers visiting Ottawa by providing information on flights, hotels, and local transportation.  

This application uses the [OC Transpo Live Next Bus Arrival Data Feed API](https://www.octranspo.com/en/plan-your-trip/travel-tools/developers/), for which you need to register with an API key to use it. Please see the [Terms of Use](https://www.octranspo.com/en/plan-your-trip/travel-tools/developers/dev-terms) for the licensing.

## Setup Instructions
Please ensure you have the following software installed:
* [Visual Studio Code](https://code.visualstudio.com/) (or the IDE of your choice)
* [NodeJS](https://nodejs.org/en/download/)

Please follow these instructions to run the application:
* Clone this repository to your computer
* Open the repository in your IDE
* Open a terminal in your IDE and go to the **backend** folder: ```cd backend```
* Install the necessary dependencies: ```npm install```
* Create a **.env** file in the **backend** folder and insert the following:
```
OCTranspoID = 'INSERT YOUR OC TRANSPO APP ID HERE'
OCTranspoKey = 'INSERT YOUR OC TRANSPO API KEY HERE'
```
* Start the server: ```node index.js```
* Open a new terminal in your IDE and go to the **fly_me** folder: ```cd fly_me```
* Install the necessary dependencies: ```npm install```
* Start the react application: ```npm start```
* Open your browser and visit http://localhost:3000
