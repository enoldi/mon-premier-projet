import { UserModel } from '../model/user.model';
import { Subject } from 'rxjs';

export class UserService {
  private users: UserModel[] = [
    {
      firstName: 'Kana',
      lastName: 'Edon',
      email: 'kana.edon@cameroun.net',
      drinkPreferences: 'the glace',
      hobbies: [
        'basketBall', 'Voyage'
      ]
    }
  ];
  userSubject = new Subject<UserModel[]>();

  emitUsers(){
    this.userSubject.next(this.users.slice());
  }

  addUser(user: UserModel) {
    this.users.push(user);
    this.emitUsers();
  }
}
