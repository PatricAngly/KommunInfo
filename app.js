const kommunerList = document.getElementById('kommuner');
const searchBar = document.getElementById('searchBar');
let svKommuner = [];


/* searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredKommuner = svKommuner.Kommuner.filter((Kommuner) => {
        return (
            Kommuner.Kommun.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredKommuner);
    displayData(filteredKommuner);
}); */



async function loadData() {
    const res = await fetch('DB/kommuner.json');
    const svKommuner = await res.json();
    displayData(svKommuner.Kommuner);
    console.log(svKommuner.Kommuner);

};


async function displayData(kommun) {
    const htmlString = kommun
        .map((Kommuner) => {
            return `
            <li class="wide">
            <h2>${Kommuner.Kommun}</h2>
            <div class="container-info">
            <div>
            <a href = "tel: ${Kommuner["Telefon"]}">Ring oss på ${Kommuner.Telefon}</a>
            </div>
            <div>
            <a href = "mailto: ${Kommuner["E-post"]}">Sicka mail till oss</a>
            </div>
            </div>
            </li>
        `;
        })
        .join('');
    kommunerList.innerHTML = htmlString;
};
loadData();