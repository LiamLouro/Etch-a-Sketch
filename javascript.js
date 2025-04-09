function createSketchDivs() {
  const sketchContainer = document.querySelector(".divs-container")

  for(i = 1; i <= 256; i++) {
    const generatedDiv = document.createElement("div")
    generatedDiv.classList.add("generated-div")

    sketchContainer.appendChild(generatedDiv)

    generatedDiv.addEventListener("mouseover", () => generatedDiv.classList.add("painted-div"))
  }
  
}

createSketchDivs()

