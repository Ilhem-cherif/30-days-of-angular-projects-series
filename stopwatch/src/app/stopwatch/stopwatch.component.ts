import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  imports: [CommonModule],
  templateUrl: './stopwatch.component.html',
  styleUrl: './stopwatch.component.scss'
})
export class StopwatchComponent {
  elapsedTime : number = 0;
  isRunning : boolean = false;
  intervalRef : any;

  startStop(){
    this.isRunning ? this.stop() : this.start();
  }

  private start(){
    this.isRunning = true;
    // add 0.1 every 100 milliseconds
    this.intervalRef = setInterval(()=>{
      this.elapsedTime += 0.1;
    },100)
    console.log("StopWatch started!");
  }

  private stop(){
    this.isRunning = false;
    //reset the interval
    clearInterval(this.intervalRef);
    console.log("StopWatch stoped!");
  }

  reset(){
    this.isRunning = false;
    clearInterval(this.intervalRef);
    this.elapsedTime = 0;
    console.log("StopWatch reset!");
  }

}
