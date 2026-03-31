const translations = {
    en: {
        what_concept: "What is the concept",
    },

    ru: {
        what_concept: "Какой концепт"
    }
}

function translateText(lang) {
    const elements = document.querySelectorAll("[data-lang]")
    elements.forEach(function(element) {

        const key = element.getAttribute("data-lang")
        element.textContent = translations[lang][key]
        })
}

document.getElementById("ru-btn")
.addEventListener("click", (e) => {
    translateText("ru")
})

