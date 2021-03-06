import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { Home2Component } from './pages/home2/home2.component';
import { Home3Component } from './pages/home3/home3.component';
import { PaisComponent } from './pages/home3/pais.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home2', component: Home2Component },
  { path: 'home3', component: Home3Component },
  { path: '**', component: HomeComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    Home2Component,
    Home3Component,
    PaisComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    DragDropModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
