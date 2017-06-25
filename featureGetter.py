categories = ['alt.atheism', 'soc.religion.christian','comp.graphics', 'sci.med']

import os
import pandas as pd
from sklearn.feature_extraction.text import CountVectorizer

genderVect = CountVectorizer()
raceVect = CountVectorizer()
orientationVect = CountVectorizer()

genderStrings = []
orientationStrings = []
raceStrings = []


# X = vectorizer.fit_transform(corpus)
cwd = os.getcwd()


for dirName in os.listdir(cwd+'/Categories/gender'):
	fullString = ''
	for filename in os.listdir(cwd+'/Categories/gender/' + dirName):

		with open (cwd + '/Categories/gender/'+ dirName + '/' + filename) as f: s= f.read()
		fullString = fullString + s
	genderStrings.append(fullString)

for dirName in os.listdir(cwd+'/Categories/orientation'):
	fullString = ''
	for filename in os.listdir(cwd+'/Categories/orientation/' + dirName):

		with open (cwd + '/Categories/orientation/'+ dirName + '/' + filename) as f: s= f.read()
		fullString = fullString + s
	orientationStrings.append(fullString)

for dirName in os.listdir(cwd+'/Categories/race'):
	fullString = ''
	for filename in os.listdir(cwd+'/Categories/race/' + dirName):

		with open (cwd + '/Categories/race/'+ dirName + '/' + filename) as f: s= f.read()
		fullString = fullString + s
	raceStrings.append(fullString)

# vectorize and convert gender strings into matrix

genderVect.fit(genderStrings)

genderStrings_dtm = genderVect.transform(genderStrings)

print(pd.DataFrame(genderStrings_dtm.toarray(), columns=genderVect.get_feature_names()))

# vectorize and convert orientation strings into matrix
orientationVect.fit(orientationStrings)

orientationStrings_dtm = orientationVect.transform(orientationStrings)

print(pd.DataFrame(orientationStrings_dtm.toarray(), columns=orientationVect.get_feature_names()))

# vectorize and convert race strings into matrix
raceVect.fit(raceStrings)

raceStrings_dtm = raceVect.transform(raceStrings)

print(pd.DataFrame(raceStrings_dtm.toarray(), columns=raceVect.get_feature_names()))

