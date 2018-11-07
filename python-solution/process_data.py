import pandas as pd
import json
from pprint import pprint
import geocoder

# Read the json data
with open('../data/simplified_suppliers.json', "r") as read_file:
    data = json.load(read_file)


my_dict = {'company_name': [],
           'supplier_name': [],
           'supplier_address':[],
           'supplier_tier':[]
          }
for el in data['card']['value']:
    for rel in el['relationships']:
        try:
            my_dict['supplier_address'].append(rel['company']['address'][0]['value'])
            my_dict['company_name'].append(el['company']['name'])
            my_dict['supplier_name'].append(rel['company']['name'])
            my_dict['supplier_tier'].append(rel['value'])
        except:
            pass

df = pd.DataFrame(my_dict)

df2 = df.groupby('company_name').head(20).reset_index(drop=True)

def get_latitude(row):
    try:
        coordinates = geocoder.google(row['supplier_address'])
        print(coordinates.latlng)
        return coordinates.latlng
    except:
        return []



df2['supplier_latlon'] = df2.apply(get_latitude, axis=1)

df2.to_csv("with_latlon.csv", index=False, sep=',', encoding='utf-8')
