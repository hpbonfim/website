pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-u root -p 3000:3000'
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
                echo 'Install dependencies...'
                sh 'npm install' 
            }
        }

        stage('Preflight') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Can proceed? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}