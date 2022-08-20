---
slug: "/reference/tutorial"
templateKey: "reference-page"
---

## Tutorial: Get Started with Creative Machine

### Introduction
Creative Machine is a ~~. 

After you downloaded and moved it under the **Processing libraries** directory following this [Download](../download.md) instruction, you can easily load Creative Machine in your Processing sketch by including one line of code on the top of your sketch.
```java
import ml.*;
```

You are all set! Now you are ready to play with different Machine Learning models in your Processing application.

Let's get started with a simple object detection model. Object detection is ~~. You can simply create an object detector in your Processing sketch by loading one of the built-in models:

```java
import ml.*; // load Creative Machine

void setup() {
    // create an Object Detector
    // You can also choose different models by specifying different names!
    // available models: ["openimages_ssd", "cocossd", or "yolo"]
    ObjectDetector detector = new ObjectDetector(this, "cocossd");
}

void draw() {

}
```

Now we need an input image that contains some objects. Here is a photo of ~~. You can also download this image from [here]() or use your own image.

Processing in default detects images from data folder 

```java
// load input image (this image should be under the "data" folder )
PImage img = loadImage("dog_bike_car.jpeg");

// run object detection
MLObject[] output = detector.detect(img);
```