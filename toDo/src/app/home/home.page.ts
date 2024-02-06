import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {
  tasklist: { task: string }[] = [];

  text:string=" ";

  add(){

this.tasklist.push({ task: this.text })
this.text=" ";
  }


  del(index:number){
this.tasklist.splice(index,1)
  }

  constructor() {}

}
