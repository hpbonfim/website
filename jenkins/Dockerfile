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

# Switch back to the jenkins user
USER jenkins

RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"

# Start Jenkins
ENTRYPOINT ["/usr/local/bin/jenkins.sh"]


