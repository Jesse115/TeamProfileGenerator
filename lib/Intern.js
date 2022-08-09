class Intern {
    constructor (name, id, email, school){
        this.name = name;
        this.id = id;
        this.email = email; 
        this.school = school;
    }

    getName(){
        return this.name;
    }
    getid(){
        return this.id;
    }

    getemail(){
        return this.email;
    }
    getrole(){
        return "Intern"
    }
    getschool(){
        return this.school
    }
}
module.exports = Intern