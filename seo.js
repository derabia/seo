//1. Add Alt Tag To Images Automatically Function

// Add Alt Tag To Images Automatically Function
function _autoAlt(altPlaceholder = document.title) {
	for (let i = 0; i < document.getElementsByTagName("img").length; i++) {
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
