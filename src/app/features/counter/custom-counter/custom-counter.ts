import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-counter',
  imports: [],
  templateUrl: './custom-counter.html',
  styleUrl: './custom-counter.scss',
})
export class CustomCounter {
  addCounter(val: string){
    console.log(val)
  }
}
