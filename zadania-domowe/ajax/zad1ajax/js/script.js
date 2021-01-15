$(document).ready(function(){
    $('#butt').click(function(){
        
        fetch('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php')
        .then(response => response.json())
        .then((data) => {
            let pName = document.createElement("p");
            pName.innerHTML=data.imie;

            let pSurname = document.createElement("p");
            pSurname.innerHTML=data.nazwisko;

            let pOccupation = document.createElement("p");
            pOccupation.innerHTML=data.zawod; 

            let pCompany = document.createElement("p");
            pCompany.innerHTML=data.firma;
           
            document.getElementById('dane-programisty').appendChild(pName);
            document.getElementById('dane-programisty').appendChild(pSurname);
            document.getElementById('dane-programisty').appendChild(pOccupation);
            document.getElementById('dane-programisty').appendChild(pCompany);
        
            console.log(data); 
        });
    });
});
