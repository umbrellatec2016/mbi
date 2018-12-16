import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { LoginComponent } from './modules/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormControl,FormGroup,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule, MatListModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {LoginService} from './common/services/s.login.service';
import { HttpClientModule } from '@angular/common/http';
import { FrontComponent } from './modules/front/front.component';  // replaces previous Http service
import {MatExpansionModule} from '@angular/material/expansion';
import { GestioncampanaComponent } from './modules/gestioncampana/gestioncampana.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { OngestionComponent } from './modules/ongestion/ongestion.component';
import {MatSelectModule} from '@angular/material/select';
const Routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'front',component:FrontComponent,children:[{
      path:'gestionCampana', component:GestioncampanaComponent, outlet:'content'},
    { path:'onGestion', component:OngestionComponent, outlet:'content'}
  ]}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FrontComponent,
    GestioncampanaComponent,
    OngestionComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Routes),
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatProgressSpinnerModule,
    
    HttpClientModule,
    MatExpansionModule,
    MatListModule,
    MatAutocompleteModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
