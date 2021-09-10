import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formData: any = {};
  verify : boolean = false;
  sendCredentials : boolean = false;
  

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {

  }

  loginUser(): void {
    
     this.auth.getCredentials(this.formData).subscribe(res => {
      console.log("%c Resultado", 'color: oprange;');
        this.sendCredentials = true;
        if(res[0] != undefined){
          console.log(res[0]);
          console.log("guardar en el local storage la inf y redireccionar al profile");
          this.verify = true;
              if(res[0].ID_USER === 1){ // Admin logger
                localStorage.setItem("idUser" , res[0].ID_USER);
                localStorage.setItem("name", res[0].NOMBRE);
                localStorage.setItem("correo", res[0].CORREO);
                console.log("%c Admin logueado", "color:blue;")
                console.log(localStorage.getItem('idUser'));
                this.router.navigateByUrl('profile');
              }else{ //user loger
                localStorage.setItem("idUser" , res[0].ID_USER);
                localStorage.setItem("name", res[0].NOMBRE);
                localStorage.setItem("correo", res[0].CORREO);
                console.log("%c User logueado", "color:blue;")
                this.router.navigateByUrl('profile');
                
              }
          
         }
          else{
            console.log("Credenciales denegadas ");
            this.verify = false;
        }
      
    });

    

  }

}
