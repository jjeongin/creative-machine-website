---
slug: "/reference/objects/ml-object"
templateKey: "reference-page"
---

# MLObject
Datatype for storing detected objects for [Object Detector](../models/object-detector). An MLObject contains a String label, confidence score, and bounding box information (width, height, and the x and y coordinates of the upper left corner).

## Examples
```java
void setup() {
    // create an Object Detector
    ObjectDetector detector = new ObjectDetector(this, "coco_ssd");
    // load input image
    PImage img = loadImage("data/dog_bike_car.jpeg");
    // run the object detection
    MLObject[] output = detector.predict(img);
    // print image label and confidence of each object
    for (int i = 0; i < output.length; i++) {
        String label = output[i].getLabel();
        float confidence = output[i].getConfidence();
        println(label + " detected! (confidence: " + confidence + ")");
    }
}
```

## Methods
* ```getLabel()```: Returns ```String label``` that stores the label name of the object.
* ```getConfidence()```: Returns ```float confidence``` that stores the confidence score (from 0 to 1) of the object. As the confidence score is higher, the possibility of that object is labelled correclty is higher.
* ```getX()```: Returns ```float x```, the x coordinate of the upper left corner of the bounding box.
* ```getY()```: Returns ```float y```, the y coordinate of the upper left corner of the bounding box.
* ```getWidth()```: Returns ```float width```, the width of the bounding box.
* ```getHeight()```: Returns ```float height```, the height of the bounding box.
  
## Used By
[Object Detector](../models/object-detector)