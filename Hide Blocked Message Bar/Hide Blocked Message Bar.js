/*-------------------------------------
//
// Discord Script by Stephen Chapman
// GitHub: http://github.com/dsasmblr
// Blog: http://dsasmblr.com/blog
//
-------------------------------------*/

// Description: This script hides the "blocked message" div.

/* -- SCRIPT START -- */

// Recursive IIFE (Immediately-Invoked Function Expression)
(function hideBlocked(){
	// Find all elements with class .message-group-blocked
	document.querySelectorAll('.message-group-blocked')
	
	// For each element found, apply an inline style that hides that element
	.forEach(div => div.setAttribute("style", "display: none;"));

	// Run again every half-second 
	setTimeout(hideBlocked,500);
})();