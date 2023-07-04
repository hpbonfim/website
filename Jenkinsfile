pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-u root'
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
                echo 'Building test...'
                sh 'npm install' 
            }
        }
    }
}