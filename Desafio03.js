const users =[
        {name: 'Guilherme' , tecnology : ["Javascript" , "HTML"]},
        {name: 'Daiane' , tecnology : ["CSS" , "HTML"]},
        {name: 'Guilherme' , tecnology : ["Python" , "PHP"]},

]

function showUsers (user) {
    for (let i = 0; i < user.length; i++){
    console.log (`${users[i].name} work with ${users[i].tecnology}`)

    }
    return
};

showUsers(users)