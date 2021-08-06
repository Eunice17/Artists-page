import { Component, OnInit } from '@angular/core';
import { metalerosService } from "../../metaleros.service";

@Component({
  selector: 'app-metaleros',
  templateUrl: './metaleros.component.html',
  styles: [
  ]
})
export class MetalerosComponent implements OnInit {
  voceMetal:any[];
  constructor(private metaleros:metalerosService) { }

  ngOnInit(): void {
    this.metaleros.getMetaleros().subscribe((value) =>{
      console.log(value);
    });
  }
  subir(){
    const up=document.documentElement.scrollTop;
    if(up>0){
      window.scrollTo(0,0);
    }
  }
}
