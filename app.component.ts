import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  showToPhone = false;
  showToEmail = false;

  //click Event Through
  onSelectClick(param: any) {
    console.log(param);
    this.showToPhone = param === 'phone';
    this.showToEmail = param === 'email';
  }

  //Radio Button
  showToRadPhone=false;
  showToRadEmail=false;
  onRadioChange(param:any){
    console.log(param);
    this.showToRadPhone = param === 'phone';
    this.showToRadEmail = param === 'email';
  }
}

