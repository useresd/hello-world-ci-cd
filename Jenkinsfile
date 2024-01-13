pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials("useresd-dockerhub")
    }
    stages {
        stage("Build") {
            steps {
                sh """
                    echo "Your password is $DOCKERHUB_CREDENTIALS"
                """
            }
        }
    }
}