FROM ubuntu:latest

# installing node and npm 
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

# installing python3 and pip
RUN apt-get install python3
RUN apt-get -y install python3-pip

# installing requirements
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r requirements.txt
COPY . /app

# creating documents
RUN python3 createDocuments.py


# installing meilisearch
RUN apt update
RUN apt install curl -y
RUN curl -L https://install.meilisearch.com | sh

# Move the Meilisearch binary to your system binaries
RUN mv ./meilisearch /usr/bin/

#creating meilisearch service
RUN mv ./meilisearch.service /etc/systemd/system/

#startin meiliesearch service
RUN systemctl enable meilisearch
RUN systemctl start meilisearch

# indexing
RUN python3 indexing.py

# installing node modules and building 
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

# installing nginx and start serving the app
RUN apt update && apt install -y nginx 
COPY nginx.conf /etc/nginx/sites-available/default
RUN service nginx start