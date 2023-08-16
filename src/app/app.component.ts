import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstproject';
  imgURL="assets/BridgeLabz New Logo.svg"
  URL="https://www.bridgelabz.com/"
  userName=""
  nameError=""

  ngOnInit(){
    this.title="Hello firstProject"
  }

  onClick(){
    window.open(this.URL,"_blank")
    console.log("when click on image it shows bridgelabz site")
  }

  onInput() {
    console.log(this.userName)
    const nameRegEx=RegExp("^[A-Z]{1}[a-z]{2,}$")
    if(nameRegEx.test(this.userName)){
      this.nameError="";
      return ;
    }
    this.nameError="Invalid Name";
  }
 
}

