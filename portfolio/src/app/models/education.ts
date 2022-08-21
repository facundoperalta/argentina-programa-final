export class Education {
    id?: number;
    degree: String;
    year: number;
    institution: String;
    finished: boolean;
    logoEdu: String;
    
    constructor(degree: String, year: number, institution: String, finished: boolean, logoEdu: String) {
        this.degree = degree;
        this.year = year;
        this.institution = institution;
        this.finished = finished;
        this.logoEdu = logoEdu;
    }
}
