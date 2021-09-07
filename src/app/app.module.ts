import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HighlightDirective } from './highlight.directive';
import { CustomAttributeDirectiveExampleComponent } from './custom-attribute-directive-example/custom-attribute-directive-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, MatTabsModule, BrowserAnimationsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    BuiltInDirectivesComponent,
    CustomAttributeDirectiveExampleComponent,
    HighlightDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
