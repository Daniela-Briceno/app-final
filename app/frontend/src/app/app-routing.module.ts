// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { AuthGuard } from './guards/auth.guard'; // Asegúrate de importar el guardia de ruta AuthGuard

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: UploadFileComponent },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/register' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
