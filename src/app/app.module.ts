import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AgileComponent } from './agile/agile.component';
import { SimplifyComponent } from './simplify/simplify.component';
import { InnovativeComponent } from './innovative/innovative.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustomePipe } from './custome.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AgileComponent,
    SimplifyComponent,
    InnovativeComponent,
    DemopipeComponent,
    CustomePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
