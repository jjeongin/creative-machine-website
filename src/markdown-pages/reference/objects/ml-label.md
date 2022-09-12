---
slug: "/reference/objects/ml-label"
templateKey: "reference-page"
---

# MLLabel
Datatype for storing a label with its confidence score. An MLLabel contains a String label and a confidence score.

## Examples
```java
void setup() {
    // create an Image Classifier
    ImageClassifier classifier = new ImageClassifier(this, "MobileNet");
    // load input image
    PImage img = loadImage("data/bird.jpeg");
    // run the image classification
    MLLabel[] output = classifier.predict(img);
    // print the label with the highest confidence score
    println("Label: " + output[0].getLabel() + ", Confidence: " + output[0].getConfidence());
}
```

## Fields


## Methods
* ```getLabel()```: Returns ```String label``` that stores the label name of the object.
* ```getConfidence()```: Returns ```float confidence``` that stores the confidence score (from 0 to 1) of the object. As the confidence score is higher, the possibility of that object is labelled correclty is higher.
  
## Used By
[Image Classifier](../models/image-classifier)

[Sentiment Analyzer](../models/sentiment-analyzer)