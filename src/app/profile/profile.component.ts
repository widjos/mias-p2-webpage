import { Component, OnInit } from '@angular/core';
import { idText } from 'typescript';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { 
   
  }

  dataForm: any = {};
  userUpdate : any = {};
  
  ngOnInit(): void {

   // Llama a get data para mostrar los datos del perfil de usuario cada vez que se regresa el profile  
   this.getData(); 
   
}




   getData(): void {
    console.log("%c Get data  user", "color: green;" );

    if (localStorage.getItem('idUser')){
        var a = {
          "id": parseInt(localStorage.getItem('idUser'))
        };
        
        this.auth.getProfile(a).subscribe(result => { 
           console.log("hola");     
          this.dataForm = result;
          
              
        }, err =>{
          alert(err);
        });
       // alert("BIenvenido");
        console.log("%c Resultado= " , "color: blue;"); 
       

    }                                                                                                                                                                                                             
  }

  public getDate(value: string) : string {

    var val = value.split("T");
    return val[0];

  }


  public mailUpdate() : void {

    this.userUpdate.id  = localStorage.getItem('idUser');
    console.log("%c Se cambio el correo", "color: green;");
    this.auth.changeCorreo(this.userUpdate).subscribe(result => { console.log(result);});
 

  }
  
  public nameUpdate(): void {
    this.userUpdate.id = localStorage.getItem('idUser');
    console.log("CHanged name");
    this.auth.changeName(this.userUpdate).subscribe(result => {console.log(result);  });
    

  }

  public lastnameUpdate(): void {
    this.userUpdate.id = localStorage.getItem('idUser');
    console.log("Change lastname");
    this.auth.changeLastname(this.userUpdate).subscribe(result => {console.log(result); });
    
   
  }

  public passUpdate(): void {
    this.userUpdate.id = localStorage.getItem('idUser');
    console.log("Change pass");
    this.auth.changePass(this.userUpdate).subscribe(result => {console.log(result)});

  }




}
