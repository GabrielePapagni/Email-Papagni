import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Email} from "./sent-mail/email.model";
import {SentMailComponent} from "./sent-mail/sent-mail.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SentMailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Manda una Email';
  emails:Email[]

  constructor(){
    this.emails = [
      new Email("laguda@gmail.com", "Mail inutile", "Ciao!"),
      new Email("papagni@gmail.com", "Mail importante", "Buonasera!"),
      new Email("malizia@gmail.com", "KENSHIRO", "KENSHIRO")
    ]
  }

  aggiungiMail(email: HTMLInputElement, oggetto: HTMLInputElement, testo: HTMLInputElement){
    this.emails.push(new Email(email.value, oggetto.value, testo.value))
    console.log("elemento aggiunto")
    email.value = ""
    oggetto.value = ""
    testo.value = ""
  }
}