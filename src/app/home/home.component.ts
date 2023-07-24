import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  data: any[] = [];

  constructor(private apiService: ApiService){

  }

  ngOnInit(): void{
    this.llenardata()
  }


  llenardata(){
    this.apiService.getDat().subscribe( data => {
      this.data = data;
      console.log(this.data);
    })
  }
}
