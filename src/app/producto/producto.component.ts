import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  formData: any = {};
  listCategoria: any = [];
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.getCategorias();
  }


  public getCategorias(): void {

    this.auth.getCategoria().subscribe(result=> {
      console.log("%c Se a cargado las categorias ", "color:green;");
      this.listCategoria = result; 
    });
  }


  public postProducto(): void {
    console.log(this.formData);

    this.auth.createProducto(this.formData).subscribe( result => { console.log(result)});
    alert("Se ha posteado su nuevo producto puede verlo en la tienda");
  }



}
