import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { UserListComponent } from './componentes/user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserFormComponent } from './componentes/create-user-form/create-user-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderOutComponent } from './componentes/header-out/header-out.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { UploadFileComponent } from './pages/upload-file/upload-file.component';
import { EncriptacionTutorialComponent } from './pages/encriptacion-tutorial/encriptacion-tutorial.component';
import { CifradoRSAComponent } from './pages/cifrado-rsa/cifrado-rsa.component';
import { ResponseModalComponent } from './response-modal/response-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { DialogMessageComponent } from './componentes/dialog-message/dialog-message.component';
import { DialogRequieLoginComponent } from './componentes/dialog-requie-login/dialog-requie-login.component';
import { HeaderInComponent } from './componentes/header-in/header-in.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CreateUserFormComponent,
    HeaderOutComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadFileComponent,
    EncriptacionTutorialComponent,
    CifradoRSAComponent,
    ResponseModalComponent,
    DialogMessageComponent,
    DialogRequieLoginComponent,
    HeaderInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CommonModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
