pipeline {
    agent {
        docker {
            image 'node:lts-bullseye-slim'
            args '-u root'
        }
    }

    options {
        // This is required if you want to clean before build
        skipDefaultCheckout(true)
    }

    environment {
        IMAGE_NAME = 'hpbonfim/website'
        IMAGE_TAG = 'v0.1'
    }

    stages {
        stage('Wipe Out Workspace') {
            steps {
                cleanWs()
                checkout scm
                echo "Start ${env.JOB_NAME}..."
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
                sh 'npm install --save-dev cross-env'
                sh 'npm run lint'
            }
        }

        stage('Confirm') {
            steps {
                input message: 'Deploy to firebase? (Click "Proceed" to continue)'
            }
        }

        stage('Deploy to Firebase') {
            steps {
                echo 'Installing Firebase CLI...'
                sh 'npm install -g firebase-tools && firebase experiments:enable webframeworks'
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
