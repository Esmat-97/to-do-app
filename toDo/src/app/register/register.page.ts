import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-register',
  imports:[IonicModule , FormsModule],
  standalone:true,
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private http:AuthService) { }

formdata(main:any){
console.log(main.value)
this.http.register(main.value).subscribe(res=>{
  
})

}

}
