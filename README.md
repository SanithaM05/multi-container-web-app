# Multi-Container Web Application with CI/CD

A 3-tier web application containerized and orchestrated using Docker Compose, with Nginx as a reverse proxy and PostgreSQL as the database.

## Architecture

Browser
   |
   v
Nginx
   |
   +----> React Frontend
   |
   +----> Node.js Backend
              |
              v
          PostgreSQL

## Technologies Used

- React
- Node.js
- Express.js
- PostgreSQL
- Docker
- Docker Compose
- Nginx
- GitHub Actions
- Git & GitHub

## Project Structure

```text
multi-container-web-app/
│
├── .github/
│   └── workflows/
│       └── ci-cd.yml
│
├── frontend/
│   ├── src/
│   ├── Dockerfile
│   └── package.json
│
├── backend/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
├── nginx/
│   └── nginx.conf
│
├── docker-compose.yml
├── .env.example
├── .gitignore
└── README.md
How to Run
Clone the repository:
git clone https://github.com/SanithaM05/multi-container-web-app.git
cd multi-container-web-app
Start the application:
docker compose up -d --build
Check containers:
docker compose ps
Open the application:
http://localhost
API Endpoints
Health Check GET /api/health
Users
GET /api/users

CI/CD
GitHub Actions automatically:
Checks out the repository
Sets up Docker Buildx
Builds Docker images
Starts the Docker Compose application
Checks running containers
Tests the backend health endpoint
Tests the application
Stops the containers
The pipeline runs automatically whenever code is pushed to the main branch.
Docker Services
Service	Technology	Purpose
Frontend	React + Nginx	User interface
Backend	Node.js + Express	REST API
Database	PostgreSQL	Persistent data
Reverse Proxy	Nginx	Request routing
Key Features
Multi-container architecture
Container-to-container networking
Persistent PostgreSQL storage
Nginx reverse proxy
REST API
Automated CI/CD
Health checks
Reproducible Docker deployment
Future Improvements
HTTPS using Let's Encrypt
Cloud deployment
Docker image registry
Prometheus and Grafana monitoring
Automated production deployment
