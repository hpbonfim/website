pipeline {
  agent any

  options {
    // This is required if you want to clean before build
    skipDefaultCheckout(true)
  }

  environment {
    // This is for the Docker image name and tag
    IMAGE_NAME = 'hpbonfim/website'
    IMAGE_TAG = 'v1.0'
    STAGING_IMAGE_TAG = 'v1.0-beta'
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
        echo 'Test code...'
        sh 'npm run test'
      }
    }

    stage('Confirm') {
      agent none
      when {
        anyOf {
          branch 'staging'
          branch 'production'
        }
      }
      steps {
        input message: 'Deploy to Dockerhub? (Click "Proceed" to continue)'
      }
    }

    stage('Deploy Beta to Docker Hub') {
      agent any
      when {
        branch 'staging'
      }
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${STAGING_IMAGE_TAG} .'
        sh 'docker push ${IMAGE_NAME}:${STAGING_IMAGE_TAG}'
      }
    }

    stage('Deploy to Docker Hub') {
      agent any
      when {
        branch 'production'
      }
      steps {
        sh 'docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .'
        sh 'docker push ${IMAGE_NAME}:${IMAGE_TAG}'
      }
    }
  }
}
