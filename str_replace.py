#!/usr/bin/env python
# -*- encoding: utf-8 -*-

inPath = "videos.js"
outPath = "videos.js2"
inFile = open(inPath,"r") 
outFile = open(outPath, "w")

def renomear(string1):
	string1 = string1.lower()
	string1 = string1.replace(" - ","-")
	string1 = string1.replace("á","a")
	string1 = string1.replace("é","e")
	string1 = string1.replace("í","i")
	string1 = string1.replace("ó","o")
	string1 = string1.replace("ú","u")
	string1 = string1.replace("ã","a")
	string1 = string1.replace("ç","c")
	string1 = string1.replace("  ","-")
	string1 = string1.replace(" ","-")
	string1 = string1.replace("õ","o")
	string1 = string1.replace("(","-")
	string1 = string1.replace(")","-")
	string1 = string1.replace('--','-')
	string1 = string1.replace("--videoconceito:-","        videoConceito: ")
	string1 = string1.replace('--videosinal:-',"        videoSinal: ")
	string1 = string1.replace("--videoconceito2:-","        videoConceito2: ")
	string1 = string1.replace('--videosinal2:-',"        videoSinal2: ")
	return string1

for line in inFile:
	if 'videoSinal' in line or 'videoConceito' in line:
		outFile.write(renomear(line))
	else:
		outFile.write(line)
outFile.close()
