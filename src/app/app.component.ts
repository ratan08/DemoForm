import { DetailDailogComponent } from './dailog/detail-dailog/detail-dailog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 // email = new FormControl('', [Validators.required, Validators.email]);
  title = 'formElement';
  constructor(private dailog:MatDialog){}
  openDailog(){
    this.dailog.open(DetailDailogComponent)
  }
  
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
}
