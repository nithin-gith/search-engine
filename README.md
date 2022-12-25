# Link retriever

## Idea 
To create a smooth search engine for provided set of links which can provide the hints about the links<br />
To get satisfactory results main idea should be preprocessing the given link data and obtain maximum information out of it like information may be present in domain,path,params<br />
To achieve this the tools i used are : <br />
1. React - for UI to take queries and display search results
2. meilisearch - for indexing and querying the queries
3. MUI - for styling the frontend
4. Docker - for deploying

## Implementation
1. The links data given needed to manipulated to feed into the meilisearch for indexing that isbecause meilisearch takes the entries as documents for which unique id must be present for every link.<br />
2. Along with this i have preprocessed the links data i.e., getting keywords out of the link for displaying, using python.<br />
3. Now to index the manpulated links data i have used python libary to connect to the meilisearch instance and indexed the data
4. After indexing is done, it is time to make queries to meilisearch and get response using JS library
5. intialised react app and styled with MUI library and used in-line styling whenever required 
6. started testing the results and imporved preprocessing (step-2) till satisfactory results are achieved

## Installation
1. To run the meilisearch we need meilisearch and need to be installed (depends on OS - given for ubuntu)

```
echo "deb [trusted=yes] https://apt.fury.io/meilisearch/ /" | sudo tee /etc/apt/sources.list.d/fury.list

sudo apt update && sudo apt install meilisearch-http

# Launch Meilisearch
meilisearch
# meili search starts running at localhost:7700

```
2. install requirements.txt
```
pip3 install -r requirements.txt
```
3. To create documents which can be fed to meilisearch for indexing 
```
python createDocuments.py
```
4. To index the created documents 
```
python indexing.py
```
5. install node modules
```
npm install
```
6. start development server
```
npm start
```
## Deployment
We can deploy our project using docker <br />
following are the steps involved in building docker image and running container<br />
1. To build the image I made Dockerfile which does following steps in order <br />
    * Install python, pip, npm, requirements 
    * create meiliesearch service
    * start meiliesearch service
    * index the data
    * installing node modules
    * builing frontend
    * configure ngnix to serve built frontend<br />
    <br>
2. Build the image from the Dockerfile
```
docker build -t search-engine:latest .
```
3. Run the container from the built image
```
docker run -p 8080:80 search-engine:latest
```
requests to 8080 port will be redirected to 80 port of container where nginx is configured

## Images of Final Product
![image-3](https://user-images.githubusercontent.com/85257314/209472542-f512c4cf-e384-4836-a017-f0d613f448db.jpg)
![image-4](https://user-images.githubusercontent.com/85257314/209472545-79b92c5b-c80e-4a5e-854e-23fdb765d7c4.jpg)
in images directory
