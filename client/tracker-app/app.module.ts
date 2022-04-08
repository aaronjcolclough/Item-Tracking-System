import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';

import { Components } from './components';
import { RouteComponents } from './routes';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, RoutingModule],
  declarations: [...Components, ...RouteComponents, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
