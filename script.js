
    function fetchData() {
    fetch('https://fakestoreapi.com/products')  .then(data => {
        console.log(data);
        // testiramo da li smo dobili odgovor na nas upit
        if (!data.ok) {
            throw Error('Error');
        }
        // odogovor se dobije u json formatu
        return data.json();
    }).then(objectData => {
             console.log(objectData[0].title );
    let tableData="";
    objectData.map((values)=>{
      tableData+=`  <tr>
      <th scope="row">${values.title}</th>
      <th scope="row">${values.price}</th>
      <th scope="row"><img src="${values.image} "></th>

    </tr>`;
 
                 } );
                 document.getElementById('table_body').innerHTML=tableData;
                 
                })
        

            }

            // poziv funkcije
            fetchData();
            