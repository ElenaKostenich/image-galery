const inputSearch = document.querySelector(".search__input");
const galeryImages = document.querySelector(".galery");
const iconSearch = document.querySelector(".search__img");

let resultValue;
getData("all");

inputSearch.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    event.preventDefault();
    galeryImages.innerHTML = "";
    resultValue = inputSearch.value;
    getData(resultValue);
  }
});

iconSearch.addEventListener("click", (event) => {
  event.preventDefault();
  galeryImages.innerHTML = "";
  resultValue = inputSearch.value;
  getData(resultValue);
});

async function getData(resultValue) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${resultValue}&per_page=30&client_id=XZygDCSCWp_2b7aeFgnxjaERQ7wPygNDzH_6TrYbRM0`
  );
  let data = await res.json();
  data = data.results;
  data.map((el) => showData(el));
}

function showData(dataImage) {
  const img = document.createElement("div");
  img.classList.add("galery__img");
  img.style.backgroundImage = "url(" + dataImage.urls.regular + ")";
  galeryImages.appendChild(img);
}
