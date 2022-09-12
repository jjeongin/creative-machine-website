---
slug: "/reference/objects/ml-pose"
templateKey: "reference-page"
---

# MLPose
Datatype for storing a pose detected by [Pose Detector](../models/pose-detector). MLPose contains an ArrayList of [MLKeyPoint](ml-keypoint). If the full pose is detected, MLPose contains 17 keypoints for each body joint following the order below: 
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
Each MLKeyPoint in MLPose contains **x, y coordinates** of the keypoint as well as the **confidence score** (from 0 to 1) of each detected point.

## Examples
```java
void setup() {
    // create a Pose Detector
    PoseDetector detector = new PoseDetector(this);
    // load image
    PImage img = loadImage("pose_soccer.png");
    // detect pose
    MLPose pose = detector.predict(img);
    println("There are " + pose.getKeyPoints().size() + " keypoints in the detected pose!");
}
void draw() {
    // draw dots on left and right shoulders
    stroke(27, 52, 122);
    strokeWeight(8);
    point(pose.getLeftShoulder().getX(), pose.getLeftShoulder().getY());
    point(pose.getRightShoulder().getX(), pose.getRightShoulder().getY());
    // connect the shoulders with a line
    stroke(33, 33, 33);
    strokeWeight(2);
    line(pose.getLeftShoulder().getX(), pose.getLeftShoulder().getY(), pose.getRightShoulder().getX(), pose.getRightShoulder().getY());
}
```

## Methods
* ```getKeyPoints()```: Returns ```List<MLKeyPoint> keyPoints```, an ArrayList of MLKeyPoint for each body joint. 
* ```getNose()```: Returns ```MLKeyPoint nose```, the position of a nose.
* ```getLeftEye()```: Returns ```MLKeyPoint leftEye```, the position of a left eye.
* ```getRightEye()```: Returns ```MLKeyPoint rightEye```, the position of a right eye.
* ```getLeftEar()```: Returns ```MLKeyPoint leftEar```, the position of a left ear.
* ```getRightEar()```: Returns ```MLKeyPoint rightEar```, the position of a right ear.
* ```getLeftShoulder()```: Returns ```MLKeyPoint leftShoulder```, the position of a left shoulder.
* ```getRightShoulder()```: Returns ```MLKeyPoint rightShoulder```, the position of a right shoulder.
* ```getLeftElbow()```: Returns ```MLKeyPoint leftElbow```, the position of a left elbow.
* ```getRightElbow()```: Returns ```MLKeyPoint rightElbow```, the position of a right elbow.
* ```getLeftWrist()```: Returns ```MLKeyPoint leftWrist```, the position of a left wrist.
* ```getRightWrist()```: Returns ```MLKeyPoint rightWrist```, the position of a right wrist.
* ```getLeftHip()```: Returns ```MLKeyPoint leftHip```, the position of a left hip.
* ```getRightHip()```: Returns ```MLKeyPoint rightHip```, the position of a right hip.
* ```getLeftKnee()```: Returns ```MLKeyPoint leftKnee```, the position of a left knee.
* ```getRightKnee()```: Returns ```MLKeyPoint RightKnee```, the position of a right knee.
* ```getLeftAnkle()```: Returns ```MLKeyPoint leftAnkle```, the position of a left ankle.
* ```getRightAnkle()```: Returns ```MLKeyPoint rightAnkle```, the position of a right ankle.
  
## Used By
[Pose Detector](../models/pose-detector)