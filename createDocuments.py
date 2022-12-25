import json

json_data= open('saved_links.json')
links_data = json.load(json_data)
links = links_data['links']
documents = []
i = 1


for link in links:
    document = {}
    document['id']= i
    document['url']= link
    domain = link.split('/')[2]
    document['domain']= domain
    domain_keywords = domain.split('.')
    if domain_keywords[0] == 'www':
        domain_keywords = domain_keywords[1:]
    if domain_keywords[len(domain_keywords)-1] == 'com' or domain_keywords[len(domain_keywords)-1] == 'org' or domain_keywords[len(domain_keywords)-1] == 'co':
        domain_keywords = domain_keywords[:-1]
    document['domain_keywords']= domain_keywords
    keywords = link.split('/')[3:]
    j = 0 
    while j < len(keywords):
        if keywords[j] == '' or keywords[j].isnumeric()==True or (keywords[j].find('?')!=-1 and keywords[j].find('=')!=-1):
            keywords.pop(j)
        else:
            j += 1
    document['keywords']= keywords
    documents.append(document)
    i += 1


jsonString = json.dumps(documents)
jsonFile = open("data.json", "w")
jsonFile.write(jsonString)
jsonFile.close()
