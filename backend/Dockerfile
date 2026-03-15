# build stage
FROM eclipse-temurin:25-jdk AS builder
WORKDIR /app

copy .mvn ./.mvn
COPY mvnw .
COPY pom.xml .
COPY config ./config
COPY src ./src

RUN chmod +x mvnw
RUN ./mvnw clean package -DskipTests

# runtime stage
FROM eclipse-temurin:25-jre
WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]