---
slug: "/reference/tutorial"
templateKey: "reference-page"
---

## Tutorial: Get Started with Creative Machine

### Introduction
Creative Machine is a Machine Learning library for [Processing](https://processing.org/). This library aims to provide a user-friendly Machine Learning features for beginners in Machine Learning.

### Let's get started

After you downloaded Creative Machine in your Processing application following the [Download](../download) instruction, you should include this one line of code on the top of your sketch.
```java
import ml.*;
```

Now you are ready to play with different Machine Learning models in your Processing application!

Let's get started with a simple object detection model. Object detection is a Machine Learning task to detect objects from an image with their labels and bounding boxes that indicates their locations. You can create an object detector by loading one of the built-in models in Creative Machine:

```java
import ml.*; // load Creative Machine

void setup() {
    // create an Object Detector
    // You can choose different models by specifying different names.
    // * Available model list
    // - SSD Models: "openimages_ssd", "coco_ssd", "voc_ssd"
    // - YOLO Models: "coco_yolo", "voc_yolo"
    ObjectDetector detector = new ObjectDetector(this, "coco_ssd");
}

void draw() {

}
```

Now we need an input image that contains some objects. Here is a photo of a dog, bike, and car. You can download this image from [here](https://github.com/jjeongin/creative-machine/blob/master/examples/ObjectDetectorExample/data/dog_bike_car.jpeg) or use your own image.

Processing, by its default, detects images from data folder under your sketh directory. Create a new folder called ```data``` under your sketch folder and move your input image under the data folder. Then, you can load the image like the following code. (Visit [Processing documentation](https://processing.org/reference/loadImage_.html) for more detailed instruction about how to load an image.)
```java
PImage img = loadImage("dog_bike_car.jpeg");
```

We are now ready to run our object detector! Running the detector is as simple as one line of code:
```java
MLObject[] output = detector.detect(img);
```

All set! Now your whole code will look similar to this:

```java
import ml.*; // load Creative Machine

void setup() {
    // create an Object Detector
    // You can choose different models by specifying different names.
    // * Available model list
    // - SSD Models: "openimages_ssd", "coco_ssd", "voc_ssd"
    // - YOLO Models: "coco_yolo", "voc_yolo"
    ObjectDetector detector = new ObjectDetector(this, "coco_ssd");
    // load input image (this image should be under the "data" folder that is under your sketch folder)
    PImage img = loadImage("dog_bike_car.jpeg");
    // run object detection
    MLObject[] output = detector.detect(img);
}

void draw() {

}
```

This is it. Click the Run button on Processing and you have now successfully run the object detection in Processing. 

Now what? Visit our [Object Detector](models/object-detector) documentation to see what you can do with the output returned by the detector.