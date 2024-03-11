// IN this program, We will see the class and object of OOPs
// This program is written by Quasim Khan


class Car{


    constructor(){
        console.log("Car created");
    }
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }
}

const Toyota = new Car()

Toyota.start();
Toyota.stop()