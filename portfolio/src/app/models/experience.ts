export class Experience {
    id?: number;
    job: String;
    institution: String;
    description: String;
    started: number;
    finished: number;
    logoExp: String;
    continues: Boolean;
    
    
    constructor(job: String, institution: String, description: String, started: number, finished: number, logoExp: String, continues: boolean) {
        this.job = job;
        this.institution = institution;
        this.description = description;
        this.started = started;
        this.finished = finished;
        this.logoExp = logoExp;
        this.continues = continues;

    }
}
