import { Component, OnInit } from '@angular/core';
import { Router }  from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  inputTextCurrent: string = '';
  steamid: number = 0;
  constructor(private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  
  getid(inputText:string){
    this.steamid = Number(inputText.replace(/\D/g,''));

    if(this.steamid != 0){
    this.router.navigate(['/profile', this.steamid])
    } 
    else{
      alert('Invalid SteamURL')
    }
  }
  
  
}

//https://steamcommunity.com/profiles/76561198001199916