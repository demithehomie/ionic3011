import { Component } from '@angular/core';
import { Prod1Component } from '../components/prod1/prod1.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  component = Prod1Component;

 

}
