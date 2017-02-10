function getAllUrlsOnPage() {
  return document.querySelectorAll('a.playLink');
}

function getRandomItem(nodeList) {
	return nodeList[Math.floor(Math.random()*nodeList.length)];
}

var listOfUrls = getAllUrlsOnPage();

// var randomUrl = getRandomItem(listOfUrls);

// window.location.href = randomUrl.href;

var a = document.querySelectorAll('.ptrack-content');
var el = getRandomItem(a);
var ui = el.dataset.uiTrackingContext;
var re = /%22video_id%22:(\d*),/i;
var watchURL = ui.match(re)[1];

window.location.href = `https://www.netflix.com/watch/${watchURL}`;