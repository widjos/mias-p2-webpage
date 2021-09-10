import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  listProductos: any = [];
  listDesc: any=[];
  listAsc: any = [];
  listCategoria: any = [];

  constructor(private auth: AuthService,  private router: Router) { }

  ngOnInit(): void {

    this.loadProducts();
    this.loadAsc();
    this.loadDesc();
    this.loadCategoria();
  }


  loadProducts() : void {

     
    this.auth.getProductos().subscribe(result => {
      console.log("Productos cargados");
      this.listProductos = result;
    });
  }


  loadDesc(): void {

    this.auth.getProductDesc().subscribe(result => {
      this.listDesc = result;
    })

  };

  loadAsc(): void {
    this.auth.getProductAsc().subscribe(result => {
      this.listAsc = result;
    })

  }

  loadCategoria(): void {
    this.auth.getProductCategory().subscribe(result => {
      this.listCategoria = result;
    })
  }


  public infoProducto(idProduct: any): void{

    localStorage.setItem("id_producto", idProduct);

     this.router.navigateByUrl('producto-info');
  }


}
