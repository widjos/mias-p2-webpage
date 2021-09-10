
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private uriApi = 'http://localhost:1158/api';
  private uriseg = 'http://localhost:1158/api/users';
  private uriMessage = 'http://localhost:1158/api/sendMail';
  private uriUsers = 'http://localhost:1158/getUsers';
  private uriLogin = 'http://localhost:1158/api/loginUser';
  private uriProfile = 'http://localhost:1158/api/profile';
  private uriAdmin = 'http://localhost:1158/admin';
  private uriUser = 'http://localhost:1158/user';

  constructor(private http: HttpClient) { }

  public register(userData: any): Observable<any> {
    const URI = this.uriApi + '/createUser';
    return this.http.post(URI, userData);
  }

  public sendCodeVerification(mailBody: any): Observable<any> {
    const URI = this.uriMessage;
    console.log("Se envio un codigo de confirmacion de correo", mailBody.to , mailBody.from);
    return this.http.post(URI, mailBody);
  }


  public getCredentials(logBody : any) : Observable<any>{
    const URI = this.uriLogin;
    console.log("Se envio el fomulario para loger");
    return this.http.post(URI, logBody);
  }

  public getUsers(): Observable<any> {
    const URI = this.uriUsers;
    console.log("Se llama a todo los usuarios de la base de datos ");
    return this.http.get(URI);
  }


  public  getProfile(id : any): Observable<any>{
    const URI = this.uriProfile;
    console.log("%c Post para obtener el perfil del usuario");
    return this.http.post(URI, id);
  }
  
  
  public changeName(user: any): Observable<any> {
    const URI = this.uriProfile + '/changename';
    console.log("%c Post para actualizar el nombre de user");
    return this.http.post(URI, user);
  }
  
  
  public changeLastname(user : any): Observable<any>{
    const URI = this.uriProfile + '/changelastname';
    console.log("%c Cambiar lastname", "color:green;");
    return this.http.post(URI, user);
  }

  public changeCorreo(user : any): Observable<any>{
    const URI = this.uriProfile + '/changemail';
    console.log("%c Cambiado el correo", "color:green;");
    return this.http.post(URI, user);

  }


  public changePass(user: any): Observable<any> {
    const URI = this.uriProfile+ '/changepass';
    console.log("%c Cabio de pass");
    return this.http.post(URI,user);
  }


  //Categoria 

  public getCategoria() : Observable<any> {
    const URI = this.uriAdmin + '/getCategoria';
    console.log("Se llama a todas las categorias  ");
    return this.http.get(URI);
  }

  public addCategoria(name:any): Observable<any> {
    const URI = this.uriAdmin+ '/addCategoria';
    return this.http.post(URI, name);
  }

  //Producto 
  public getProductos() : Observable<any> {
    const URI = this.uriUser + '/Productos';
    console.log("Se llama a todas las categorias  ");
    return this.http.get(URI);
  }

  public createProducto(producto: any) :Observable<any>{
    const URI = this.uriUser + '/postProducto';
    console.log("%Se ha publicado su producto", "color:green;");
    return this.http.post(URI,producto);
  }

  public getProductAsc() : Observable<any> {
    const URI = this.uriUser + '/Producto/byAsc';
    console.log("Se llama a todas las categorias  ");
    return this.http.get(URI);
  }

  public getProductDesc() : Observable<any> {
    const URI = this.uriUser + '/Producto/byDesc';
    console.log("Se llama a todas las categorias  ");
    return this.http.get(URI);
  }

  public getProductCategory() : Observable<any> {
    const URI = this.uriUser + '/Producto/byCategory';
    console.log("Se llama a todas las categorias  ");
    return this.http.get(URI);
  }


  public getInfoProduct(id: any) : Observable<any> {
    const URI = this.uriUser + '/Producto/getInfo';
    return this.http.post(URI, id);

  }
  
  public loadProductCom(id: any) : Observable<any> {
    const URI = this.uriUser + '/Producto/comentarios';
    return this.http.post(URI, id);
  }

  //Para implementar 

  // ENviar comentario 
  public enviarComentario(form : any): Observable<any> {
    const URI = this.uriUser + '/Producto/Comentar';
    return this.http.post(URI, form);
    
  } 

  // Enviar denuncia 
  public enviarDenuncia(form : any): Observable<any> {
    const URI = this.uriUser + '/Producto/Denunciar';
    return this.http.post(URI, form);
    
  } 

  // Cargar denuncias
  public getReports() : Observable<any> {
    const URI = this.uriAdmin + '/Denuncias/unsolved';
    console.log("Se llama a todos los reportes no resuelto  ");
    return this.http.get(URI);
  }

  public getReportsSolved() : Observable<any> {
    const URI = this.uriAdmin + '/Denuncias/solved';
    console.log("Se llama a todos los reportes resueltos  ");
    return this.http.get(URI);
  }

  //update denuncia 
  public solveReport(form : any): Observable<any> {
    const URI = this.uriAdmin + '/Denuncias/change';
    return this.http.post(URI, form);
    
  } 

  // Enviar mensaje 
  public sendMensaje(form : any): Observable<any> {
    const URI = this.uriApi + '/profile/sendmensaje';
    return this.http.post(URI, form);
    
  }

  // Cargar mensajes 

  public cargarChat(): Observable<any> {
    const URI = this.uriApi + '/profile/getChat';
    console.log("Se llama a todos los reportes resueltos  ");
    return this.http.get(URI);
  }


  public cleanChat(): Observable<any> {
    const URI = this.uriApi + '/profile/cleanChat';
    console.log("Se llama a todos los reportes resueltos  ");
    return this.http.get(URI);
  }

  //Agregar carrito 





}