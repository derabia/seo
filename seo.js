//1. Add Alt Tag To Images Automatically Function

// Add Alt Tag To Images Automatically Function
function addAltTagToImagesAutomatically(altPlaceholder = document.title) {
	for (i = 0; i < document.getElementsByTagName("img").length; i++) {
		if (
			typeof document.getElementsByTagName("img")[i].alt == typeof undefined ||
			document.getElementsByTagName("img")[i].alt == false ||
			document.getElementsByTagName("img")[i].alt.length == 0
		) {
			document .getElementsByTagName("img") [i]
				.setAttribute( "alt", altPlaceholder || document.getElementsByTagName("img")[i].src );
		}
	}
}

/*
#How TO Use
addAltTagToImagesAutomatically();
you can add alt placeholder as you want
addAltTagToImagesAutomatically("ALT-TEXT");

#EXAMPLE
https://codepen.io/AmrWebDeveloper/pen/abBmQxw
*/
