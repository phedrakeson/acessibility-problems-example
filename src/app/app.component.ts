import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  public showAlert = false;
  ngOnInit(): void {
    setTimeout(() => {
      this.showAlert = true;
    }, 5000);
  }

  public reveal(): void {
    document.getElementById('body')?.classList.toggle('visible');
  }
}
