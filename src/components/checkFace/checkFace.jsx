import "p5/lib/addons/p5.dom";
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-backend-webgl';

export default function sketch (p, setCountPerson) {
  let capture = null;
  let cocossdModel = null;

  let cocoDrawings = [];


  function showCocoSSDResults(results) {
    cocoDrawings = results.filter(item => item.class === 'person');
    setTimeout(() => setCountPerson(cocoDrawings.length), 500);
  }

  p.setup = async function () {

    p.createCanvas(1280, 720);
    const constraints = {
      video: {
        mandatory: {
          minWidth: 1280,
          minHeight: 720
        },
        optional: [{ maxFrameRate: 40 }]
      },
      audio: false
    };

    capture = p.createCapture(constraints, () => {
    });


    capture.id("video_element");
    capture.size(1280, 720);
    capture.hide();

    cocoSsd.load().then((model) => {
      try {
        cocossdModel = model;
      } catch(e) {
        console.log(e);
      }

    }).catch((e) => {
      console.log("Error occured : ", e);
    });

  };

  p.draw = async () => {
    if (!capture) {
      return;
    }
    p.background(255);
    p.image(capture, 0, 0);
    p.fill(0,0,0,0);

    if(capture.loadedmetadata) {
      if (cocossdModel) {
        cocossdModel
          .detect(document.getElementById("video_element"))
          .then(showCocoSSDResults)
          .catch((e) => {
            console.log("Exception : ", e);
          });
      }
    }
  }
};
