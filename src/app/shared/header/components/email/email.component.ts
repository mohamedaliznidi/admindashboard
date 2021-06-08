import { Component, Input, OnInit } from '@angular/core';
import { Users } from 'src/app/pages/users/models';

import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  @Input() user: Users;
  public name: string = '#';
  ngOnInit() {}
  public colors: string[] = ['yellow', 'green', 'blue', 'ping'];
  public chat(): void {
    //
    this.name = this.name.concat(this.user.username);
    console.log(`${environment.baseUrl}/${this.name}`);
    


    
    window.open(`${environment.baseUrl}/${this.name}`, '_blank');
  }
}
