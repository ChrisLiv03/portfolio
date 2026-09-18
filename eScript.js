fetch("projects.html")
    .then(response => response.text())
    .then(htmlString => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlString, 'text/html');

        const totalPosts = doc.querySelectorAll('.post-window');
        document.getElementById("totalPosts").innerHTML = "<strong>" + totalPosts.length + "</strong>" + " projects";
    });

const likeTwo =document.getElementById("likeTwo");
likeTwo.addEventListener('click', function() {
    this.style.fill = 'red' ;
});

const likeOne =document.getElementById("likeOne");
likeOne.addEventListener('click', function() {
    this.style.fill = 'red' ;
});
