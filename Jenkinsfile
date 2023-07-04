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

        stage('Test') {
            steps {
                echo 'Lint code...'
                sh 'chmod +x ./jenkins/scripts/test.sh'
                sh './jenkins/scripts/test.sh'
            }
        }

        stage('Preflight') {
            steps {
                sh 'chmod +x ./jenkins/scripts/deliver.sh'
                sh './jenkins/scripts/deliver.sh'
                input message: 'Can proceed? (Click "Proceed" to continue)'
                sh 'chmod +x ./jenkins/scripts/kill.sh'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
