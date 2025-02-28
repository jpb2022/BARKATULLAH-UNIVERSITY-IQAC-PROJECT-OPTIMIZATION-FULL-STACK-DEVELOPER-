document.getElementById("year-select").addEventListener("change", function() {
    let year = this.value;
    let container = document.getElementById("pdf-container");
    if (year) {
        container.innerHTML = `<iframe src="pdfs/${year}.pdf" width="100%" height="600px"></iframe>`;
    } else {
        container.innerHTML = "<p>Select an academic year to view the calendar.</p>";
    }
});