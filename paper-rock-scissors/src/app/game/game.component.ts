import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-game',
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {
  choices : string[] = ['Rock', 'Paper', 'Scissor'];
  playerChoice : string | null = null;
  computerChoice : string | null = null;
  result : string | null = null;

  private getRandomNumber(max: number) : number{
    return Math.floor(Math.random() * max);
  }

  private determineWinner(player : string, computer : string){
    if(player === computer) return "it's tie!";
    if(player === 'Rock' && computer === 'Scissor' ||
      player === 'Scissor' && computer === 'Paper' ||
      player === 'Paper' && computer === 'Rock'
    ){
      return 'You win!';
    }
    return 'You lose!';
  }

  play(choice : string) : void{
    this.playerChoice = choice;
    this.computerChoice = this.choices[this.getRandomNumber(this.choices.length)];
    this.result = this.determineWinner(this.playerChoice, this.computerChoice);
  }

}
