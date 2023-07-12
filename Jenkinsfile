pipeline {
    agent none
    
    options {
        // This is required if you want to clean before build
        skipDefaultCheckout(true)
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
                sh 'npm run test'
                sh 'npm run lint'
            }
        }
    }
}
