fetch('https://reqres.in/api/users?page=2')
.then(res => res.json())
.then(data => {
    console.log(data.data);
    let body= document.body
 

   

    for (let user of data.data) {
        // let listItem = $('<li></li>')   
        // listItem.text(user.id+" "+user.email+" "+user.first_name+" "+user.last_name+" "+user.avatar)
        
        // console.log(listItem)
      
        // $('ul').append(listItem)
        
        let ul = document.getElementById("list");
        console.log(ul)
        let li = document.createElement("li")
        ul.appendChild(li);
        li.innerHTML = user.id+" "+"<a href='"+user.email+"' >"+" "+user.first_name+" "+user.last_name+"<img src='"+user.avatar+"' >" ;
        // li.innerText = user.id+" "+user.email+" "+user.first_name+" "+user.last_name+" "+" " ;
        // let a = document.createElement("a");
        // a.setAttribute("href", user.email);
        // li.appendChild(a);

        // let img = document.createElement("img");    
        // img.setAttribute("src", user.avatar);
        // li.appendChild(img);
    };
    console.log(data);
});
    

