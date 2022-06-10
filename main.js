function calculaentradas(){
  importe = 0;
  var cantidad = 0;
                                                      if(document.getElementById('cantidad163').value >0) {
      importe = importe + document.getElementById('cantidad163').value * 950;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad163').value);
  }
                                                      if(document.getElementById('cantidad87').value >0) {
      importe = importe + document.getElementById('cantidad87').value * 550;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad87').value);
  }
                                                      if(document.getElementById('cantidad83').value >0) {
      importe = importe + document.getElementById('cantidad83').value * 1300;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad83').value);
  }
                                                      if(document.getElementById('cantidad172').value >0) {
      importe = importe + document.getElementById('cantidad172').value * 800;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad172').value);
  }
                                                      if(document.getElementById('cantidad162').value >0) {
      importe = importe + document.getElementById('cantidad162').value * 550;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad162').value);
  }
                                                      if(document.getElementById('cantidad86').value >0) {
      importe = importe + document.getElementById('cantidad86').value * 400;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad86').value);
  }
                                                      if(document.getElementById('cantidad82').value >0) {
      importe = importe + document.getElementById('cantidad82').value * 800;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad82').value);
  }
                                                      if(document.getElementById('cantidad171').value >0) {
      importe = importe + document.getElementById('cantidad171').value * 650;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad171').value);
  }
                                                      if(document.getElementById('cantidad89').value >0) {
      importe = importe + document.getElementById('cantidad89').value * 2700;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad89').value);
  }
                                                      if(document.getElementById('cantidad91').value >0) {
      importe = importe + document.getElementById('cantidad91').value * 3200;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad91').value);
  }
                                                      if(document.getElementById('cantidad88').value >0) {
      importe = importe + document.getElementById('cantidad88').value * 1700;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad88').value);
  }
                                                      if(document.getElementById('cantidad90').value >0) {
      importe = importe + document.getElementById('cantidad90').value * 2100;
      cantidad = parseInt(cantidad) + parseInt(document.getElementById('cantidad90').value);
  }
                                                      document.getElementById('totalgeneral').innerHTML = "$ " + importe;
                                                      document.getElementById('importeTotal').innerHTML = " $ " + importe;
}

var i;
              function contadormas(iddeinput){ 
                  var cant = document.getElementById(iddeinput); 
                  if(cant.value>=1){
                      i = cant.value;
                  }else{
                      if(cant.value == "0"){i = 0;}
                  }
                  i++; 
                  cant.value = i;
              }
              function contadormenos(iddeinput){
                  var cant = document.getElementById(iddeinput); 
                  if(cant.value>1){
                      i = cant.value;
                      i--;
                      cant.value = i;
                  }else{
                      cant.value="0";
                  }
              }

function mensajepago(){
    if(document.forms["form"].username.value == "" || document.forms["form"].cardNumber.value == "" || document.forms["form"].month.value == "" || document.forms["form"].year.value == "" || document.forms["form"].cvv.value == ""){
        alert("ERROR")
    }else{
        alert("Su pago fue realizado")
    }
}
function mensajecontacto(){
    if(document.forms["contact-form"].name.value == "" || document.forms["contact-form"].surname.value == "" || document.forms["contact-form"].email.value == "" || document.forms["contact-form"].message.value == ""){
        alert("ERROR")
    }else{
        alert("Su mensaje fue recibido")
    }
}

            window.onload = selector;