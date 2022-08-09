class Manager {
    constructor (name, id, email, officeNumber){
        this.name = name;
        this.id = id;
        this.email = email; 
        this.officeNumber = officeNumber;
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
    getofficeNumber(){
        return this.officeNumber
    }
    getrole(){
        return "Manager"
    }
}
module.exports = Manager