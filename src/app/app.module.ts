import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./shared/header/header.component";
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";


@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule,  HttpClientModule, AppRoutingModule, SharedModule, NgbModule],
  providers: [SharedModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
