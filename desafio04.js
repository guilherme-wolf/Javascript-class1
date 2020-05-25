const users =[
    {name: 'Guilherme' , tecnology : ["Javascript" , "HTML"]},
    {name: 'Daiane' , tecnology : ["CSS" , "HTML"]},
    {name: 'Guilherme' , tecnology : ["Python" , "PHP"]},

];

function ChecaSeOUsuarioUsaCSS (users){
    for (let tecnologia of users.tecnology){
        if (tecnologia === "CSS" ) return true
        }
    return false

    }

    for ( i = 0; i < users.length; i++){
        const usuariosTrabalhaComCss = ChecaSeOUsuarioUsaCSS (users[i]);

        if (usuariosTrabalhaComCss){
            console.log(`O usuário ${users[i].name} trabalha com CSS`)
        }
    
    
    }