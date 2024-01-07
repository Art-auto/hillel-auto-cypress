pipeline{
    agent{
        node {
          env.NODEJS_HOME = "${tool 'Node 6.x'}"
          // on linux / mac
          env.PATH="${env.NODEJS_HOME}/bin:${env.PATH}"
          // on windows
          env.PATH="${env.NODEJS_HOME};${env.PATH}"
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