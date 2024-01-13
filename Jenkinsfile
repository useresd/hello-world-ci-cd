pipeline {
    agent {
        docker {
            image "docker:latest"
        }
    }
    environment {
        DOCKERHUB_CREDENTIALS = credentials("useresd-dockerhub")
    }
    stages {
        stage("Build") {
            steps {
                sh 'docker build -t useresd/hello-world-ci-cd:latest .'
            }
        }
        stage("Login") {
            steps {
                sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
            }
        }
        stage("Push") {
            steps {
                sh 'docker push useresd/hello-world-ci-cd:latest'
            }
        }
    }
    post {
        always {
            sh 'docker logout'
        }
    }
}