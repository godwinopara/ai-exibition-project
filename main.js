const submitBtn = document.querySelector("button");
const inputValue = document.querySelector("input");
const productHeading = document.querySelector("#product-heading");
const productDescription = document.querySelector("#product-description");
const productImg = document.querySelector("#product-img");

const spinner = document.querySelector("#spinner");
const generatedText = document.querySelector("#generated-text");

generatedText.style.display = "none";
spinner.style.display = "none";

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  spinner.style.display = "flex";
  generatedText.style.display = "none";

  setTimeout(function () {
    spinner.style.display = "none";
    getData();
  }, 1000);
});

async function getData() {
  const response = await fetch("http://localhost:3000/products");
  const data = await response.json();
  let product;

  for (let d of data) {
    const userData = inputValue.value;
    if (userData.toLowerCase().includes(d.name.toLowerCase())) {
      product = d;
    }
  }
  generatedText.style.display = "grid";
  productHeading.textContent = product.name;
  productDescription.textContent = product.description;
  productImg.src = product.image_url;
  inputValue.value = "";
}

// Generate a copy for trophy lager in christmas period
