---
slug: "/reference/models/pose-detector"
templateKey: "reference-page"
---

# Pose Detector
Real-time pose detection on [PImage](https://processing.org/reference/PImage.html).

![alt text](./../../images/pose_detector_demo_full.png)

## Quick Start
```java
// create a Pose Detector
PoseDetector detector = new PoseDetector(this);

// load image
PImage img = loadImage("pose_soccer.png");

// detect pose
MLPose pose = detector.predict(img);
```

## Usage
### Initialize
```java
PoseDetector detector = new PoseDetector(this);
```

### Methods
### .predict(PImage image)

Run pose detection on [PImage](https://processing.org/reference/PImage.html) and returns an [MLPose](../objects/ml-pose) object.

```java
// load input image
PImage img = loadImage("pose_soccer.png");

// run pose detection
MLPose pose = detector.predict(img);

// plot each joint (keypoint) of the detected pose
for (int i = 0; i < pose.getKeyPoints().size(); i++) {
    MLKeyPoint keypoint = pose.getKeyPoints().get(i);
    point(keypoint.getX(), keypoint.getY());
}
```
*Parameters*
- PImage image: (required) Image to run pose detection on.

*Returns*
- [MLPose](../objects/ml-pose): MLPose contains an ArrayList of 17 [MLKeyPoint](../objects/ml-keypoint). Each keypoint represents the following body parts in order: 
```
1. nose
2. left eye
3. right eye
4. left ear
5. right ear
6. left shoulder
7. right shoulder
8. left elbow
9.  right elbow
10. left wrist
11. right wrist
12. left hip
13. right hip
14. left knee
15. right knee
16. left ankle
17. right ankle
```
Read more at [MLPose](../objects/ml-pose) for how to retrieve each body part easily.

## Examples
[PoseDetectorExample](https://github.com/jjeongin/ml4processing/tree/master/examples/PoseDetectorExample)

[PoseDetectorVideoExample](https://github.com/jjeongin/ml4processing/tree/master/examples/PoseDetectorVideoExample)