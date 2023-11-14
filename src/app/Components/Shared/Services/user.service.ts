import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../../public/model/models';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [
    { id: 1, username: 'user1', password: 'user1@123', name: 'user1', email: 'user1@gmail.com', phone: '1234567', role: 'user', gender: 'male', status: true },
    { id: 2, username: 'user2', password: 'user2@123', name: 'user2', email: 'user2@gmail.com', phone: '1234567', role: 'user', gender: 'female', status: true },
    { id: 3, username: 'user1', password: 'user3@123', name: 'user3', email: 'user3@gmail.com', phone: '1234567', role: 'user', gender: 'male', status: true },
    { id: 4, username: 'user4', password: 'user4@123', name: 'user4', email: 'user4@gmail.com', phone: '1234567', role: 'user', gender: 'male', status: true }, 
    { id: 5, username: 'user5', password: 'user5@123', name: 'user5', email: 'user5@gmail.com', phone: '1234567', role: 'user', gender: 'female', status: true }
  ];

  constructor() { }

  getAllUsers(): Observable<User[]> {
    return of(this.users)
  }

  getUserById(id: number){
    return this.users.find(user => user.id == id)
  }

  getLoginDetails(username: string, password: string){
    return this.users.find((login) => login.username===username && login.password === password);    
  }

  duplicateUsername(username: string): Observable<User[]> {
    const filteredUsers = this.users.filter(user => user.username === username);
    return of(filteredUsers);
  }

  addUser(userData: User){
    return this.users.push(userData);
  }

  updateUser(id: number, userData: User) {
    const userIndex = this.users.findIndex(user => user.id === id);
  
    if (userIndex !== -1) {
      this.users[userIndex] = { ...this.users[userIndex], ...userData };
      return this.users[userIndex];
    } else {
      return null;
    }
  }
}
