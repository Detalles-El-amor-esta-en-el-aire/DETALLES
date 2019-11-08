function validar(){
    var  nombre, apellido, correo, telefono, username, password;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    correo = document.getElementById("correo").value;
    telefono = document.getElementById("telefono").value;
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;
    
    if(nombre == "" || apellido == "" || correo == "" || telefono == "" || username == "" || password == ""){
        alert("Todos los campos esta en blanco");
        return false;
    }
    
    else if(nombre > 20 ){
        alert("El mombre es muy largo");
        return false;
    }
    
    else if(apellido > 30 ){
        alert("El apellido es muy largo");
        return false;
    }
    
    else if(correo > 30 ){
        alert("la direccion de correo es muy larga");
        return false;
    }

    else if(telefono > 15 ){
        alert("El numero es muy larga");
        return false;
    }
    
    else if(telefono < 9 ){
        alert("El numero es muy larga");
        return false;
    }
    
    else if(username > 10 ){
        alert("Todos los campos esta basio");
        return false;
    }
    
    else if(password > 8 ){
        alert("Todos los campos esta basio");
        return false;
    }
}