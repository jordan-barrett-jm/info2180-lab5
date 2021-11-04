window.onload = () => {
    var searchBtn = document.getElementById("lookup");
    searchBtn.onclick = countrySearch;
    console.log(searchBtn.onclick);
}

function countrySearch (e){
    var searchString = document.getElementById("country").value.length > 0 ? document.getElementById("country").value: "";
    
    console.log(country);
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