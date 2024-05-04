//introduction
/*function AppViewModel() {
    this.firstName = "Bert";
    this.lastName = "Bertington";
}
ko.applyBindings(new AppViewModel());*/


// Making the data editable----obser----
/*function AppViewModel() {
    this.firstName =ko.observable( "Bert");
    this.age =ko.observable("Bertington");
}
ko.applyBindings(new AppViewModel());*/


//Defining computed values
/*function AppViewModel() {
    this.firstName =ko.observable( "Bert");
    this.age =ko.observable("Bertington");
    this.fullName =ko.computed(function(){
        return this.firstName()+" "+this.age()
    },this);
}
ko.applyBindings(new AppViewModel());*/


//capitalizeLastName 
/*function AppViewModel() {
    this.firstName =ko.observable( "Bert");
    this.age =ko.observable("Bertington");
    this.fullName =ko.computed(function(){
        return this.firstName()+" "+this.age()
    },this);

    this.capitalizeLastName=function(){
        var valu=this.firstName()
        this.firstName(valu.toUpperCase(0))
    }
}


ko.applyBindings(new AppViewModel());*/


let obj={
    firstName:'zara'
};

ko.applyBindings(obj)
