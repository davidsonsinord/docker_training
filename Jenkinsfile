
def buildAndPushDocker(workingdir, appname) {
    withCredentials([usernamePassword(credentialsId: 'DOCKER_HUB_CREDENTIAL', passwordVariable: 'DOCKER_HUB_PWD', usernameVariable: 'DOCKER_HUB_LOGIN')]) {
        sh "cd $workingdir && docker build -t $appname . && " +
                "docker tag $appname $DOCKER_HUB_LOGIN/$appname:latest && " +
                "docker login --username $DOCKER_HUB_LOGIN --password $DOCKER_HUB_PWD && " +
                "docker push $DOCKER_HUB_LOGIN/$appname:latest"
    }
}

def helm(opt, namespace) {
    withCredentials ( [string(credentialsId: 'K8S_TOKEN', variable: 'K8S_TOKEN')] ) {
        sh "export KUBERNETES_MASTER=https://104.199.68.113 &&  helm --insecure-skip-tls-verify --token='$K8S_TOKEN' $opt --namespace $namespace "
    }
}


def deploy() {
    helm("install tuto-helm k8s", 'nicolas')
}

pipeline {
    agent none
    stages {
        stage("Build Docker") {
            parallel {
                stage('database') {
                    agent any
                    steps {
                        buildAndPushDocker('bdd', 'k8s-bdd')
                    }
                }
                stage('api') {
                    agent any
                    steps {
                        buildAndPushDocker('tutoapi', 'k8s-api')
                    }
                }
            }
        }

        stage('Deploy on K8s') {
            agent {
                docker {
                    image 'alpine/helm:latest'
                    args '--entrypoint ""'
                }
            }
            steps {
                deploy()
            }
        }
    }
}
