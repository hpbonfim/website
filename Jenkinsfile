pipeline {
    agent none
    
    options {
        // This is required if you want to clean before build
        skipDefaultCheckout(true)
    }

    environment {
        // This is for the Docker image (pending)
        IMAGE_NAME = 'hpbonfim/website'
        IMAGE_TAG = 'v0.1'
    }

    stages {
        stage('Wipe Out Workspace') {
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-u root'
                }
            }
            steps {
                cleanWs()
                checkout scm
                echo "Start ${env.JOB_NAME}..."
            }
        }

        stage('Build') { 
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-u root'
                }
            }
            steps {
                echo 'Install dependencies...'
                sh 'npm install' 
            }
        }

        stage('Test') {
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-u root'
                }
            }
            steps {
                echo 'Lint code...'
                sh 'npm install --save-dev cross-env'
                sh 'npm run lint'
            }
        }

        stage('Confirm') {
            agent none
            steps {
                input message: 'Deploy to Firebase? (Click "Proceed" to continue)'
            }
        }

        stage('Deploy to Firebase') {
            agent {
                docker {
                    image 'node:lts-bullseye-slim'
                    args '-u root'
                }
            }
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
