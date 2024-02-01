import React, { useState, useEffect } from 'react';
import * as faceapi from 'face-api.js';



const LoginForm = () => {
  const [isFaceAuthenticated, setIsFaceAuthenticated] = useState(false);

  const loadModelsAndStart = async () => {
    await Promise.all([
      faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
      faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
      faceapi.nets.faceRecognitionNet.loadFromUri('/models')
    ]);
    handleFaceAuthentication()
  };

  useEffect(() => {
    loadModelsAndStart();
  }, []);

  const handleFaceAuthentication = async () => {
    const video = document.getElementById('video');
    const canvas = document.getElementById('canvas');

    if (navigator.mediaDevices.getUserMedia) {

      await navigator.mediaDevices.getUserMedia({ video: true })
        .then(async (stream) => {
          video.srcObject = stream;
          await video.play();
        })
        .catch((error) => console.error(error));
    }

    const labeledFaceDescriptors = await loadLabeledFaceDescriptors2();
    const faceMatcher = new faceapi.FaceMatcher(labeledFaceDescriptors);

    setInterval(async () => {
    const detections = await faceapi.detectAllFaces(video)
      .withFaceLandmarks()
      .withFaceDescriptors();


    const resizedDetections = faceapi.resizeResults(detections, video);

    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
    faceapi.draw.drawDetections(canvas, resizedDetections);

    if (resizedDetections.length > 1) {
      return setIsFaceAuthenticated("Multiple Face Detected");
    }

    if (resizedDetections.length == 0) {
      return setIsFaceAuthenticated("Face is not visiable");
    }

    const match = faceMatcher.findBestMatch(resizedDetections[0].descriptor)
    const similarity = (1 - match.distance) * 100;

    if (similarity > 60) {
      setIsFaceAuthenticated(true);
    } else {
      setIsFaceAuthenticated(false);
    }
  },1000)
  };

  const loadLabeledFaceDescriptors = async () => {
    const imgUrl = '/tarun.svg';
    const response = await fetch(imgUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const img = await faceapi.bufferToImage(blob);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    return [new faceapi.LabeledFaceDescriptors('aman', [detections.descriptor])];
  };

  const loadLabeledFaceDescriptors2 = async () => {
    const imgUrl = '/testImg2.jpg';
    const response = await fetch(imgUrl);

    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status} ${response.statusText}`);
    }

    const blob = await response.blob();
    const img = await faceapi.bufferToImage(blob);
    const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
    return [new faceapi.LabeledFaceDescriptors('aman', [detections.descriptor])];
  };


  return (
    <div>
      <video id="video" width="720" height="560" />
      <canvas  id="canvas" width="720" height="560" />
      <h1>{isFaceAuthenticated}</h1>
      {isFaceAuthenticated == true ? (
        <>
          <h1>Login Successful</h1>
          {/* <button onClick={() => setIsFaceAuthenticated(false)}>Reset</button> */}
        </>
      ) : (
        <h1>Login Unsuccessful</h1>
      )}
    </div>
  );
};

export default LoginForm;
