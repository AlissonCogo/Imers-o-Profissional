class Animal {

}

interface animalQueVoa2{
    voa(): void;
}

class Aguia extends Animal implements animalQueVoa2{
    voa(): void {
        console.log("Voando");
    }
}

class Galinha extends Animal implements animalQueVoa2{
    voa(): void {
        console.log("Batendo bem forte , mas não sai do lugar");
    }
}

interface animalQueLate {
    latir(): void;
}

class Cachorro extends Animal implements animalQueLate{
    latir(): void {
        console.log("Au Au");
    }
}

function decolar(animal: animalQueVoa2): void{
    animal.voa();
    console.log("aaaaaaaaaaaaaaaaaaaaa")
}

function protegerCasa(animal: animalQueLate){
    console.log("aaaaaaaaaaaaaaaaaaaaa")
}


const gaviao = new Aguia();
const cachorroLoco = new Cachorro();
protegerCasa(cachorroLoco)
decolar(gaviao);

// const pinsher = new Cachorro();
// decolar(pinsher);


