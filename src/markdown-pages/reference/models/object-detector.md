---
slug: "/reference/models/object-detector"
templateKey: "reference-page"
---

# Object Detector
Detect objects from a [PImage](https://processing.org/reference/PImage.html).

![alt text](./../../images/object_detector_demo.png)

## Quick Start
```java
// create an Object Detector
ObjectDetector detector = new ObjectDetector(this, "coco_ssd");

// load input image
PImage img = loadImage("data/dog_bike_car.jpeg");

// run object detection
MLObject[] output = detector.predict(img);
```

## Usage
### Initialize
```java
ObjectDetector detector = new ObjectDetector(this, modelName);
```
*Parameters*

- String modelName: (required) Model name of one of the built-in models. Available models are the followings:

- 📍 SSD Models (```openimages_ssd```, ```coco_ssd```, ```voc_ssd```)

- 📍 YOLO Models (```voc_yolo```, ```coco_yolo```)

You can select different models by specifying the model name when creating an object detector like this.
```java
ObjectDetector detector = new ObjectDetector(this, "openimages_ssd");
```

### Methods
### .predict(PImage image, String fileName)

Runs object detection on [PImage](https://processing.org/reference/PImage.html) and returns an array of [MLObject](../objects/ml-object). (optional) If fileName is provided, it also saves bounding box image with the specified filename.
```java
// load input image
PImage img = loadImage("data/dog_bike_car.jpeg");

// run the object detection only
MLObject[] output = detector.predict(img);

// run the object detection and save the bounding box image
MLObject[] output = detector.predict(img, "data/dog_bike_car_output.png");
```
*Parameters*
- PImage image: (required) Image to run object detection on.
- String fileName: (optional) File name to store the output image. Should be **.png** files only. Saved under the Processing sketch directory by default, specify the subdirectory name to save under an existing directory within the sketch directory.

*Returns*
- MLObject[]: List of [MLObject](../objects/ml-object).

## Examples
[ObjectDetectorExample](https://github.com/jjeongin/ml4processing/tree/master/examples/ObjectDetectorExample)

[ObjectDetectorVideoExample](https://github.com/jjeongin/ml4processing/tree/master/examples/ObjectDetectorVideoExample)
