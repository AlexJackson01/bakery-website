const brownies = [
  {
    title: "Box of 4",
    price: "£10.99",
    image_url: "./images/browniepic.png",
    link: {
      text: "Order Now",
      url: "https://checkout.square.site/buy/IHVYICNLPPSYKLJL5V3UL2S2"
    }
  },
  {
    title: "Box of 6",
    price: "£15.99",
    image_url: "./images/brownies1.png",
    link: {
      text: "Order Now",
      url: "https://checkout.square.site/buy/LIKXB6Y6PGPZNUWLPWYZOIFH"
    }
  }
];
function appendCard(brownies) {
  const brownieCards = document.getElementById("brownieCards");

  if (brownieCards) {
    const colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-md-6 col-lg-6");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mb-3");

    const imageTag = document.createElement("img");
    imageTag.setAttribute("class", "card-img-top");
    imageTag.setAttribute("alt", brownies.title);
    imageTag.setAttribute("src", brownies.image_url);
    cardDiv.appendChild(imageTag);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h6");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = brownies.title;
    cardBodyDiv.appendChild(cardTitle);

    const cardPrice = document.createElement("h6");
    cardPrice.setAttribute("class", "card-price");
    cardPrice.textContent = brownies.price;
    cardBodyDiv.appendChild(cardPrice);

    if (brownies.link) {
      const cardLink = document.createElement("a");
      cardLink.setAttribute("class", "btn btn-secondary");
      cardLink.setAttribute("href", brownies.link.url);
      cardLink.textContent = brownies.link.text;
      cardBodyDiv.appendChild(cardLink);
    }

    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    brownieCards.appendChild(colDiv);
  }
}

for (let i = 0; i < brownies.length; i++) {
  appendCard(brownies[i]);
}

const brownies2 = [
  {
    title: "Box of 4",
    price: "£10.99",
    image_url: "./images/IMG-20210107-WA0005.jpg"
  },
  {
    title: "Box of 6",
    price: "£15.99",
    image_url: "./images/brownies1.png"
  }
];
function appendCard2(brownies2) {
  const brownieCards2 = document.getElementById("brownieCards2");

  if (brownieCards2) {
    const colDiv = document.createElement("div");
    colDiv.setAttribute("class", "col-md-6 col-lg-6");

    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("class", "card mb-3");

    const imageTag = document.createElement("img");
    imageTag.setAttribute("class", "card-img-top");
    imageTag.setAttribute("alt", brownies2.title);
    imageTag.setAttribute("src", brownies2.image_url);
    cardDiv.appendChild(imageTag);

    const cardBodyDiv = document.createElement("div");
    cardBodyDiv.setAttribute("class", "card-body");

    const cardTitle = document.createElement("h6");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = brownies2.title;
    cardBodyDiv.appendChild(cardTitle);

    const cardPrice = document.createElement("h6");
    cardPrice.setAttribute("class", "card-price");
    cardPrice.textContent = brownies2.price;
    cardBodyDiv.appendChild(cardPrice);

    cardDiv.appendChild(cardBodyDiv);
    colDiv.appendChild(cardDiv);
    brownieCards2.appendChild(colDiv);
  }
}

for (let i = 0; i < brownies2.length; i++) {
  appendCard2(brownies2[i]);
}

// navbar

$(document).ready(function () {
  if (document.documentElement.clientWidth > 480) {
    $("#menu").addClass("navbar-fixed-top");
  } else {
    $("#menu").removeClass("navbar-fixed-top");
  }
});
