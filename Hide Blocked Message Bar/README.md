# Delete Blocked Message Bar
This script contains a recursive function that watches for the blocked message bar (like pictured below) and hides it.

![ScreenShot](http://dsasmblr.com/github/img/discord-hide-blocked-messages-div.png)

**Instructions:**

NOTE: Unless you create a snippet or use some sort of extension to run the script, you'll have to do this each time you reload Discord.
1. With Discord open in your browser, hit the CTRL+SHIFT+I key to bring up the console.
2. Click the Console tab. You may see a warning; this is normal.
3. Copy and paste the following code to the right of the **>** as pictured and hit enter:

**Code:**

`(function hideBlocked(){document.querySelectorAll('div[class*="messageGroupBlocked"]').forEach(div => div.setAttribute("style", "display: none;"));setTimeout(hideBlocked,500);})();`

**Example:**

![ScreenShot](http://dsasmblr.com/github/img/discord-hide-blocked-messages-div-example.png)

I've also put the code with accompanying comments into a script file for those interested. =)
