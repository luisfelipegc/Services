import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Routes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { ComponentsModule } from './components/components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
