FROM ubuntu:latest
RUN apt-get update && apt-get upgrade -y && \
    apt-get install -y nodejs \
    npm

RUN apt-get install python3
RUN apt-get -y install python3-pip
WORKDIR /app
COPY requirements.txt /app
RUN pip install -r requirements.txt
COPY . /app
RUN python3 createDocuments.py


# RUN echo "deb [trusted=yes] https://apt.fury.io/meilisearch/ /" | tee /etc/apt/sources.list.d/fury.list
# RUN apt update && apt install meilisearch-http
# RUN meilisearch


# RUN python3 indexing.py

# WORKDIR /app
# COPY package.json /app
RUN npm install
# COPY . /app
RUN npm run build
CMD ["npm", "start"]

