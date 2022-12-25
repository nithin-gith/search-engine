import meilisearch
import json

client = meilisearch.Client('http://localhost:7700')

json_file = open('data.json')
links = json.load(json_file)
response = client.index('link-search').add_documents(links)
print(client.get_task(response.task_uid))
