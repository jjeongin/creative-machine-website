---
slug: "/"
templateKey: "home-page"
intro:
    mainText: "Welcome to Creative Machine!"
    subText: "Get Creative with Machine Learning in Processing!"
examples:
- image: "./images/object_detector_demo.png"
  altText: "A picture of a dog sitting next to a bicycle with bounding boxes that have labels of each object"
  description: "Detect objects with bounding boxes"
- image: "./images/image_classifier_demo.png"
  altText: "A picture of a bird with its academic name and confidence score"
  description: "Image classificaiton of 00 different objects"
- image: "./images/pose_net_demo.png"
  altText: "A soccer player running with joints marked as circles"
  description: "Build interactive app with real-time pose estimation"
download:
    mainText: "Get Started with Creative Machine"
    subText: "Download Latest Version"
acknowledgements: 
    - processingLogo: "./images/processing-logo.svg"
    - gsocLogo: "./images/gsoc-logo.png"
---

## How it works
```java
// Initialize an object detector model
ObjectDetector detector = new ObjectDetector(this, "cocossd");

// Load an input image
PImage img = loadImage("dog_bike_car.jpeg");

// Run object detection
MLObject[] output = detector.detect(img);
```