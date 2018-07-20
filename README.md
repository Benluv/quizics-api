# quizics-api

A RESTful API intended to be used for a physics quiz app.

## Getting started

```bash
git clone https://github.com/Benluv/quizics-api.git
cd quizics-api
npm install
```
From here on out. It is required to have postman installed in order to test the API calls.

## notes on the matter

Intended to be used with the Quizics app developed for the senior project for Doctor Barr at Lindenwood University.
Includes multiple calls from the Google API using express to create questions as well as utilizing Google's Firebase API to
instanciate authentication methods to create users and assign them relevant properties.

### Note:

Project was deprecated due to the nature of this particular project and the team's mayority self-imposed time constraints. 
Instead, Google's Web API (adding chunks of vanilla JS code into the app) was used. This removed any complexity that might have occurred 
while developing this API. Other factors that inflicted this decision was the team's lack of motivation, interest, and/or time to develop
interaction between the web app and API.

## Acknowledgments

* Tips fedora to @AndresRodH for sitting and guiding me through express implementation, API integration, and TS (TypeScript) usage
