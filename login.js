function envia(pag){
    document.form.action = '../IDW2018-Sanchez-Garay-Diagnostico/'+pag+'.html';
        document.form.submit();
}

function valida(){
    var usuario = document.getElementById('usuario');
    var pass = document.getElementById("password");
            
    if((usuario == "admin")||(pass == "admin")){
      enviar('bienvenida.html')
    }else{

    }
}
