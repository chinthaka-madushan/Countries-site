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
    let txtSearchValue = document.getElementById("txtSearch").value;
    console.log(txtSearchValue);
}

function tblSearch(name){
    console.log(name);
}
