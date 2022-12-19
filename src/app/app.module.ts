import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UniversitiesComponent } from './Universities/universities/universities.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyComponent } from './Currency/currency/currency.component';
import { ConverterComponent } from './Currency/converter/converter.component';

@NgModule({
  declarations: [
    AppComponent,
    UniversitiesComponent,
    CurrencyComponent,
    ConverterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
