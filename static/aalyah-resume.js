
document.getElementById("resumeBtn").addEventListener("click",function() {
    //creating a temporary link by adding a into my html
    const resumeLink = document.createElement("a");
    resumeLink.href = "Aalyah Al-Ali Resume SE.pdf"; //resume file name
    resumeLink.download = "Aalyah Al-Ali Resume SE.pdf"; //downloading it
    resumeLink.click();
});