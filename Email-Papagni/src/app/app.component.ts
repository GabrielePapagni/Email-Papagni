import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addEmail(titolo: HTMLInputElement, messaggio: HTMLInputElement): boolean {
    let t = titolo.value;
    let v = messaggio.value;
    console.log(`Aggiungendo il titolo: `+t+ ` e il messaggio: `+ v);
    console.log(`Aggiungendo il titolo: `+titolo.value+ ` e il messaggio: `+ messaggio.value);
    console.log(`Aggiungendo il titolo: ${titolo.value} e il messaggio: ${messaggio.value}`);
    return false;
  }
}