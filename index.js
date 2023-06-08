// const play1 = document.getElementById("play1")
// const play2 = document.getElementById("play2")
// const play3 = document.getElementById("play3")
// const play4 = document.getElementById("play4")
// const play5 = document.getElementById("play5")

let songIndex = 0;
let audioEl = new Audio("songs/1.mp3");

// Selectors
let masterPlay = document.getElementById("master-play");
let progressBar = document.getElementById("progress-bar");
let gif = document.getElementById("gif");
let timeUpdate = document.getElementById("time-update");
let songItems = Array.from(document.getElementsByClassName("song-item"));

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

//progressBar attributes
progressBar.min = "0";
progressBar.max = "100";
progressBar.value = "0";

let songsArray = [
  {
    songName: "JAADUGAR - PARADOX",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
    songDuration: "3:12",
  },
  {
    songName: "BT Ho GAYI - PARADOX",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
    songDuration: "2:45",
  },
  {
    songName: "MILEYA NI - PARADOX",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
    songDuration: "3:02",
  },
  {
    songName: "RIHAAYI - PARADOX",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
    songDuration: "3:01",
  },
  {
    songName: "GLITCH - PARADOX",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
    songDuration: "3:26",
  },
];

songItems.forEach((element, i) => {
  //set cover of each songItems
  element.getElementsByTagName("img")[0].src = songsArray[i].coverPath;

  //set songName of each songItems
  element.getElementsByClassName("span-song-name")[0].innerHTML =
    songsArray[i].songName;

  //set songDuration of each songItems
  element.getElementsByClassName("span-song-duration")[0].innerHTML =
    songsArray[i].songDuration;
});

// console.log(progressBar.max ,progressBar.min)

masterPlay.addEventListener("click", () => {
  if (audioEl.paused || audioEl.currentTime <= 0) {
    audioEl.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = "1";
    }
  else {
    audioEl.pause();
    makeAllPlay();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = "0";
  }
});

audioEl.addEventListener("timeupdate", () => {
  progress = parseInt((audioEl.currentTime / audioEl.duration) * 100);
  progressBar.value = progress;
});
progressBar.addEventListener("change", () => {
  audioEl.currentTime = (progressBar.value * audioEl.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("span-song-play")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("span-song-play")).forEach(
  (element, i) => {
    element.addEventListener("click", (e) => {
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioEl.src = `songs/${songIndex}.mp3`;
      audioEl.currentTime = 0;
      audioEl.play();
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
      gif.style.opacity = "1";
      document.querySelector("#song-name-info").innerHTML =
        songsArray[i].songName;
    });
  }
);

nextBtn.addEventListener("click", () => {
  if (songIndex > 4) {
    songIndex = 1;
  } else {
    songIndex += 1;
  }
  audioEl.src = `songs/${songIndex}.mp3`;
  audioEl.currentTime = 0;
  audioEl.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = "1";
  document.querySelector("#song-name-info").innerText =
    songsArray[songIndex - 1].songName;
});

prevBtn.addEventListener("click", () => {
  if (songIndex < 2) {
    songIndex = 5;
  } else {
    songIndex -= 1;
  }
  audioEl.src = `songs/${songIndex}.mp3`;
  audioEl.currentTime = 0;
  audioEl.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  gif.style.opacity = "1";
  document.querySelector("#song-name-info").innerText =
    songsArray[songIndex - 1].songName;
});

//update seekbar
// timePer = ("0:" + parseInt(audioEl.currentTime))
// a = 0
// if(audioEl.currentTime > 9) {
//     a++
//     timePer = "1:" + a
// }
// console.log(a)
// // else if (timePer === "1:60") {
// //     timePer = "2:00"
// //     audioEl.currentTime = "0"
// // }
// timeUpdate.innerHTML = timePer
// console.log(timePer)

// Array.from(document.getElementsByClassName("span-song-play")).forEach((element) => {
//     if (element.play) {
//         element.classList.remove("fa-play-circle")
//         element.classList.add("fa-pause-circle")
//     }
// })
