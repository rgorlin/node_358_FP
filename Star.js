class Star{
    Star(name, date_uploaded, price, description){
        this.name = name;
        this.date_uploaded = date_uploaded;
        this.price = price;
        this.description = description;

        this.getName = function(){
            return this.name;
        };
        this.date_uploaded = function(){
            return this.date_uploaded;
        };
        this.price = function(){
            return this.price;
        };
        this.description = function(){
            return this.description;
        };
    }
}

module.exports = Class;