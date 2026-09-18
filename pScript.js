const totalPosts = document.getElementsByClassName("post-window");
document.getElementById("totalPosts").innerHTML = "<strong>" + totalPosts.length + "</strong>" + " projects";

document.getElementById("liked").style.filter = "filter: brightness(0) saturate(100%) invert(20%) sepia(95%) saturate(6924%) hue-rotate(360deg) brightness(110%) contrast(106%);";