import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ng2-intl-tel-input-tester';
  phoneForm = new FormGroup({
// tslint:disable-next-line: indent
		phone: new FormControl(undefined, [Validators.required])
  });

  ngOnInit() {
    this.cdr.detectChanges();
  }

  constructor(private cdr: ChangeDetectorRef) {}
}
