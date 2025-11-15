pipeline {
    agent any

    stages {

        stage('Pull Latest Code') {
            steps {
                git branch: 'master', url: 'https://github.com/Varun2055/movie-ticket-booking.git'
            }
        }

        stage('Deploy using Docker Compose') {
            steps {
                sh '''
                echo "Navigating to project directory..."
                cd /home/ubuntu/movie-ticket-booking/movie-ticket-booking/backend

                echo "Stopping existing containers..."
                docker compose down

                echo "Cleaning up ALL Docker images..."
                docker rmi $(docker images -a -q) || true

                echo "Building new docker images..."
                docker compose build

                echo "Starting updated containers in detached mode..."
                docker compose up -d

                echo "Deployment completed successfully!"
                '''
            }
        }
    }
}
