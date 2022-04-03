import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  SideBarOpen = true;

  ngOnInit() {}

  SideBarToggler(){
    this.SideBarOpen = !this.SideBarOpen;
  }


}
