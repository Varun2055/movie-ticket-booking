pipeline {
    agent any

    stages {

        stage('Fetch Latest Code in Jenkins') {
            steps {
                echo "Pulling latest code into Jenkins workspace..."
                git branch: 'master', url: 'https://github.com/Varun2055/movie-ticket-booking.git'
            }
        }

        stage('Deploy on EC2') {
            steps {
                sh '''
                echo "---------------------------------------------"
                echo "UPDATING PROJECT ON EC2 FOR DEPLOYMENT"
                echo "---------------------------------------------"

                # Move to project directory on EC2
                cd /home/ubuntu/movie-ticket-booking

                echo "Pulling latest code from GitHub into EC2..."
                git pull origin master

                echo "Navigating to backend docker-compose folder..."
                cd movie-ticket-booking/backend

                echo "Stopping existing Docker containers..."
                docker compose down || true

                echo "Cleaning ALL old Docker images..."
                docker rmi $(docker images -a -q) || true

                echo "Building new Docker images..."
                docker compose build

                echo "Starting new updated Docker containers..."
                docker compose up -d

                echo "---------------------------------------------"
                echo "DEPLOYMENT SUCCESSFUL!"
                echo "---------------------------------------------"
                '''
            }
        }
    }
}
