import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatrialModuleModule } from './matrial-module/matrial-module.module';
import { DetailDailogComponent } from './dailog/detail-dailog/detail-dailog.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailDailogComponent
  ],
  entryComponents:[DetailDailogComponent],
  imports: [
    BrowserModule,
    MatrialModuleModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
