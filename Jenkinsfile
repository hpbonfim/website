pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
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
                sh 'node -v && npm -v && npm install' 
            }
        }
    }
}
