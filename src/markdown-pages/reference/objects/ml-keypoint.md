---
slug: "/reference/objects/ml-keypoint"
templateKey: "reference-page"
---

# MLKeyPoint
Datatype for storing keypoints with x and y coordinates. Both MLFace and MLPose contains an ArrayList of MLKeyPoint. Though MLKeyPoint in MLFace contains x and y coordinates of each facial landmark, while MLKeyPoint in MLPose contains both x and y coordinates and a confidence score of the keypoint.

## Examples
```java
void setup() {
    // create a Pose Detector
    PoseDetector detector = new PoseDetector(this);
    // load image
    PImage img = loadImage("pose_soccer.png");
    // detect pose
    MLPose pose = detector.predict(img);
}
void draw() {
    // plot each joint (keypoint) of the detected pose
    for (int i = 0; i < pose.getKeyPoints().size(); i++) {
        MLKeyPoint keypoint = pose.getKeyPoints().get(i); // retrieve each keypoint
        stroke(255, 202, 56);
        strokeWeight(10);
        point(keypoint.getX(), keypoint.getY()); // plot the keypoint
        fill(142, 245, 132);
        textSize(10);
        text(keypoint.getConfidence(), keypoint.getX()-10, keypoint.getY()-10); // display confidence score above each keypoint
    }
}
```

## Methods
* ```getX()```: Returns ```float x```, the x coordinate of the keypoint.
* ```getY()```: Returns ```float y```, the y coordinate of the keypoint.
* ```getConfidence()```: (only for MLKeyPoint in **MLPose**) Returns ```float confidence``` that stores the confidence score (from 0 to 1) of the keypoint.

## Used By
[Face Detector](../models/face-detector.md)

[Pose Detector](../models/pose-detector.md)