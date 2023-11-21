let video = document.querySelector(".video");
let volume = document.querySelector("#volume");
let volume_slider = document.querySelector("#slider");


window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to false");
	console.log("Loop is set to false");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// update volume info
	console.log("Current Volume: " + volume_slider.value);
	volume.innerHTML=volume_slider.value+"%"
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down video");
	video.playbackRate *= 0.9;
	console.log("Current Speed: " + video.playbackRate.toFixed(2));
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up video");
	video.playbackRate /= 0.9;
	console.log("Current Speed: " + video.playbackRate.toFixed(2));
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 10;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("Current Location: " + video.currentTime.toFixed(2));
});

document.querySelector("#mute").addEventListener("click", function() {
	let mute_button = document.querySelector("#mute");
	console.log("Mute Video");
	if (video.muted) {
		video.muted = false;
		mute_button.innerHTML = "Mute";
	} else {
		video.muted = true;
		mute_button.innerHTML = "Unmute";
	}
});

document.querySelector("#slider").addEventListener("change", function() {
	console.log("Changing volume");
	console.log(volume_slider.value);
	video.volume = volume_slider.value / 100;
	volume.innerHTML = volume_slider.value+"%"
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Vintage");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});

