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
                sh '''
                cd $WORKSPACE/movie-ticket-booking/backend
                docker compose down
                docker rmi $(docker images -a -q) || true
                docker compose build --no-cache
                docker compose up -d
                '''
            }
        }
    }
}
