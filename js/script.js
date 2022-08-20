const wrapper = document.querySelector(".wrapper"),
selectBtn = wrapper.querySelector(".select-btn"),
searchInp = wrapper.querySelector("input"),
options = wrapper.querySelector(".options");

let countries = ["Русский", "English", "中國人", "Español", "हिन्दी", "عرب", "বাংলা",
                 "Português", "日本", "Türk", "한국인", "Français", "Deutsch"];

function addCountry(selectedCountry) {
    options.innerHTML = "";
    countries.forEach(country => {
        let isSelected = country == selectedCountry ? "selected" : "";
        let li = `<li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
        options.insertAdjacentHTML("beforeend", li);
    });
}
addCountry();

function updateName(selectedLi) {
    addCountry(selectedLi.innerText);
    wrapper.classList.remove("active");
    selectBtn.firstElementChild.innerText = selectedLi.innerText;
}


selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));