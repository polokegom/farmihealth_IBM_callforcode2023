import cv2
import numpy as np
import matplotlib.pyplot as plt
import time
import os



labelsPath = 'obj.names'
LABELS = open(labelsPath).read().strip().split("\n")


weightsPath = 'crop_weed_detection.weights'
configPath = 'crop_weed.cfg'


np.random.seed(100)
COLORS = np.random.randint(0, 255, size=(len(LABELS), 3),dtype="uint8")
net = cv2.dnn.readNetFromDarknet(configPath, weightsPath)

img = cv2.imread('plant11.jpeg')
(H, W) = img.shape[:2]

confi = 0.5
thresh = 0.5
ln = net.getLayerNames()
unconnected_layers = net.getUnconnectedOutLayers()
ln = [ln[i - 1] for i in unconnected_layers]

blob = cv2.dnn.blobFromImage(image, 1 / 255.0, (512, 512),swapRB=True, crop=False)
net.setInput(blob)
start = time.time()
layerOutputs = net.forward(ln)
end = time.time()
boxes = []
confidences = []
classIDs = []


for output in layerOutputs:
	#loop over each of the detections
	for detection in output:
		scores = detection[5:]
		classID = np.argmax(scores)
		confidence = scores[classID]


		if confidence > confi:

			box = detection[0:4] * np.array([W, H, W, H])
			(centerX, centerY, width, height) = box.astype("int")


			x = int(centerX - (width / 2))
			y = int(centerY - (height / 2))

	
			boxes.append([x, y, int(width), int(height)])
			confidences.append(float(confidence))
			classIDs.append(classID)


idxs = cv2.dnn.NMSBoxes(boxes, confidences, confi, thresh)


if len(idxs) > 0:

	for i in idxs.flatten():

		(x, y) = (boxes[i][0], boxes[i][1])
		(w, h) = (boxes[i][2], boxes[i][3])

		#draw a bounding box rectangle and label on the image
		color = [int(c) for c in COLORS[classIDs[i]]]
		cv2.rectangle(image, (x, y), (x + w, y + h), color, 2)
		

		cv2.putText(image, text, (x, y - 5), cv2.FONT_HERSHEY_SIMPLEX,0.5, color, 2)
det = cv2.cvtColor(image,cv2.COLOR_BGR2RGB)
plt.figure(figsize=(12,8))
plt.imshow(det)

det = cv2.cvtColor(det,cv2.COLOR_RGB2BGR)
cv2.imwrite('frameResult.jpeg',det)
