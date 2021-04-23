import { Component, OnInit } from '@angular/core';
import { UserService }       from '../../services/user.service';
import {  NgForm }          from "@angular/forms";
import { User } from '../../models/user';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
	showAlert:boolean     = false
	showTtext:string      = ''
	isAlertDanger:boolean = false
	regex                 = "^[0-9]{0,}$";

	constructor(public userService: UserService) { }

  	ngOnInit(): void {
		this.getUsers()
  	}

	getUsers() {
		this.userService.getUsers().subscribe(
			(res) => {
				this.userService.users = res
			},

			(err) => console.error(err)
		)
	}

	createUser(form: NgForm) {
		// Para comprobar si se va a actualizar los datos
		if(form.value.Id) {
			this.userService.updateUser(form.value).subscribe(
				(res:any) => {
					this.showWindowAlert(res)

					if(res.code == 0) {
						this.getUsers()
	
						form.reset()
					}
				},

				err => console.error(err)
			)

			return
		}

		this.userService.createUser(form.value).subscribe(
			(res: any) => {
				
				this.showWindowAlert(res)

				if(res.code == 0) {
					this.getUsers()

					form.reset()
				}
			},

			(err) => console.error(err)
		)
	}

	deleteUser(idUser: string) {
		if(confirm('¿Deseas eliminar este usuario?')) {
			this.userService.deleteUser(idUser).subscribe(
				(res:any) => {
					this.showWindowAlert(res)

					if(res.code == 0) {
						this.getUsers()
					}
				},

				err => console.error(err)
			)
		}
	}

	updateSelected(userSelected: User) {
		this.userService.user = userSelected
	}

	closeAlert() {
		this.showAlert = false
	}

	showWindowAlert(res:any) {
		this.showAlert = true
		this.showTtext = res.msg

		if(res.code == 1) {
			this.isAlertDanger = true

			return
		}
				
		this.isAlertDanger = false
	}
}