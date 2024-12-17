class SingletonPattenExample {
    private static instance : SingletonPattenExample;
    games : string[];

    private constructor(){
        this.games = [];
    }

    // static means we can access this method without creating an instance of the class
    // static attributes are associates with the class itself, not with instances of the class
    static getInstance() {
        // if (this.instance) {
        if (SingletonPattenExample.instance) {

            // return this.instance;
            return SingletonPattenExample.instance;
        }
        
        // this.instance = new SingletonPattenExample();
        SingletonPattenExample.instance = new SingletonPattenExample();
        
        // return  this.instance;
        return  SingletonPattenExample.instance;
    }

    addGame(){
        this.games.push("game1")
    }
}
