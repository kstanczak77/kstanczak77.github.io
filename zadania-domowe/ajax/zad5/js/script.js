fetch('https://reqres.in/api/users?page=2')
.then(res => res.json())
.then(data => {
    console.log(data.data);
    let body= document.body
 

   

    for (let user of data.data) {
        let listItem = $('<li></li>')   
        listItem.text(user.id+" "+user.email+" "+user.first_name+" "+user.last_name+" "+user.avatar)
        console.log(listItem)
        $('ul').append(listItem)
        
    };
    console.log(data);
});
    

