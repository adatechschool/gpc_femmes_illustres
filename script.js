async function womenList() {
    const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/femmes-illustres-a-paris-portraits/records?limit=100");

    const data = await response.json();

    document.querySelector("#womenTitle").innerHTML = `<h1>Femmes illustres à Paris  ${data.results.length} - Portraits 🔥</h1`;


    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);

        const nameIndex = document.createElement("h2");
        nameIndex.innerHTML = data.results[i].name;


        const tabName = document.createElement("h3");
        tabName.innerHTML = data.results[i].tab_name;

        const address = document.createElement("h3");
        address.innerHTML = `Adresse : ${data.results[i].short_desc}`;

        const descriptionOne = document.createElement("h3");
        descriptionOne.innerHTML = data.results[i].desc1;

        const descriptionTwo = document.createElement("h3");
        descriptionTwo.innerHTML = data.results[i].desc2;

        const descriptionThree = document.createElement("h3");
        descriptionThree.innerHTML = data.results[i].desc3;

        const descriptionFour = document.createElement("h3");
        descriptionFour.innerHTML = data.results[i].desc4;

        const descriptionFive = document.createElement("h3");
        descriptionFive.innerHTML = data.results[i].desc5;

        const urlOfPictures = document.createElement('img');
        urlOfPictures.setAttribute('src', data.results[i].thumb_url);


        document.querySelector("#womenPortraits").appendChild(nameIndex);
        document.querySelector('#womenPortraits').appendChild(urlOfPictures)
        document.querySelector("#womenPortraits").appendChild(tabName);
        document.querySelector("#womenPortraits").appendChild(address);
        document.querySelector("#womenPortraits").appendChild(descriptionOne);
        document.querySelector("#womenPortraits").appendChild(descriptionTwo);
        document.querySelector("#womenPortraits").appendChild(descriptionThree);
        document.querySelector("#womenPortraits").appendChild(descriptionFour);
        document.querySelector("#womenPortraits").appendChild(descriptionFive);
    }
}
womenList();