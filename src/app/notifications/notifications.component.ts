import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  unsolvedReport: any = [];
  detail: any = "";
  solvedReport: any = [];
  mailBody: any = {
    "from": "korer123455@gmail.com",
    "to": "",
    "subject": "MarketFake - Solucion Denuncia",
    "html": "" 
  };
  timer: any = null;
  timer2: any = null;
  
  constructor(private auth: AuthService) { }

  ngOnInit(): void {

 
    this.loadReport1();
    this.loadReport2();

  }
  

  ngOnDestroy(): void {
    clearInterval(this.timer);
  }


  loadReport1():void {

    this.auth.getReports().subscribe(result => this.unsolvedReport = result);

  }

  loadReport2(): void {

    this.auth.getReportsSolved().subscribe(result => this.solvedReport = result);
  }

  solucionar(id_user:any, solucion: any, id_denuncia: any ){
    
    if(id_user){
      var a = {
        id: parseInt(id_user)
      }
      this.auth.getProfile(a).subscribe( result => this.mailBody.to = result[0].CORREO);
    }

    // modificar la denuncia a resuelta con id_denuncia
    if(id_denuncia){
      var b = {
        id: parseInt(id_denuncia)
      }

      this.auth.solveReport(b).subscribe(result =>{ 
        console.log(result);
      });
    }
  


    this.mailBody.html = solucion;

    if(this.mailBody.to){
      this.auth.sendCodeVerification(this.mailBody).subscribe(result => console.log(result));
    }
    console.log(this.mailBody);

    //Aqui enviaria el correo de notificacion 


    this.loadReport1();
    this.loadReport2();
    alert("COrreo enviado al usuario ");




  }



}
