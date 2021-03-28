import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  id: number = 0;
  constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    let steamid = this.route.snapshot.paramMap.get('steamid');
    this.id = Number(steamid);
  }
 
}


