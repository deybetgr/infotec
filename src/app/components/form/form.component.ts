import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  a: number = 0;
  b: number = 0;

  @Output() resultado: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  multiplicar() {
    console.log(this.a * this.b);
    this.resultado.emit(this.a * this.b);
  }
}
