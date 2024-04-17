import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ODataServiceFactory } from "@awdorrin/ngx-odata-client";
import { ODataConfiguration } from "@awdorrin/ngx-odata-client";
import { ODataConfigurationFactory } from './odata-configuration.factory';
import { ODataConfigService } from './odata-config.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ODataServiceFactory,
   { provide: ODataConfiguration, useClass: ODataConfigService },
  //  { provide: ODataConfiguration, useClass: ODataConfigurationFactory },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
