import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  addEmail(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Aggiungendo il titolo: ${title.value} e il messaggio: ${link.value}`);
  return false;
  }
}