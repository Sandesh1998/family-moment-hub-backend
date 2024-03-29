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
    stages{
        stage('Build'){
            steps{
                sh 'npm install'
            }
        }

    }
    stage('Start'){
        steps{
            sh 'npm start'
        }
    }

    post{
        always{
            echo 'This will always run'
        }
        success{
            echo 'This will run only if successful'
        }
        failure{
            echo 'This will run only if failed'
        }
        unstable{
            echo 'This will run only if the build was unstable'
        }
        changed{
            echo 'This will run only if the state of the Pipeline has changed'
            echo 'For example, if the Pipeline was previously failing but is now successful'
        }
    }

}