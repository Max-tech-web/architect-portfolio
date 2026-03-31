const translations = {
    en: {
        about_title: "About us",
        founded: "Founded in 2024",
        scope_title: "Scope of work includes",
        art_objects: "Art objects",
        public_buildings: "Residential houses",
        integrated_solutions: "Integrated solutions for residential districts",
    },

    ru: {
        about_title: "О нас",
        founded: "Основано в 2024",
        scope_title: "Область работы включает:",
        art_objects: "Арт-объекты",
        public_buildings: "Общественные здания",
        integrated_solutions: "Комплексные решения для жилых районов"
    }
}

function changeLanguage(lang) {

    const elements = document.querySelectorAll("[data-lang]")

    elements.forEach(element => {
        const key = element.getAttribute("data-lang")
        element.textContent = translations[lang][key]

    })
}