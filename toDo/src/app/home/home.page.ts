import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  tasks:any=[];

  User_ID:any='6'

  constructor(private htp:TasksService) {}

  ngOnInit(){
    this.htp.gettasks().subscribe(res=>{
this.tasks=res;
    })
  }


  formdata(main:any){
console.log(main.value)
this.htp.inserttasks(main.value).subscribe(res=>{

      })
  }
}
