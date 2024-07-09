name: Publish Docker Image to Docker Hub
 
on: 

  push:

    branches: ['master']

jobs:

  build:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v3

      - name: Log in to Docker Hub

        uses: docker/login-action@f054a8b539a109f9f41c372932f1ae047eff08c9

        with:

          username: ${{ secrets.DOCKER_USERNAME }}

          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Build the Docker image

        run: docker build . --file Dockerfile --tag ${{ secrets.DOCKER_USERNAME }}/cheemsbot11oh

      - name: Docker Push

        run: docker push ${{ secrets.DOCKER_USERNAME }}/cheemsbot11oh
  
