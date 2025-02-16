document.getElementById("resumeBtn").addEventListener("click",function() {
    //creating a temporary link by adding a into my html
    const resumeLink = document.createElement("a");
    resumeLink.href = "Sumaiya Bakhach Resume SE.pdf"; //resume file name
    resumeLink.download = "Sumaiya Bakhach Resume SE.pdf"; //downloading it
    resumeLink.click();
});