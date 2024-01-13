pipeline {
    agent any
    environment {
        CREDENTIALS "P@ssw0rd"
    }
    stages {
        stage("Build") {
            steps {
                sh """
                    echo "Your password is $CREDENTIALS"
                """
            }
        }
    }
}