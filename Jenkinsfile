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
                input message: 'Deploy to firebase? (Click "Proceed" to continue)'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Installing Firebase CLI...'
                sh 'npm install -g firebase-tools'
                echo 'Building app...'
                sh 'npm run build'
                echo 'Deploying to Firebase...'
                withCredentials([string(credentialsId: 'firebase-deployment-token', variable: 'FIREBASE_TOKEN')]) {
                  sh 'firebase deploy --only hosting --token $FIREBASE_TOKEN'
                }
            }
        }
    }
}
