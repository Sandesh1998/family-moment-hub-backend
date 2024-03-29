// Pipeline script for Jenkins
pipeline{
    agent {
        docker {
            image 'node:14'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm start'
            }
        }
    }
    post{
        success {
            echo 'The pipeline has been successfully executed!'
        }
        failure {
            echo 'The pipeline has failed!'
        }
    }

}