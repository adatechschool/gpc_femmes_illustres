async function womenList() {
  const response = await fetch(
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/femmes-illustres-a-paris-portraits/records?limit=100&refine=tab_name%3A%22Artistes%22&refine=tab_name%3A%22Cheffes%22&refine=tab_name%3A%22Com%C3%A9diennes%22&refine=tab_name%3A%22Femmes%20de%20lettres%22&refine=tab_name%3A%22Politiques%22&refine=tab_name%3A%22Scientifiques%22&refine=tab_name%3A%22Sportives%22"
  );

  const data = await response.json(); 


  // dictionnaire des images alternatives , un dictionnaire est une liste de (clé : valeur)
  const alternativeImagesDic = {
    "Tatiana et Katia Levha" : "https://www.epices-roellinger.com/media/rich-editor/sateepicesroellinger1-66599db449d7f.png" , 
    "Christelle Brua" : "https://resize.elle.fr/portrait/var/plain_site/storage/images/elle-a-table/les-dossiers-de-la-redaction/news-de-la-redaction/christelle-brua-premiere-femme-a-etre-elue-meilleure-patissiere-de-restaurant-du-monde-3730244/88648484-5-fre-FR/Christelle-Brua-premiere-femme-a-etre-elue-Meilleure-Patissiere-de-restaurant-du-monde.jpg" ,

  };
  document.querySelector("#womenTitle").innerHTML =
    `<h1>Femmes illustres à Paris  ${data.results.length} - Portraits 🔥</h1`;

  //console.log("liste filtrée", data.results.filter((result)=> result.tab_name != "77 Illustres Parisiennes"))
  // const results = data.results.filter((result)=> result.tab_name != "77 Illustres Parisiennes")

  const results = data.results;
  console.log(results);

  for (let i = 0; i < results.length; i++) {
    console.log(data.results[i]);

    const nameIndex = document.createElement("h2");
    nameIndex.innerHTML = results[i].name;

    const tabName = document.createElement("h3");
    tabName.innerHTML = results[i].tab_name;

    const address = document.createElement("h3");
    address.innerHTML = `Adresse : ${results[i].short_desc}`;

    const descriptionOne = document.createElement("h3");
    descriptionOne.innerHTML = results[i].desc1;

    const descriptionTwo = document.createElement("h3");
    descriptionTwo.innerHTML = results[i].desc2;

    const descriptionThree = document.createElement("h3");
    descriptionThree.innerHTML = results[i].desc3;

    const descriptionFour = document.createElement("h3");
    descriptionFour.innerHTML = results[i].desc4;

    const descriptionFive = document.createElement("h3");
    descriptionFive.innerHTML = results[i].desc5;

    const urlOfPictures = document.createElement("img");
    urlOfPictures.setAttribute("src", results[i].thumb_url);

    //urlOfPictures.setAttribute("src", results[0]."https://files.slack.com/files-tmb/TFLNG6MFU-F08J173S8VC-0f185969ca/tatiana_720.png");
    if (results[i].name === "Tatiana et Katia Levha") {
      urlOfPictures.setAttribute(
        "src",
        "https://scontent-cdg4-1.xx.fbcdn.net/v/t1.6435-9/53607294_2241335142624891_7025497508960796672_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_ohc=q2kNJilZtZ0Q7kNvgHk862F&_nc_oc=AdhXoZE8TBOxfxQWsrUmufyyVYXHrYeTwIRJbwliIIf8Q-fF6ZPmluR3b-cYI5-zSMc&_nc_zt=23&_nc_ht=scontent-cdg4-1.xx&_nc_gid=3NG3EHCcFo6R2fZcCKv9kQ&oh=00_AYHltQ1vNieWAHUqRBMCvx9SH9dxiUZCMTwKhDkSDlKPJA&oe=680117A7"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    } else if (results[i].name === "Christelle Brua") {
      urlOfPictures.setAttribute(
        "src",
        "https://www.viedeluxe.fr/wp-content/uploads/2023/02/Christelle-Brua-@NataliaKhoroshaieva.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }
    else if (results[i].name === "Roxana Maracineanu") {
      urlOfPictures.setAttribute(
        "src",
        "https://cacheimg.gsp.ro/autocrop/smp-images-production/gsp.ro/01082024/67e85de5-022d-4803-9d9b-70672e70edc0.jpg?width=900&height=0"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }
    else if (results[i].name === "Alessandra Montagne") {
      urlOfPictures.setAttribute(
        "src",
        "https://cdn.shopify.com/s/files/1/0796/9751/0688/files/Anne_Claire_HERAUD_4_600x600.jpg?v=1693330894"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }
    else if (results[i].name === "Eleonora Zuliani") {
      urlOfPictures.setAttribute(
        "src",
        "https://foodandsens.com/wp-content/uploads/2017/11/eleonora.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }
    else if (results[i].name === "Manon Fleury") {
      urlOfPictures.setAttribute(
        "src",
        "https://img.lemde.fr/2024/01/15/0/0/3319/4724/664/0/75/0/2aa1fe6_1705332752011-manon-fleury-a-terencebk-17-copie.jpg"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }
    else if (results[i].name === "Justine Piluso") {
      urlOfPictures.setAttribute(
        "src",
        "https://simoneetnelson.com/wp-content/uploads/2025/01/Justine-PILUSO-min.png"
      );
      urlOfPictures.style.width = "220px";
      urlOfPictures.style.height = "330";
    }

    document.querySelector("#womenPortraits").appendChild(nameIndex);
    document.querySelector("#womenPortraits").appendChild(urlOfPictures);
    document.querySelector("#womenPortraits").appendChild(tabName);
    document.querySelector("#womenPortraits").appendChild(address);
    document.querySelector("#womenPortraits").appendChild(descriptionOne);
    document.querySelector("#womenPortraits").appendChild(descriptionTwo);
    document.querySelector("#womenPortraits").appendChild(descriptionThree);
    document.querySelector("#womenPortraits").appendChild(descriptionFour);
    document.querySelector("#womenPortraits").appendChild(descriptionFive);

    // console.log(results[0].thumb_url);
  }
}
womenList();


// urlOfPictures.addEventListener("click", () => {


// })