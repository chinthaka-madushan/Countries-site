document.getElementById("searchResalt").style.display = "none";
fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblAllCountries = document.getElementById("tblAllCountries");
    let number = 0;
    let tblBody = `<tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>flag</th>
                        <th>population</th>
                        <th>area</th>
                        <th>capital</th>
                        <th style="width: 120px;">continent</th>
                    </tr>`
    data.forEach(element => {
        number++;
        tblBody += `<tr>
                        <td>${number}</td>
                        <td>${element.name.common}</td>
                        <td><img src="${element.flags.png}" height="15px"></td>
                        <td>${element.population}</td>
                        <td>${element.area}</td>
                        <td>${element.capital}</td>
                        <td>${element.continents}</td>
                    </tr>`
    });
    tblAllCountries.innerHTML=tblBody;
})
function btnSearch(){
    document.getElementById("searchResalt").style.display = "block";
    let txtSearchValue = document.getElementById("txtSearch").value;
    fetch(`https://restcountries.com/v3.1/name/${txtSearchValue}`)
    .then(res=>res.json())
    .then(data=>{
         data.forEach(obj=>{
            document.getElementById("searchResalt").innerHTML = `<tr>
                                                    <th style="font-size: 30px;">${obj.name.official}</th>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img src="${obj.flags.png}" height="200px">
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td><h5>common name : ${obj.name.common}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>capital : ${obj.capital}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>region : ${obj.region}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>subregion : ${obj.subregion}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>latlng : ${obj.latlng}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>borders : ${obj.borders}</h5></td>
                                                </tr>
                                                <tr>
                                                <td><h5>population : ${obj.population}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>area : ${obj.area} km<sup>2</sup></h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>time zone : ${obj.timezones}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>continents : ${obj.continents}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><h5>start of week : ${obj.startOfWeek}</h5></td>
                                                </tr>
                                                <tr>
                                                    <td><a href="${obj.maps.googleMaps}"><h4><i class="bi bi-hand-index-thumb-fill"></i> Google map</h4></a></td>
                                                </tr>`

        })
    });
   
}


// function tblSearch(name){
//     console.log(name);
// }
