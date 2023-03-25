---
slug: "/reference/objects/ml-face"
templateKey: "reference-page"
---

# MLFace
Datatype for storing a face detected by [Face Detector](../models/face-detector). MLFace contains an ArrayList of [MLKeyPoint](ml-keypoint). If a face is detected, MLFace contains 5 keypoints for each facial landmark following the order below: 
```
1. left eye
2. right eye
3. nose
4. left mouth
5. right mouth
```
Each MLKeyPoint in MLFace contains **x, y coordinates** of the keypoint.

## Examples
```java
void setup() {
    // create a Face Detector
    FaceDetector detector = new FaceDetector(this);
    // load image
    PImage img = loadImage("pose_soccer.png");
    // detect faces
    MLFace[] faces = detector.predict(img);
}
void draw() {
  for (int i = 0; i < faces.length; i++) {
    // get each face
    MLFace face = faces[i];
    // draw a bounding box
    noFill();
    stroke(240, 121, 81);
    rect(face.getX(), face.getY(), face.getWidth(), face.getHeight());
    // draw eyes and a nose
    noStroke();
    fill(250, 255, 112);
    circle(face.getLeftEye().getX(), face.getLeftEye().getY(), 5);
    circle(face.getRightEye().getX(), face.getRightEye().getY(), 5);
    circle(face.getNose().getX(), face.getNose().getY(), 5);
  }
}
```

## Methods
* ```getKeyPoints()```: Returns ```List<MLKeyPoint> keyPoints```, an ArrayList of MLKeyPoint for each facial landmark. 
* ```getLeftEye()```: Returns ```MLKeyPoint leftEye```, the position of a left eye.
* ```getRightEye()```: Returns ```MLKeyPoint rightEye```, the position of a right eye.
* ```getNose()```: Returns ```MLKeyPoint nose```, the position of a nose.
* ```getLeftMouth()```: Returns ```MLKeyPoint leftMouth```, the position of the left end of a mouth.
* ```getRightMouth()```: Returns ```MLKeyPoint leftMouth```, the position of the right end of a mouth.
  
## Used By
[Face Detector](../models/face-detector)