pipeline {
    agent any
    stages {
        stage('Pull Latest Code') {
            steps {
                echo "Pulling latest code from GitHub..."
                git branch: 'master', url: 'https://github.com/Varun2055/movie-ticket-booking.git'
            }
        }
        stage('Deploy using Docker Compose') {
            steps {
                dir('movie-ticket-booking/backend') {
                    sh '''
                    echo "Stopping existing containers..."
                    docker compose down || true
                    
                    echo "Building new images..."
                    docker compose build --no-cache
                    
                    echo "Starting containers..."
                    docker compose up -d
                    
                    docker compose ps
                    '''
                }
            }
        }
    }
}
