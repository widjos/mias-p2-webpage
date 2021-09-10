import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../app/auth/auth.service';

interface Categoria {
  id_categoria: number;
  nombre: string;
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categoriaForm:  any = [];
  submitCategoria: any = {}; 
  updateCategoria : any;
  timer: any = null;

  constructor(private auth: AuthService) {

   this.timer =  setInterval(() => {
      this.showCategoria();
    }, 4000);
   }


  ngOnInit(): void {

   
    
  
  }

  ngOnDestroy():void {
    clearInterval(this.timer);
  }


  showCategoria(): void {
    this.auth.getCategoria().subscribe( res => {
      console.log(res);
      this.categoriaForm = res;
         });
  }


  addCategoria(): void {
    console.log("%c Added a new category", "color:blue;");
    this.auth.addCategoria(this.submitCategoria).subscribe(result => {console.log(result)});
    alert("Su categoria se ha agregado ");

  }


}
