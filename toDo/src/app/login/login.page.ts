import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports:[IonicModule,FormsModule],
  standalone:true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {

  
  constructor(private http:AuthService , private route:Router) { }

  person:any=[];


formdata(main:any){
console.log(main.value)
this.http.login(main.value).subscribe(res=>{
  this.person=res;

console.log(this.person)

localStorage.setItem('name',this.person.name)
localStorage.setItem('mail',this.person.email)
localStorage.setItem('id',this.person.id)

this.route.navigate(['/home'])
})

}

}
