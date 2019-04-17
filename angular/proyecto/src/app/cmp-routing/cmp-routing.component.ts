import { Component, OnInit } from '@angular/core';
import { ContadorService } from './contador.service';

@Component({
  selector: 'app-cmp-routing',
  templateUrl: './cmp-routing.component.html',
  styleUrls: ['./cmp-routing.component.css']
})
export class CmpRoutingComponent implements OnInit {
  constructor(private contadorService : ContadorService) { }
  ngOnInit() {
    
  }

}
