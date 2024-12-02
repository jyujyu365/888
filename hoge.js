document.addEventListener("DOMContentLoaded", function(){
    var hkc = document.getElementById("hkc");
    hkc.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnhkc = chrome.tabs.sendMessage(tabs[0].id, { message : "hkc" });
        rtnhkc.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/hkc.mp3'); audio.play(); });
      });
    });
    var pachi = document.getElementById("pachi");
    pachi.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnpachi = chrome.tabs.sendMessage(tabs[0].id, { message : "pachi" });
        rtnpachi.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/pachi.mp3'); audio.play(); });
      });
    });
    var baku = document.getElementById("baku");
    baku.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnbaku = chrome.tabs.sendMessage(tabs[0].id, { message : "baku" });
        rtnbaku.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/baku.mp3'); audio.play(); });
      });
    });
    var chime = document.getElementById("chime");
    chime.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnchime = chrome.tabs.sendMessage(tabs[0].id, { message : "chime" });
        rtnchime.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/chime.mp3'); audio.play(); });
      });
    });
    var nhk = document.getElementById("nhk");
    nhk.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnnhk = chrome.tabs.sendMessage(tabs[0].id, { message : "fami" });
        rtnnhk.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/fami.mp3'); audio.play(); });
      });
    });
    var tettre = document.getElementById("tettre");
    tettre.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtntettre = chrome.tabs.sendMessage(tabs[0].id, { message : "tettre" });
        rtntettre.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/tettre.mp3'); audio.play(); });
      });
    });
    var fanfare = document.getElementById("fanfare");
    fanfare.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnfanfare = chrome.tabs.sendMessage(tabs[0].id, { message : "fanfare" });
        rtnfanfare.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/fanfare.mp3'); audio.play(); });
      });
    });
    var fuga = document.getElementById("fuga");
    fuga.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnfuga = chrome.tabs.sendMessage(tabs[0].id, { message : "fuga" });
        rtnfuga.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/fuga.mp3'); audio.play(); });
      });
    });
    var hotaru = document.getElementById("hotaru");
    hotaru.addEventListener("click", function(){
      chrome.tabs.query({active : true}, (tabs) => {  
        let rtnhotaru = chrome.tabs.sendMessage(tabs[0].id, { message : "hotaru" });
        rtnhotaru.then((r)=> {}).catch((e)=> { const audio = new Audio('bgm/hotaru.mp3'); audio.play(); });
      });
    });
});