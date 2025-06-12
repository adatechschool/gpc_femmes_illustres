import { categoryIcons } from "./arrayIcons.js";

let map = L.map("map", {
  center: [48.8566, 2.3522], // Paris (lat, lon)
  zoom: 12, // Zoom initial
  maxZoom: 17, // Zoom maximum autorisé
  minZoom: 11.3, // Zoom minimum autorisé (pour ne pas trop zoomer)
  maxBounds: [
    [48.815, 2.224], // Sud-Ouest de Paris
    [48.902, 2.469], // Nord-Est de Paris
  ], // zone Ile-de-France
  maxBoundsViscosity: 1.0, // Bloque le déplacement en dehors des limites
});

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Fonction de géocodage d'une adresse
async function geocodeAddress(address) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`
  );
  const dataMap = await response.json();

  if (dataMap.length > 0) {
    const lat = dataMap[0].lat;
    const lon = dataMap[0].lon;
    return { lat, lon };
  } else {
    console.log(`Aucune donnée trouvée pour l'adresse: ${address}`);
    return null;
  }
}

async function womenList() {
  const response = await fetch(
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/femmes-illustres-a-paris-portraits/records?limit=100&refine=tab_name%3A%22Artistes%22&refine=tab_name%3A%22Cheffes%22&refine=tab_name%3A%22Com%C3%A9diennes%22&refine=tab_name%3A%22Femmes%20de%20lettres%22&refine=tab_name%3A%22Politiques%22&refine=tab_name%3A%22Scientifiques%22&refine=tab_name%3A%22Sportives%22"
  );

  const data = await response.json();
  const results = data.results;
  console.log(results);

  for (let i = 0; i < results.length; i++) {
    console.log(data.results[i]);

    const card = document.createElement("div");
    card.classList.add("card");
    card.setAttribute("data-category", results[i].tab_name);

    const cardInner = document.createElement("div");
    cardInner.classList.add("card-inner");

    const cardFront = document.createElement("div");
    cardFront.classList.add("card-front");

    const cardBack = document.createElement("div");
    cardBack.classList.add("card-back");

    // la div des noms dans est .name-index
    const name = document.createElement("div");
    name.classList.add("name-index");
    const nameIndex = document.createElement("h2");
    nameIndex.innerHTML = results[i].name;
    name.appendChild(nameIndex);

    // la div des categories dans est .categorie
    const category = document.createElement("div");
    category.classList.add("categorie");

    const tabName = document.createElement("h3");
    tabName.innerHTML = results[i].tab_name;
    category.appendChild(tabName);

    // la div des photos dans est .women-pictures
    const pictures = document.createElement("div");
    pictures.classList.add("women-pictures");

    const urlOfPictures = document.createElement("img");
    urlOfPictures.setAttribute("src", results[i].thumb_url);
    pictures.appendChild(urlOfPictures);

    const p1 = document.createElement("p");
    p1.innerHTML = results[i].desc1;
    const p2 = document.createElement("p");
    p2.innerHTML = results[i].desc2;
    const p3 = document.createElement("p");
    p3.innerHTML = results[i].desc3;
    const p4 = document.createElement("p");
    p4.innerHTML = results[i].desc4;
    const p5 = document.createElement("p");
    p5.innerHTML = results[i].desc5;

    // la div des descriptions est de type class sous le nom de .desc-all
    const allDescriptions = document.createElement("div");
    allDescriptions.classList.add("desc-all");

    allDescriptions.append(p1, p2, p3, p4, p5);

    // la div des adress dans est .women-address
    const womenAddress = document.createElement("div");
    womenAddress.classList.add("women-address");
    const address = document.createElement("h3");
    address.innerHTML = `Adresse : ${results[i].short_desc}`;
    womenAddress.appendChild(address);

    if (results[i].name === "Tatiana et Katia Levha") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Tatiana_Katia_Levha.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Christelle Brua") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Christelle_Brua.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Roxana Maracineanu") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Roxana_Maracineanu.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Alessandra Montagne") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Alessandra_Montagne.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Eleonora Zuliani") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Eleonora_Zuliani.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Manon Fleury") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Manon_Fleury.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Justine Piluso") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Justine_PILUSO.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Hélène Darroze") {
      urlOfPictures.setAttribute(
        "src",
        "photos/Helene_Darroze.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Suzanne Lenglen") {
      console.log(
        "Adresse mise à jour pour Suzanne Lenglen : " + results[i].short_desc
      );
      urlOfPictures.setAttribute(
        "src",
        "photos/Suzanne_Lenglen.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }

    cardFront.append(name, pictures);
    cardBack.append(category, womenAddress, allDescriptions);

    cardInner.append(cardFront, cardBack);
    card.appendChild(cardInner);

    document.querySelector("#womenPortraits").appendChild(card);
    // document.querySelector("#womenPortraits").appendChild(geoPoint);

    card.addEventListener("click", () => {
      card.classList.toggle("flipped");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("flipped");
    });

    function addMarker(coords, address, name, categoryText) {
      const { lat, lon } = coords;
      const categoryIcon = categoryIcons[categoryText].icon;

      const marker = L.marker([lat, lon], { icon: categoryIcon }).addTo(map);
      const popupContent = `<b>Nom :</b> ${name}<br></b><b>Adresse :</b> ${address}`;
      marker.bindPopup(popupContent).openPopup();
      setTimeout(() => {
        marker.closePopup();
      }, 3000);

      marker.on("click", () => {
        marker.bindPopup(popupContent).openPopup();
        setTimeout(() => {
          marker.closePopup();
        }, 3000);
      });
  
    }
    card.addEventListener("click", async function () {
      let addressText = results[i].short_desc;
      const nameText = results[i].name;
      const categoryText = results[i].tab_name.toLowerCase();

      if (nameText === "Suzanne Lenglen") {
        addressText = "65, rue du Ranelagh, 75016 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Marie curie") {
        addressText = "1, rue Pierre et Marie Curie, 75005 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Flora Tristan") {
        addressText = "100bis rue du Bac, 75007 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Réjane") {
        addressText = "15, Rue Blanche, 75009 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Marguerite Durand") {
        addressText = "14 rue Saint-Georges,75009 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Émilie du Chatelet") {
        addressText = "2, Rue Saint-Louis en l'Ile, 75004 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "George Sand") {
        addressText = "46, Rue Meslay 75003, Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Françoise Barré-Sinoussi") {
        addressText = "25-28, Rue du Docteur Roux, 75015 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Louise Michel") {
        addressText = "Square Montmartre, 75018 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Germaine Tillion") {
        addressText = "Place du Panthéon, 75005 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Nicole-Reine Lepaute") {
        addressText = "5, rue de Vaugirard, 75006 Paris";
        results[i].short_desc = addressText;
      } else if (nameText === "Jacqueline de Romilly") {
        addressText = "12 rue Chernoviz, 75016 Paris";
        results[i].short_desc = addressText;
      }else if (nameText === "Nikki de St Phalle") {
        addressText = "Place Igor Stravinsky, 75003 paris";
        results[i].short_desc = addressText;
      }

      const coords = await geocodeAddress(addressText);

      if (coords) {
        addMarker(coords, addressText, nameText, categoryText); // Ajoute le marqueur sur la carte
      } else {
        console.log("Impossible de géocoder l'adresse");
      }
    });
  }
  setupFiltering();
}
womenList();

function setupFiltering() {
  // boutons id
  const artButton = document.getElementById("artButton");
  const chefButton = document.getElementById("chefButton");
  const comButton = document.getElementById("comButton");
  const letButton = document.getElementById("letButton");
  const polButton = document.getElementById("polButton");
  const sciButton = document.getElementById("sciButton");
  const spButton = document.getElementById("spButton");
  const allButton = document.getElementById("allButton");

  const buttons = [
    artButton,
    chefButton,
    comButton,
    letButton,
    polButton,
    sciButton,
    spButton,
    allButton,
  ];
  const cards = document.querySelectorAll(".card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const selectedCategory = button.getAttribute("data-category");

      // console.log("data-catégory");

      // activer désactiver les bouttons
      buttons.forEach((buttonItem) => buttonItem.classList.remove("active"));
      button.classList.add("active");

      // Filtrer les cartes
      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category"); // Utilise le data-category des cartes

        // carte en fonction de la catégorie
        if (selectedCategory === "all" || cardCategory === selectedCategory) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}
