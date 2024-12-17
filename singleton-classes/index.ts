// singleton-classes
// if class have only one instance then that class called as singleton-class

// But in this approach there might be chances of creating new object of this class 
class SingletonClass {
  games: { name: string; price: number }[] = [];
  constructor() {
    this.games = [];
  }

  addGame() {
    this.games.push({
      name: "Game1",
      price: 100,
    });
  }

  log(){
    console.log(this.games)
  }

};

// this will work as singleton class
export const singletonInstance = new SingletonClass();
