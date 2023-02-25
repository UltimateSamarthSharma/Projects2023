from flask import Flask, render_template
from flask_cors import CORS,cross_origin
import csv

application = Flask(__name__)
app=application


csv_filename = 'pwskills_youtube_vid_details - Copy.csv'

details=[]

with open(csv_filename,'r') as data:
   for line in csv.reader(data):
        mydict = {"Index": line[0], "Title": line[1], "Views": line[2], "Time_since_posted": line[3]}
        details.append(mydict)


@app.route("/")
@cross_origin()
def home():
	return render_template('home2.html',details=details)

if __name__=="__main__":
    app.run(host='127.0.0.1', port=8000, debug=True)
	#app.run(debug=True)
