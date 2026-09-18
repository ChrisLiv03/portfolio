const totalPosts = document.getElementsByClassName("post-window");
document.getElementById("totalPosts").innerHTML = "<strong>" + totalPosts.length + "</strong>" + " projects";

const likeTwo =document.getElementById("likeTwo");
likeTwo.addEventListener('click', function() {
    this.style.fill = 'red' ;
});

const likeOne =document.getElementById("likeOne");
likeOne.addEventListener('click', function() {
    this.style.fill = 'red' ;
});