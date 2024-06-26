import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { TasksService } from '../services/tasks.service';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone:true,
  imports:[FormsModule,CommonModule,IonicModule,RouterLink],
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage {

  comming:any=[];


  id:string='';
  name:string='';

  constructor(private htp:TasksService) {}



  /*    */

  ngOnInit(){
this.id=localStorage.getItem('id')  as string ;
this.name=localStorage.getItem('name')  as string ;
    this.htp.gettasks(this.id).subscribe( (res :any) =>{
      this.comming=res.tasks
console.log(this.comming)

    })

  }


  /*   */

  del(id:any){
this.htp.deltasks(id).subscribe(res=>{

})
  }




/*   */

  formdata(main:any){
console.log(main.value)
this.htp.inserttasks(main.value).subscribe(res=>{

      })
  }


}
