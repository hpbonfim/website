pipeline {
    agent {
        dockerContainer {
            image 'node:lts-bullseye-slim' 
            args '-p 3000:3000' 
        }
    }

    environment {
        IMAGE_NAME = 'hpbonfim/website'
        IMAGE_TAG = 'v0.1'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') { 
            steps {
                sh 'node -v && npm -v && npm install --global' 
            }
        }
    }
}
