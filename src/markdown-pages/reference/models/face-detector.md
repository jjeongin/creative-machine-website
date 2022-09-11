---
slug: "/reference/models/face-detector"
templateKey: "reference-page"
---

# Face Detector
Detect faces and facial landmarks on [PImage](https://processing.org/reference/PImage.html).

![alt text](./../../images/face_detector_demo.png)

## Quick Start
```java
// create a Face Detection model
FaceDetector detector = new FaceDetector(this);

// load image
PImage img = loadImage("largest_selfie.jpeg");

// detect pose
MLFace[] faces = detector.predict(img);
```

## Usage
### Initialize
```java
FaceDetector detector = new FaceDetector(this);
```

### Model Description


### Methods
#### .predict(PImage image)

Detect faces and 5 facial landmarks from a [PImage](https://processing.org/reference/PImage.html) and returns an array of [MLFace](../objects/ml-pose.md) object.

```java
// load input image
PImage img = loadImage("largest_selfie.jpeg");

// run face detection
MLFace[] faces = detector.predict(img);

// plot each facial landmark (keypoint) of the detected faces
 for (int i = 0; i < faces.length; i++) {
    // get each face
    MLFace face = faces[i];
    // draw bounding box
    noFill();
    stroke(243, 176, 255);
    rect(face.getX(), face.getY(), face.getWidth(), face.getHeight());
    // draw landmarks
    noStroke();
    fill(255, 131, 110);
    for (int j = 0; j < face.getKeyPoints().size(); j++) {
        MLKeyPoint keyPoint = face.getKeyPoints().get(j);
        circle(keyPoint.getX(), keyPoint.getY(), 5);
    }
}
```
*Parameters*
- PImage image: (required) Image to run face detection on.

*Returns*
- MLFace[]: An array of [MLFace](../objects/ml-face.md). MLFace contains an ArrayList of 5 [MLKeyPoint](../objects/ml-keypoint.md). Each keypoint represents the following facial landmarks in order:
```
1. left eye
2. right eye
3. nose
4. left mouth
5. right mouth
```
Read more at [MLFace](../objects/ml-face.md) for how to retrieve each facial landmark easily.

## Examples
[FaceDetectorExample](https://github.com/jjeongin/ml4processing/tree/master/examples/FaceDetectorExample)

[FaceDetectorVideoExample](https://github.com/jjeongin/ml4processing/tree/master/examples/FaceDetectorVideoExample)