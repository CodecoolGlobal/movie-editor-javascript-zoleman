

async function main() {
    const title = window.location.search.split("?title=")[1];

    const response = await fetch(`/movies/${title}`)
    const movie = await response.json();
    console.log(movie)

    const actorsHtml = movie.actors.map(actor =>
        `
        <div class="actor">
            <input type="text" value="${actor}"/>
            <button class="delete">Delete</button>
        </div>`
    ).join("")

    document.getElementById("root").innerHTML = `
    <div id="actors">
        <button class="add">Add</button>
        ${actorsHtml}
    </div>
    <button id="save">Save</button>
    `

    window.addEventListener("click", (event) => {
        if (event.target.classList.contains("delete")) {
            event.target.closest(".actor").remove();
        }
    })

    document.querySelector(".add").addEventListener("click", () => {
        document.querySelector("#actors").insertAdjacentHTML("beforeend", ` <div class="actor">
            <input type="text" value=""/>
            <button class="delete">Delete</button>
        </div>` )
    })

    document.querySelector("#save").addEventListener("click", async()=> {
      const actors = [...document.querySelectorAll(".actor > input")].map(inputElement => inputElement.value)
        console.log(actors)

        await fetch(`/movies/${title}`, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                actors
            })
        }) 
    })



}




main();