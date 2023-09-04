document.getElementById("Photo").onclick = function(){
    document.getElementById("Title1").innerHTML = "This is the latest article";
    document.getElementById("BlogDiv").innerHTML += "<p> Here is the content of the blog </p>";
    document.getElementById("BlogDiv").innerHTML += "<img src='download.png width='100' height='100' class='image'>";
}