chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  const audio = document.getElementById('meetzoom888');
  if (!audio.paused) { audio.pause(); }
  audio.load();
  audio.src = chrome.runtime.getURL('bgm/'+request.message+'.mp3');
  document.getElementById('meetzoom888').play();
  sendResponse({});
  return true
});

async function load() {
  const audio = document.createElement('audio');
  audio.id = 'meetzoom888';
  audio.src = chrome.runtime.getURL('bgm/muon.mp3');
  document.body.appendChild(audio);
  //document.getElementById('meetzoom888').play();
  const src = chrome.runtime.getURL('main.js');
  const scr = document.createElement('script');
  scr.src = src;
  scr.type = "module";
  document.body.insertBefore(scr, document.body.firstChild);
}

window.addEventListener('load', async (evt) => {
  await load()
})
