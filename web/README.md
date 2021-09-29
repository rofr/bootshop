
You can host the static web using either nginx or as a spring boot application

## Serving static web using spring boot
1. Create a spring boot application using initializer
2. Put the index.html and app.js files in the resources folder
3. Run the application and you should be able to access http://localhost:8080/index.html

## Serving static web using nginx
1. Run the build.sh script to build a docker image nginx
2. Run the run.sh to start a container based on the image created

### Resources
https://www.baeldung.com/spring-mvc-static-resources