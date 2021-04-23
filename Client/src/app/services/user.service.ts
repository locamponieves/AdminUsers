import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from '../models/user';

@Injectable({
	providedIn: 'root'
})

export class UserService {
	URL_API = '/api'

	user: User = {
		Dni      : '',
		Name     : '',
		LastName : '',
		Email    : '',
		Phone    : ''
	}

	users : User[]

	constructor(private http: HttpClient) { }

	getUsers() {
		return this.http.get<User[]>(this.URL_API+'/users')
	}

	createUser(newUser: User) {
		return this.http.post(this.URL_API+'/users', newUser)
	}

	updateUser(newUser: User) {
		return this.http.put(`${ this.URL_API+'/users' }/${ newUser.Id }`, newUser)
	}

	deleteUser(idUser: string) {
		return this.http.delete(`${ this.URL_API+'/users' }/${ idUser }`)
	}
}