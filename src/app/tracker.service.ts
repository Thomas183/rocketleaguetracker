import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tier } from './rankInterface'

@Injectable({
  providedIn: 'root'
})

export class TrackerService {

  

  private rankData: string = 'src\assets\rankData\rank.json';

  getRankData(): Observable<ITier[]>{
    return this.jsondata.get<ITier[]>(this.rankData)
  }
  
  constructor(private jsondata : HttpClient) { }
}
