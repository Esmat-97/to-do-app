import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports:[IonicModule,FormsModule],
  standalone:true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
