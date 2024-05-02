import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  standalone:true,
  imports:[IonicModule],
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private route:Router ) { }

  ngOnInit() {
    localStorage.removeItem('name')
localStorage.removeItem('mail')
localStorage.removeItem('id')

this.route.navigate(['/login'])

  }

}
