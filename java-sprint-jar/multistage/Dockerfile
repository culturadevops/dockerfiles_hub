FROM maven:3.6-jdk-8-alpine AS builder
WORKDIR /app
COPY pom.xml .
RUN mvn -e -B dependency:resolve
COPY . .
RUN mvn -e -B package

FROM openjdk:8-jdk-alpine
COPY --from=builder /app/target/<nombredeapp>.jar /usr/src/service/service.jar
COPY setup.sh /
RUN chmod 777 /setup.sh
ENV LOG_LEVEL_SYSTEM=ERROR
ENV LOG_LEVEL_BUSINESS=INFO
EXPOSE 8031
CMD [ "/setup.sh" ]