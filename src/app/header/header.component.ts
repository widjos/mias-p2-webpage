import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth: AuthService, private router: Router) { }
   
  user : string;

  ngOnInit(): void {

    this.user = localStorage.getItem('idUser');
    console.log("valuer " ,this.user);
  }

  logout(): void {

    localStorage.clear();
    this.router.navigate(['/auth/login']);

  }

  public isAuth(): boolean {
    if(localStorage.getItem('idUser')){
      return true;
    }
    return false;
  }

  public isAdmin(): boolean {
    if(localStorage.getItem('idUser') === '1'){
      console.log("%c Navbar para el admin", "color:green;");
      return true;
    }
    console.log("%c Navbar para el User", "color:yellow;");
    return false;
  }


}
