import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports:[IonicModule , FormsModule],
  standalone:true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
