yi# Deployment Guide

## Production Build & Deployment

This guide covers building and deploying the Mutuchem Agrovet application using Docker.

### Prerequisites

- Docker (version 20.10 or higher)
- Docker Compose (version 1.29 or higher)
- Git

### Quick Start with Docker Compose

```bash
# Clone the repository
git clone <repository-url>
cd agrovet

# Build and start the application
docker-compose up --build

# The application will be available at:
# - App: http://localhost:3000
# - Nginx (optional): http://localhost:80
```

### Production Deployment

#### 1. Build the Docker Image

```bash
# Build the production image
docker build -t mutuchem-agrovet:latest .

# Or with version tag
docker build -t mutuchem-agrovet:1.0.0 .
```

#### 2. Run the Container

```bash
# Run with Docker
docker run -d \
  --name mutuchem-agrovet \
  -p 3000:3000 \
  --restart unless-stopped \
  --health-cmd="wget --quiet --tries=1 --spider http://localhost:3000" \
  --health-interval=30s \
  --health-timeout=10s \
  --health-retries=3 \
  --health-start-period=5s \
  mutuchem-agrovet:latest
```

#### 3. Using Docker Compose for Production

```bash
# Start services in detached mode
docker-compose up -d

# View logs
docker-compose logs -f app

# Stop services
docker-compose down

# Restart services
docker-compose restart
```

### Environment Variables

Copy `.env.example` to `.env` and configure as needed:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

```
VITE_API_URL=http://localhost:3000
VITE_ENV=production
NODE_ENV=production
```

### Performance Optimization

#### Image Loading
- Images are served with proper caching headers
- High-resolution images from Pexels are used (1600x1200 with dpr=2)
- Images are lazy-loaded where applicable

#### Build Optimization
- Multi-stage Docker build reduces image size
- SWC compiler for faster TypeScript compilation
- Tree-shaking of unused code in production builds

#### Runtime Optimization
- Gzip compression enabled in Nginx
- HTTP/2 support via Nginx
- Caching strategy for static assets (CSS, JS, images)
- CDN-ready image URLs for faster delivery

### Monitoring & Logs

```bash
# View application logs
docker-compose logs app

# Follow logs in real-time
docker-compose logs -f app

# View Nginx logs
docker-compose logs nginx

# Check container health
docker ps --filter "name=mutuchem"
```

### Scaling

#### Horizontal Scaling with Docker Compose

Create a `docker-compose.prod.yml` for production scaling:

```yaml
version: '3.8'

services:
  app:
    # ... (same configuration)
    deploy:
      replicas: 3
      restart_policy:
        condition: on-failure
```

Run with:
```bash
docker-compose -f docker-compose.prod.yml up -d
```

### Backup & Maintenance

```bash
# Backup database/data
docker-compose exec app tar czf backup.tar.gz /app/data/

# Clean up unused Docker resources
docker system prune -a

# Update the application
git pull origin main
docker-compose build --no-cache
docker-compose up -d
```

### Troubleshooting

#### Application won't start

```bash
# Check logs
docker-compose logs app

# Restart containers
docker-compose down
docker-compose up -d
```

#### Port already in use

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in docker-compose.yml
# ports:
#   - "8000:3000"
```

#### Performance Issues

1. **Check container resources:**
   ```bash
   docker stats mutuchem-agrovet
   ```

2. **Increase memory limit** in `docker-compose.yml`:
   ```yaml
   services:
     app:
       mem_limit: 2gb
       memswap_limit: 2gb
   ```

3. **Enable caching** (already configured in Nginx)

### Load Testing

To test application performance:

```bash
# Using Apache Bench
ab -n 1000 -c 100 http://localhost:3000/

# Using wrk (install separately)
wrk -t4 -c100 -d30s http://localhost:3000/
```

### CI/CD Integration

#### GitHub Actions Example

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Build Docker image
        run: docker build -t mutuchem-agrovet:${{ github.sha }} .
      
      - name: Push to registry
        run: docker push mutuchem-agrovet:${{ github.sha }}
      
      - name: Deploy to production
        run: |
          # Your deployment script here
```

### Security Best Practices

1. **Use environment variables** for sensitive data
2. **Keep Docker images updated**
3. **Run containers as non-root** (already configured)
4. **Use network policies** to restrict traffic
5. **Enable security headers** (configured in Nginx)
6. **Use HTTPS** in production (configure SSL in Nginx)

### Additional Resources

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Nginx Documentation](https://nginx.org/en/docs/)

---

**Last Updated:** 2024
**Version:** 1.0.0
