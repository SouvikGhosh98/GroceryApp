FROM openjdk:17
COPY target/apigateway.jar docker-apigateway.jar
ENTRYPOINT ["java","-jar","docker-apigateway.jar"]