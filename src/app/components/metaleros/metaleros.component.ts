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
    this.voceMetal=this.metaleros.getMetaleros();
  }
  subir(){
    const up=document.documentElement.scrollTop;
    if(up>0){
      window.scrollTo(0,0);
    }
  }
}
