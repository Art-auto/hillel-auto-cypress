pipeline{
    agent{
        node {
          env.NODEJS_HOME = "${tool 'Node'}"
          env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
          sh 'npm --version'
      }
    }
    stages{
        stage("Install dependancies"){
            steps{
                sh 'npm i'
            }
            post{
                always{
                    echo "========always========"
                }
                success{
                    echo "========A executed successfully========"
                }
                failure{
                    echo "========A execution failed========"
                }
            }
        }
        stage('Run tests') {
          steps{
            sh 'npm run cy:run'
          }
        }
    }
    post{
        always{
            echo "========always========"
            cleanWs()
        }
        success{
            echo "========pipeline executed successfully ========"
        }
        failure{
            echo "========pipeline execution failed========"
        }
    }
}