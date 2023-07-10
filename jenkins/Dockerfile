# Use the Jenkins LTS Docker image
FROM jenkins/jenkins:lts

# Switch to root user to install dependencies
USER root

# Install necessary dependencies
RUN apt-get update && \
    apt-get -y install apt-transport-https \
    ca-certificates curl gnupg2 \
    software-properties-common lsb-release

# Add Docker repo and install Docker
RUN curl -fsSLo /usr/share/keyrings/docker-archive-keyring.asc \
  https://download.docker.com/linux/debian/gpg

RUN echo "deb [arch=$(dpkg --print-architecture) \
  signed-by=/usr/share/keyrings/docker-archive-keyring.asc] \
  https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list

RUN apt-get update && apt-get install -y docker-ce-cli

# Copy the Groovy script that creates the admin user (optional)
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/

ARG VERSION=4.7-1
RUN curl --create-dirs -sSLo /usr/share/jenkins/agent.jar https://repo.jenkins-ci.org/public/org/jenkinsci/main/remoting/${VERSION}/remoting-${VERSION}.jar && \
  chmod 755 /usr/share/jenkins && \
  chmod 644 /usr/share/jenkins/agent.jar

# Switch back to the jenkins user
USER jenkins

# Expose ports for Jenkins web interface and agent connections
EXPOSE 8080 50000
