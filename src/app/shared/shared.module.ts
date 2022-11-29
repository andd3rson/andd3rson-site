import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotfoundPageComponent } from './notfound-page/notfound-page.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NotfoundPageComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
