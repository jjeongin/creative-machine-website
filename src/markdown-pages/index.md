---
slug: "/"
templateKey: "home-page"
intro:
    mainText: "Welcome to Creative Machine."
    subText: "Get Creative with Machine Learning in Processing!"
examples:
- image: "./images/object_detector_demo.png"
  altText: "A picture of a dog sitting next to a bicycle with bounding boxes that have labels of each object"
  description: "Detect different objects in an image with its name and location"
- image: "./images/face_detector_demo.png"
  altText: "A photo of the Friends cast with bounding boxes on their faces and circles on facial landmarks"
  description: "Real-time face detection on image or live video"
- image: "./images/pose_detector_demo.png"
  altText: "A soccer player running with joints marked as circles"
  description: "Pose detection with location of each body part"
download:
    mainText: "Get Started with Creative Machine 🤖"
    subText: "📖 How to Import Creative Machine in your Processing application"
acknowledgements: 
    - processingLogo: "./images/processing-logo.svg"
    - gsocLogo: "./images/gsoc-logo-big.png"
---

## How it works in code
```java
// Initialize an object detector model
ObjectDetector detector = new ObjectDetector(this, "coco_ssd");

// Load an input image
PImage img = loadImage("dog_bike_car.jpeg");

// Run object detection
MLObject[] output = detector.detect(img);
```