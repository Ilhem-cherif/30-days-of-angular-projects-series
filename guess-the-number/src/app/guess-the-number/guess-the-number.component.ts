import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-guess-the-number',
  imports: [CommonModule, FormsModule],
  templateUrl: './guess-the-number.component.html',
  styleUrl: './guess-the-number.component.scss'
})
export class GuessTheNumberComponent {
  secretNumber : number = this.generateRandomNumber();
  gameOver = false;
  attemptsLeft = 10;
  //the ? means the variable can be undefined when it is declared
  guessedNumber?: number;
  feedbackMessage = '';

  private static readonly MAX_NUMBER = 100;
  private static readonly MAX_ATTEMPTS = 10;


  private generateRandomNumber() : number{
    return Math.floor(Math.random() * GuessTheNumberComponent.MAX_NUMBER) +1;
  }

  public isValidGuess(guess?: number){
    return(
      guess !== undefined &&
      guess >= 1 &&
      guess <= GuessTheNumberComponent.MAX_NUMBER
    );
  }

  submitGuess() : void{
    if(!this.isValidGuess(this.guessedNumber)){
      this.feedbackMessage = `Enter a number between 1 and ${GuessTheNumberComponent.MAX_NUMBER}`;
      return;
    }
    this.attemptsLeft--;
    this.evaluateGuess();
  }
  private evaluateGuess() : void {
    if(this.guessedNumber === this.secretNumber){
      this.endGame(true);
    }else if(this.attemptsLeft === 0){
      this.endGame(false);
    }else{
      this.feedbackMessage = this.guessedNumber! > this.secretNumber 
      ? 'Too High! Try again.' 
      : 'Too low! Try again.';
    }
    
  }
  private endGame(isWin : boolean) : void{
   this.gameOver = true;
   this.feedbackMessage = isWin ? "Congratulations! You guessed the right number"
   : `Game Over! The correct number was ${this.secretNumber}`; 
  }


  resetGame() : void{
    this.secretNumber = this.generateRandomNumber();
    this.attemptsLeft = GuessTheNumberComponent.MAX_ATTEMPTS;
    this.guessedNumber = undefined;
    this.feedbackMessage = '';
    this.gameOver = false;
  }
}
