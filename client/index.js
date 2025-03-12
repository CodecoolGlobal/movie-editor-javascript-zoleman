async function main() {
    const res = await fetch("/movies")
    const movies = await res.json();

    const moviesHtml = movies.map(movie => 
        `
        <tr>
            <td>${movie.title}</td>
            <td><button class="edit" data-title="${movie.title}">Edit</button></td>
            <td><button class="delete" data-title="${movie.title}">Delete</button></td>
        </tr>
        `
    ).join("");
    document.getElementById("root").innerHTML = `<table>${moviesHtml}</table>`;

    document.querySelectorAll(".edit").forEach(editBtn => {
        editBtn.addEventListener("click", (event) => {
            window.location.href = `edit.html?title=${encodeURIComponent(event.target.dataset.title)}`
        })
    })


}
















main();