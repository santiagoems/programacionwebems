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
                                                                                                          verhorarios(cantidad,0);
  
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

            window.onload = selector;