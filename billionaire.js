const btnIndustry = document.getElementById("industry");
const tableSection = document.getElementById("tableSection");
const headingTag = document.getElementById("headingTag");
const searchField = document.getElementById("searchField");
const cardDiv = document.getElementById("cardDiv");
const loading = document.getElementById("loading");
const loading2 = document.getElementById("loading2");
const btnMoreDiv = document.getElementById("btnMoreDiv");
const btnMoreLoad = document.getElementById("btnMoreLoad");

// Richest by industry button
btnIndustry.addEventListener("click", function () {
  loading2.classList.add("hidden");
  tableSection.classList.add("hidden");
  headingTag.classList.remove("hidden");
  loading.classList.remove("hidden");
  const url =
    "https://forbes400.onrender.com/api/forbes400/industries/technology?limit=9";
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
});

// Load more button
btnMoreLoad.addEventListener("click", function () {
  btnMoreDiv.classList.add("hidden");
  loading2.classList.remove("hidden");
  const url =
    "https://forbes400.onrender.com/api/forbes400/industries/technology";
  fetch(url)
    .then((response) => response.json())
    .then((data) => showData(data));
});

const showData = (data) => {
  cardDiv.innerText = "";
  data.forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("billionaire-card");
    div.innerHTML = `
    <h2 style="text-shadow: 5px 5px 10px #D9D9D9;" class="text-center text-[#D9D9D9] font-inknut mt-2 mb-4 "> ${
      data.personName
    }</h2>
 <div class="flex flex-row gap-2   ">
              <div class="basis-2/5  ">
              <figure>
                <img  src="${
                  data.squareImage
                    ? data.squareImage
                    : "images/Image_not_available.png"
                }" alt="" >
                <figcaption> <span class="text-[#D9D9D9]">source:</span> <span class="text-[#D9D9D9] opacity-75 text-sm">${
                  data.source
                }</span </figcaption>
              </figure>
              </div>
              <div class=" basis-3/5  text-left border-l-2 mb-4 ps-2">
<p class=""><span class="text-[#D9D9D9]">Citizenship:</span> <span class="text-[#D9D9D9] opacity-75  text-sm">${
      data.countryOfCitizenship
    }</span></p>
<p class=""><span class="text-[#D9D9D9]">State:</span> <span class="text-[#D9D9D9] opacity-75  text-sm">${
      data.state
    }</span></p>
<p class=""><span class="text-[#D9D9D9]">City:</span> <span class="text-[#D9D9D9] opacity-75  text-sm">${
      data.city
    }</span></p>
<p class=""><span class="text-[#D9D9D9]">City:</span> <span class="text-[#D9D9D9] opacity-75  text-sm">${
      data.city
    }</span></p>
<p class=""><span class="text-[#D9D9D9]">City:</span> <span class="text-[#D9D9D9] opacity-75  text-sm">${
      data.city
    }</span></p>


</div>
</div>
    `;
    cardDiv.appendChild(div);

    loading.classList.add("hidden");
    btnMoreDiv.classList.remove("hidden");
    loading2.classList.add("hidden");
  });
};
