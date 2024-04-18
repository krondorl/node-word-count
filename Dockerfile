FROM node:20.11-alpine
WORKDIR /app
COPY . .
CMD ["npm","start"]

# Commands
#
# Build
# docker build -t node-word-count .
#
# Run
# docker run -it node-word-count