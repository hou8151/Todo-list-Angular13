import { Component, OnInit, EventEmitter,Output, ValueProvider, ValueSansProvider } from '@angular/core';



@Component({
  selector: 'app-input-button-unit',
  templateUrl: './input-button-unit.component.html',
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {
  title = 'input your task to do ';
  inputedValue: any;
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }                     

  ngOnInit(): void {
  }
  
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
    console.log('inputedValue',this.inputedValue)
    this.inputedValue=''
  }
}