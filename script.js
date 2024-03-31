document.getElementById("searchInput").addEventListener("keypress", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchForm").submit();
    }
});

console.log("This website made by Haseef Muhammed PC");