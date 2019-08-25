class human{
    constructor(name,age,gender,stamina){
        this._name=name;
        this._age=age;
        this._gender=gender;
        this._stamina=stamina;
    }
    set age(newAge){
        this._age = newAge;
    }
    get age(){
        console.log(this._age+ " years");
    }
    walk(){
        if(this._stamina >= 2){
        console.log(this._name+"Walked");
        this._stamina -= 2;
        }
        else{
            this.consumeDrink();
            this.walk();
        }
    }
    talk(){
        if(this._stamina >= 4){
            console.log(this._name+"talked");
            this._stamina -= 4;
        }
        else{
            this.consumeDrink();
            //this.talk();
        }

    }
    consumeDrink(){
        this._stamina += 5;
        console.log(this._name+"regained Stamina!");
    }
}
   sathya = new human("sathya",20,"male",10);
   const someAge = sathya.age//getters
   sathya.age=34;//setters
    
