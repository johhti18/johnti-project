function showPage(pageid) {
    let sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");
}

// back button
function goBack() {
    window.location.href = "index.html";
}