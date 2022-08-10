export class Projects {
    id?: number;
    project: String;
    description: String;
    address: String;
    projectImage: String;

    
    
    constructor(project: String, description: String, address: String, projectImage: String) {
        this.project = project;
        this.description = description;
        this.address = address;
        this.projectImage = projectImage;

    }
}
