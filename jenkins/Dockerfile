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

# Copy the Groovy script that creates the admin user
COPY default-user.groovy /usr/share/jenkins/ref/init.groovy.d/

# Switch back to the jenkins user
USER jenkins

# Install Jenkins plugins (optional)
# RUN jenkins-plugin-cli --plugins "blueocean docker-workflow"

# Expose port 8080 (default port for Jenkins) (also default port on GCP, enable if nedded)
# EXPOSE 8080

# Start Jenkins
ENTRYPOINT ["/usr/local/bin/jenkins.sh"]
