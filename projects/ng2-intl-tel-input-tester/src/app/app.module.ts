import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2IntlTelInputModule } from './../../../ng2-intl-tel-input/src/lib/ng2-intl-tel-input.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
import { BsDropdownModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2IntlTelInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
