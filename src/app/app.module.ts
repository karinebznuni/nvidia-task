import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NFormComponent } from './components/n-form/n-form.component';
import { NWallComponent } from './components/n-wall/n-wall.component';
import { NBrickComponent } from './components/n-brick/n-brick.component';

@NgModule({
  declarations: [
    AppComponent,
    NFormComponent,
    NWallComponent,
    NBrickComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
