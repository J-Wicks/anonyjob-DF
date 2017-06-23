import sys, json

# simple JSON echo script
for line in sys.stdin:
    result = json.loads(line)

for thing in result:
    print(json.dumps(thing))
