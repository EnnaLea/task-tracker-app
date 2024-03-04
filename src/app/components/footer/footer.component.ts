import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
