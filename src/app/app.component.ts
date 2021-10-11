import { DetailDailogComponent } from './dailog/detail-dailog/detail-dailog.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formElement';
  constructor(private dailog:MatDialog){}
  openDailog(){
    this.dailog.open(DetailDailogComponent)
  }
}
