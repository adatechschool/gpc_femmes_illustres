async function womenList(){
    const response = await fetch("https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/femmes-illustres-a-paris-portraits/records?limit=100");

    const data = await response.json();

    document.querySelector("#womenTitle").innerHTML = `<h1>Femmes illustres à Paris  ${data.results.length} - Portraits 🔥</h1`;

   
   
    for (let i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);


        const nameIndex = document.createElement("h2");
        nameIndex.innerHTML = data.results[i].name;

        const tabName = document.createElement("h3");
        tabName.innerHTML = data.results[i].tab_name;
        


        document.querySelector("#womenPortraits").appendChild(nameIndex);
        document.querySelector("#womenPortraits").appendChild(tabName);

  

    }

}

womenList();