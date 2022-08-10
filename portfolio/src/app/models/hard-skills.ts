export class HardSkills {
    id?: number;
    hardSkill: String;
    technology: String;
    mastery: number;
    
    
    constructor(hardSkill: String, technology: String, mastery: number) {
        this.hardSkill = hardSkill;
        this.technology = technology;
        this.mastery = mastery;

    }
}
