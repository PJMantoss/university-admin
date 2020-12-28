TECHNOLOGIES OVERVIEW

-React

-React Router

-Styled Components(CSS in JS)

-Firebase (Authentication)

-Docker

WEB ARCHITECTURE

Root folder - public/images and src. Within the src folder are the following directories:

components, data, containers and pages

DESIGN PATTERN: Compound Components - a design pattern in React that allows for writing CSS in JavaScript.

HOW TO RUN & TEST PROJECT?

CLONE THE PROJECT

git clone https://github.com/PJMantoss/university-admin.git

INSTALL DOCKER

INSTALL DEPENDENDCIES

yarn add react-router-dom

yarn add styled-components

yarn add normalize.css


START THE PROJECT

yarn start

RUN DOCKER IMAGE

sudo docker run reactimage

Open another window terminal

run sudo docker ps

run sudo docker exec -it [CONTAINER ID] sh (replace CONTAINER ID with the actual values displayed in previous step. Type it in without the angle brackets []).

type ls after /app # and press enter to see contents of container

run npm start

when asked whether you'd like to run app on another port, type y

Open another terminal tab and run yarn start

TEST PROJECT

yarn test