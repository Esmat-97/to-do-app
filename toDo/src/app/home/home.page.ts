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

  comming:any=[];


  id:string='';


  constructor(private htp:TasksService) {}



  /*    */

  ngOnInit(){
this.id=localStorage.getItem('id')  as string ;
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
