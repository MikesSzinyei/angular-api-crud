import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pilots',
  templateUrl: './pilots.component.html',
  styleUrls: ['./pilots.component.css']
})



export class PilotsComponent {

  

  public getPilotsValue: any;
  public postPilotsValue: any;

  constructor(private http:HttpClient) {
    
  }

  ngOnInit(): void {
    this.getPilots();

  }



  public getPilots() {
    this.http.get(`http://localhost:3000/pilots`).subscribe((pilotData) => {
      console.log(pilotData);
      this.getPilotsValue = pilotData;
    })
  }

  public deletePilots(id:any) {
    this.http.delete(`http://localhost:3000/pilots/${id}`)
        .subscribe((result) => {this.ngOnInit()});
        
  }

}
