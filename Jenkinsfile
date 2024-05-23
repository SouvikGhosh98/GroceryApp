pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = 'souvikiiitb'
        DOCKERHUB_PASSWORD = 'electronicscity@2023'
        IMAGE_NAME_PREFIX = 'souvikiiitb/speproject'
        GITHUB_REPO_URL='https://github.com/Pappu98/SPE-MajorProject.git'
    }

    stages {
        stage('Checkout') {
            steps{
				script{
					git branch: 'master', url: "${GITHUB_REPO_URL}"
				}
            }
        }

        stage('Build and Push Images') {
            parallel {
                stage('Product Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-productservice", "./Backend/ProductManagement")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-productservice ${DOCKERHUB_USERNAME}/speproject-productservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-productservice:latest"
                        }
                    }
                }

                stage('Cart Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-cartservice", "./Backend/ShoppingCartManagement")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-cartservice ${DOCKERHUB_USERNAME}/speproject-cartservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-cartservice:latest"
                        }
                    }
                }

                stage('OTP Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-otpservice", "./Backend/OtpManagement")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-otpservice ${DOCKERHUB_USERNAME}/speproject-otpservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-otpservice:latest"
                        }
                    }
                }

                stage('Login Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-loginservice", "./Backend/LoginManagement")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-loginservice ${DOCKERHUB_USERNAME}/speproject-loginservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-loginservice:latest"
                        }
                    }
                }

                stage('Order Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-orderservice", "./Backend/OrderManagement")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-orderservice ${DOCKERHUB_USERNAME}/speproject-orderservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-orderservice:latest"
                        }
                    }
                }

                stage('API Gateway Service') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-apigatewayservice", "./Backend/API-GATEWAY/API-GATEWAY")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-apigatewayservice ${DOCKERHUB_USERNAME}/speproject-apigatewayservice:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-apigatewayservice:latest"
                        }
                    }
                }

                stage('Eureka Server') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-eurekaserver", "./Backend/EurekaServer/EurekaServer")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-eurekaserver ${DOCKERHUB_USERNAME}/speproject-eurekaserver:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-eurekaserver:latest"
                        }
                    }
                }

                stage('Frontend') {
                    steps {
                        script {
                            dockerImage = docker.build("${IMAGE_NAME_PREFIX}-frontend", "./Frontend/amazon-clone")
                            sh "docker login --username ${DOCKERHUB_USERNAME} --password ${DOCKERHUB_PASSWORD}"
                            sh "docker tag ${IMAGE_NAME_PREFIX}-frontend ${DOCKERHUB_USERNAME}/speproject-frontend:latest"
                            sh "docker push ${DOCKERHUB_USERNAME}/speproject-frontend:latest"
                        }
                    }
                }
            }
        }
        stage('Ansible Deployment') {
            steps {
                script { 
                    sh 'ansible-playbook -i inventory.ini deploy.yaml'
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}