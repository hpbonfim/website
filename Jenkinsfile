pipeline {
  agent any

  options {
    // This is required if you want to clean before build
    skipDefaultCheckout(true)
  }

  environment {
    IMAGE_NAME = 'hpbonfim/website'
    PRODUCTION_IMAGE_TAG = 'v1.0'
    STAGING_IMAGE_TAG = 'v1.0-beta'
    DOCKERHUB_CREDENTIALS = credentials('dockerhub')
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

    stage('Deploy Beta to Docker Hub') {
      agent any
      when {
        branch 'staging'
      }
      steps {
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
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
        sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
        sh 'docker build -t ${IMAGE_NAME}:${PRODUCTION_IMAGE_TAG} .'
        sh 'docker push ${IMAGE_NAME}:${PRODUCTION_IMAGE_TAG}'
      }
    }
  }
  post {
    always {
      sh 'docker logout'
    }
  }
}
