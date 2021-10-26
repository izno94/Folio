import { Subject } from "rxjs";

export class UserService{
userSubject = new Subject<any[]>()

    private users = [
        {
            id : 1,
            civilityUser : "Monsieur",
            lastNameUser : "Herrero",
            firstNameUser : "Romain",
            birthdayUser : "01/01/1989",
            emailUser : "toto@gmail.com"

        }
    ]







}