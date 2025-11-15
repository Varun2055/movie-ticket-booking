pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/movie-ticket-booking/movie-ticket-booking/backend"
    }

    stages {

        stage('Pull Latest Code') {
            steps {
                echo "Pulling latest code from GitHub..."
                git branch: 'master', url: 'https://github.com/Varun2055/movie-ticket-booking.git'
            }
        }

        stage('Stop Existing Containers') {
            steps {
                echo "Stopping any running Docker containers..."
                sh """
                cd ${PROJECT_DIR}
                docker compose down || true
                """
            }
        }

        stage('Clean Docker Images') {
            steps {
                echo "Removing all Docker images to force rebuild..."
                sh """
                docker rmi \$(docker images -a -q) || true
                """
            }
        }

        stage('Build & Deploy Docker') {
            steps {
                echo "Building Docker images..."
                sh """
                cd ${PROJECT_DIR}
                docker compose build --no-cache
                echo "Starting containers in detached mode..."
                docker compose up -d
                """
            }
        }

        stage('Verify Deployment') {
            steps {
                echo "Listing running Docker containers..."
                sh "docker ps"
            }
        }
    }

    post {
        success {
            echo "Deployment completed successfully!"
        }
        failure {
            echo "Deployment failed. Check console output for errors."
        }
    }
}
