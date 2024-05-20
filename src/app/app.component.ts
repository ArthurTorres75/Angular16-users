import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { User } from '@app/_models';
import { AccountService } from '@app/_services';
import { AlertComponent } from './_components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [NgIf, RouterOutlet, RouterLink, RouterLinkActive, AlertComponent],
})
export class AppComponent {
  user?: User | null;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((user) => (this.user = user));
  }

  logout() {
    this.accountService.logout();
  }
}
