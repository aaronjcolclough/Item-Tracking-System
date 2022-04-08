import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';

import { RouteComponents } from './routes';
import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [...RouteComponents, AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
