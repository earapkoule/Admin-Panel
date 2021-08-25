import { Component, Input, SimpleChanges, OnChanges } from "@angular/core";
import { UsersService } from "../services/users.service";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
})
export class AppUserDetailsComponent implements OnChanges {
  userForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    company: new FormControl(""),
  });

  @Input() userId: string = null;

  constructor(private usersService: UsersService) {}

  ngOnChanges(changes: SimpleChanges): void {
    const selectedUser = this.findUserById(changes.userId.currentValue);
    if (selectedUser != null) this.fillForm(selectedUser);
  }

  cancelChanges() {
    const selectedUserIndex: number = this.usersService.users.findIndex(
      (user) => user.id === this.userId
    );
    this.userForm.markAsPristine(); // Resets the dirty property of the form
    this.fillForm(this.usersService.users[selectedUserIndex]);
  }

  saveChanges() {
    const selectedUserIndex: number = this.usersService.users.findIndex(
      (user) => user.id === this.userId
    );

    this.userForm.markAsPristine(); // Resets the dirty property of the form
    this.usersService.users[selectedUserIndex] = {
      ...this.usersService.users[selectedUserIndex], // The id remains the same
      name: this.userForm.controls.name.value,
      email: this.userForm.controls.email.value,
      phone: this.userForm.controls.phone.value,
      address: this.userForm.controls.address.value,
      company: this.userForm.controls.company.value,
    };
  }

  fillForm(user: any): void {
    this.userForm.controls.name.setValue(user.name);
    this.userForm.controls.email.setValue(user.email);
    this.userForm.controls.phone.setValue(user.phone);
    this.userForm.controls.address.setValue(user.address);
    this.userForm.controls.company.setValue(user.company);
  }

  findUserById(userId: string) {
    for (const user of this.usersService.users) {
      if (user.id === userId) return user;
    }
    return null;
  }
}
