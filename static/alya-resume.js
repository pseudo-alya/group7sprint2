//downloading resume when u press the button
document.getElementById("resumeBtn").addEventListener("click",function() {
    //creating a temporary link by adding a into my html
    const resumeLink = document.createElement("a");
    resumeLink.href = "Alya AlDiqqi Resume SE.pdf"; //resume file name
    resumeLink.download = "Alya AlDiqqi Resume SE.pdf"; //downloading it
    resumeLink.click();
});