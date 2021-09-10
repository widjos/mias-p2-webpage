import { Component, OnInit } from '@angular/core';
import { toInteger } from '@ng-bootstrap/ng-bootstrap/util/util';
import { AuthService } from '../../app/auth/auth.service';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit {

  chatForm : any = [];
  mensaje : any = {};
  timer : any = null;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {

    this.timer =  setInterval(() => {
      this.loadChat
      ();
    }, 3000);
   

  }

  ngOnDestroy(): void {
    clearInterval(this.timer);
    this.deleteChat();

  }


  loadChat() : void {

    this.auth.cargarChat().subscribe( result => this.chatForm = result);

  }

  enviarMensaje() : void {

    this.mensaje.id = parseInt(localStorage.getItem("idUser"));
    this.auth.sendMensaje(this.mensaje).subscribe( result => console.log(result));
    alert("mensaje enviado");

  }

  deleteChat() : void {
    this.auth.cleanChat().subscribe( result => console.log(result));

  }

}
