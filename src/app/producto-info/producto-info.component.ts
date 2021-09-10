import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto-info',
  templateUrl: './producto-info.component.html',
  styleUrls: ['./producto-info.component.css']
})
export class ProductoInfoComponent implements OnInit {

  productInfo: any = [];
  comentarios: any = [];
  denunciaF:  any = {};
  comentarF: any = {};
  interval: any = null;


  constructor(private auth: AuthService, private router: Router) { }



  ngOnInit(): void {
    this.loadData();


   this.interval =  setInterval(() => {
      this.loadComentarios(); 
    }, 10000);
   


  
  }


  ngOnDestroy(): void {
    localStorage.removeItem("id_producto");
    clearInterval(this.interval);
  }



  loadData (): void {

    if(localStorage.getItem("id_producto")){
      var a = {
        "id": parseInt(localStorage.getItem('id_producto'))
      };
      this.auth.getInfoProduct(a).subscribe(result => {  this.productInfo = result});

      //Cargar tambien los comentarios 
    }
 }
 
 

 loadComentarios(): void {

  var a = {
    "id": parseInt(localStorage.getItem('id_producto'))
  };

  this.auth.loadProductCom(a).subscribe( result => { 
   this.comentarios = result;
  });

  console.log("Se han cagado sus comentarios");

}

enviarComentario(): void {
  console.log("Se envia un comentario");
  this.comentarF.id_user = localStorage.getItem("idUser");
  this.comentarF.id_producto = localStorage.getItem("id_producto");

  this.auth.enviarComentario(this.comentarF).subscribe( result => console.log(result));
  alert("Se envio su comentario");

}

enviarDenuncia(): void {
  console.log("Se envia una denuncia");
  this.denunciaF.id_user = localStorage.getItem("idUser");
  this.denunciaF.id_producto = localStorage.getItem("id_producto");
  this.auth.enviarDenuncia(this.denunciaF).subscribe( result => console.log(result));
  alert("Se envio su denuncia");

}

addCarrito(): void {
  alert("Se agrego a su carrito");
}

goChatRoom(): void {

  this.router.navigateByUrl('chat');

}





}
