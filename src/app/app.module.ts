import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule],
  declarations: [AppComponent, HelloComponent, BuiltInDirectivesComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
