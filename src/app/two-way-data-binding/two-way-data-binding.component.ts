import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-two-way-data-binding',
  templateUrl: './two-way-data-binding.component.html',
  styleUrls: ['./two-way-data-binding.component.css']
})
export class TwoWayDataBindingComponent implements OnInit {

  @Input() nome: string = "abc";

  constructor() { }

  ngOnInit(): void {
  }

   onKeyUp(evento: KeyboardEvent) {
     this.nome = (<HTMLInputElement>evento.target).value;
   }

}
