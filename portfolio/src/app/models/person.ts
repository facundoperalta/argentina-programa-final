export class Person {
    id?: number;
    firstName: String;
    lastName: String;
    birthDate: Date | any;
    place: String;
    occupation: String;
    profileImage: String;
    about: String;

    constructor(firstName: String, lastName: String, birthDate: Date, place: String, occupation: String, profileImage: String, about: String) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.place = place;
        this.occupation = occupation;
        this.profileImage = profileImage;
        this.about = about;

    }

}
