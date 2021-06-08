import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Users } from 'src/app/pages/users/models';
import { routes } from '../../../../consts';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  @Input() user: Users;
  @Input() name: string;
  @Output() signOut: EventEmitter<void> = new EventEmitter<void>();
  public routes: typeof routes = routes;
  public flatlogicEmail: string = 'https://flatlogic.com';
  constructor() {}
  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
  // public name: string;
  // this.name = this.user.firstname[0]
  //   .toUpperCase()
  //   .concat(' ', this.user.lastname.toUpperCase());
  //   console.log(this.user);

  public beenSeen(): void {
    if (this.trigger.menuOpen) {
      console.log(this.user);
    }
  }
  public signOutEmit(): void {
    this.signOut.emit();
  }
}
