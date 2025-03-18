async function womenList() {
  const response = await fetch(
    "https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/femmes-illustres-a-paris-portraits/records?limit=100&refine=tab_name%3A%22Artistes%22&refine=tab_name%3A%22Cheffes%22&refine=tab_name%3A%22Com%C3%A9diennes%22&refine=tab_name%3A%22Femmes%20de%20lettres%22&refine=tab_name%3A%22Politiques%22&refine=tab_name%3A%22Scientifiques%22&refine=tab_name%3A%22Sportives%22"
  );

  const data = await response.json();

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
      
      //urlOfPictures.setAttribute("src", results[0]."https://files.slack.com/files-tmb/TFLNG6MFU-F08J173S8VC-0f185969ca/tatiana_720.png" );
    //   if (nameIndex === "Tatiana et Katia Levha"){
    //     urlOfPictures = "https://files.slack.com/files-tmb/TFLNG6MFU-F08J173S8VC-0f185969ca/tatiana_720.png"
    //       };
    }
}
womenList();
