FROM gradle:6.9.0-jdk11  AS builder
COPY . .
RUN gradle build

FROM openjdk:11
RUN mkdir /code
COPY --from=builder /home/gradle/build/libs/* /code/
ENTRYPOINT [ "sh", "-c", "java -jar /code/*.jar" ]



