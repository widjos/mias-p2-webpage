
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './auth/login/login.component';
import { CategoryComponent } from './category/category.component'
import { NotificationsComponent } from './notifications/notifications.component'
import {ReportComponent }   from './report/report.component'
import {ProductoComponent}   from './producto/producto.component'
import {CarritoComponent}    from './carrito/carrito.component'
import {TiendaComponent }    from './tienda/tienda.component'
import {ProductoInfoComponent} from './producto-info/producto-info.component'
import {ChatComponent}  from './chat/chat.component'        

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'report', component: ReportComponent },
  { path: 'notifications', component : NotificationsComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'producto', component: ProductoComponent},
  { path: 'carrito', component: CarritoComponent},
  { path: 'tienda', component: TiendaComponent},
  {path: 'producto-info', component: ProductoInfoComponent},
  {path: 'chat', component: ChatComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
