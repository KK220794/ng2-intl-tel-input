import { NgModule, ModuleWithProviders } from '@angular/core';
import { Ng2IntlTelInputComponent } from './ng2-intl-tel-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2IntlTelInputService } from './ng2-intl-tel-input.service';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { BsDropdownModule } from 'ngx-bootstrap';



@NgModule({
  declarations: [Ng2IntlTelInputComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    BsDropdownModule.forRoot()
  ],
  exports: [Ng2IntlTelInputComponent]
})
export class Ng2IntlTelInputModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: Ng2IntlTelInputModule,
      providers: [Ng2IntlTelInputService]
    };
  }
}
