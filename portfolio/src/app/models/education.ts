export class Education {
    id?: number;
    degree: String;
    year: Number;
    institution: Date;
    finished: boolean;
    logoEdu: String;
    
    constructor(degree: String, year: Number, institution: Date, finished: boolean, logoEdu: String) {
        this.degree = degree;
        this.year = year;
        this.institution = institution;
        this.finished = finished;
        this.logoEdu = logoEdu;

    }
}
