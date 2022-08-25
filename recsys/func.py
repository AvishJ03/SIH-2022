import numpy as np
import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import difflib
import mongo

vectorizer = TfidfVectorizer()
df = mongo.getJobs()
features = ['title', 'skills']

def recommend(user, jobType, location, experience):
    jobdf = df[(df['type'] == jobType) & (df['minExp'] <= experience) & (
        (df["location"] == location) | (df["location"] == "Remote"))]
    indexes = jobdf.index
    combined = jobdf['title']+" "+jobdf['skills']
    featureVectors = vectorizer.fit_transform(combined)
    similarity = cosine_similarity(featureVectors)
    internships = combined.to_list()
    closest = difflib.get_close_matches(user, internships)
    match = closest[0]
    index = combined[combined == match].index[0]
    indexes = combined.index.to_list()
    index = indexes.index(index)
    similar = list(enumerate(similarity[index]))
    sort = sorted(similar, key=lambda x: x[1], reverse=True)
    sort = sort[:20]
    i = 0
    index = []
    for job in sort:
        if(job[1] < 0.2):
            break
        i = indexes[job[0]]
        index.append(i)
    ids = []
    for i in index:
        jid = df.loc[i, '_id']
        ids.append(jid["$oid"])
    return ids

