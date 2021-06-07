import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from '../../services';

@Component({
  selector: 'app-add-admin',
  templateUrl: './add-admin.component.html',
  styleUrls: ['./add-admin.component.css'],
})
export class AddAdminComponent {
  hide = true;
  @Input() type: string;

  public succ: boolean;
  public err: boolean;
  constructor(private service: UsersService) {}

  public onSubmit(data): void {
    this.service.addUser(data, this.type).subscribe((res) => {
      this.succ = null;
      this.err = null;
      console.log(res);
      if (res.success === true) {
        this.succ = res.success;
      } else this.err = true;
    });
  }
}
