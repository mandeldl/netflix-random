function getAllNetflixVids() {
  return document.querySelectorAll('.ptrack-content');
}

function getRandomItem(nodeList) {
	return nodeList[Math.floor(Math.random()*nodeList.length)];
}

var listOfVids = getAllNetflixVids();

var selectedVid = getRandomItem(listOfVids);

var ui = selectedVid.dataset.uiTrackingContext;

//Regex for the video ID:
var re = /%22video_id%22:(\d*),/i;
var watchURL = ui.match(re)[1];

window.location.href = `https://www.netflix.com/watch/${watchURL}`;