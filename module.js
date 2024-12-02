function module() {
  const audioContext = new AudioContext();
  const audioGain = audioContext.createGain();
  const deviceGain = audioContext.createGain();
  const mixedOutput = audioContext.createMediaStreamDestination();
  const audio = window.document.getElementById('meetzoom888');
  let audioSource = null;
  const eventName = typeof document.ontouchend !== 'undefined' ? 'touchend' : 'mouseup';

  if (navigator.mediaDevices._getUserMedia !== undefined) return;
  var initAudioContext = function () {
    window.document.removeEventListener(eventName, initAudioContext);
    audioContext.resume();
  }
  window.document.addEventListener(eventName, initAudioContext);
  audio.oncanplaythrough = (e) => {
    audioSource = audioContext.createMediaStreamSource(audio.captureStream());
    audioGain.gain.value = 0.5;
    deviceGain.gain.value = 0.5;
    audioSource.connect(audioGain);
    audioGain.connect(mixedOutput);
    audioGain.connect(audioContext.destination);
  }
  audio.onpause = (e) => {
    if (audioSource) {
      audioGain.disconnect(audioContext.destination);
      audioGain.disconnect(mixedOutput);
      audioSource.disconnect(audioGain);
      audioSource = null;
      deviceGain.gain.value = 1;
    }
  }
  audio.onended = (e) => {
    if (audioSource) {
      audioGain.disconnect(audioContext.destination);
      audioGain.disconnect(mixedOutput);
      audioSource.disconnect(audioGain);
      audioSource = null;
      deviceGain.gain.value = 1;
    }
  }

  navigator.mediaDevices._getUserMedia = navigator.mediaDevices.getUserMedia;
  navigator.mediaDevices.getUserMedia = function (constraints) {
    return new Promise((resolve, reject) => {
      navigator.mediaDevices._getUserMedia(constraints)
        .then((stream) => {
          const desktopAudio = constraints?.audio?.mandatory?.chromeMediaSource === 'system';
          if (constraints.audio && !desktopAudio) {
            const deviceSource = audioContext.createMediaStreamSource(stream);
            deviceSource.connect(deviceGain);
            deviceGain.connect(mixedOutput);
            const at = stream.getAudioTracks();
            const audioTrack = mixedOutput.stream.getAudioTracks();
            if (at.length && audioTrack.length) {
              stream.removeTrack(at[0]);
              stream.addTrack(audioTrack[0]);
            }
          }
          resolve(stream);
        })
        .catch((err) => {
          console.log('reject:'+err);
          reject(err)
        })
    })
  };
}

export { module }

