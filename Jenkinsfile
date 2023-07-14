pipeline {
  agent any

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
        input message: 'Deploy to Dockerhub? (Click "Proceed" to continue)'
      }
    }

    stage('Deploy to Docker Hub') {
      when {
        branch 'production'
      }
      agent any
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
        sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'
      }
    }
  }
}