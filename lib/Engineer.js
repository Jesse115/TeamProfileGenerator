class Engineer {
    constructor (name, id, email, github){
        this.name = name;
        this.id = id;
        this.email = email; 
        this.github = github
    }

    getName(){
        return this.name;
    }
    getid(){
        return this.id;
    }

    getGithub(){
        return this.github;
    }
    getemail(){
        return this.email;
    }
    getrole(){
        return "Engineer"
    }
}
module.exports = Engineer