window.onload = () => {
    var searchBtn = document.getElementById("lookup-country");
    searchBtn.onclick = countrySearch;
    var searchBtn2 = document.getElementById("lookup-cities");
    searchBtn2.onclick = citiesSearch;
}

function countrySearch (e){
    var searchString = document.getElementById("country").value.length > 0 ? document.getElementById("country").value: "";
    var req = new Request('world.php');
    searchString = searchString.replaceAll(">","").replaceAll("<", "") ;
    req = new Request(`world.php?country=${searchString}`);
    const myInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
        };
    fetch(req, myInit).then( res => {
        res.text().then(data => {
            resDiv = document.getElementById("result");
            resDiv.innerHTML = data;
        });
    });
}

function citiesSearch (e){
    var searchString = document.getElementById("country").value.length > 0 ? document.getElementById("country").value: "";
    var req = new Request('world.php');
    searchString = searchString.replaceAll(">","").replaceAll("<", "") ;
    req = new Request(`world.php?country=${searchString}&context=cities`);
    const myInit = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
        };
    fetch(req, myInit).then( res => {
        res.text().then(data => {
            resDiv = document.getElementById("result");
            resDiv.innerHTML = data;
        });
    });
}