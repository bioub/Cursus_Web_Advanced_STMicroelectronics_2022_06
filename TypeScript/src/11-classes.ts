class Contact {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  hello() {
    return `Hello ${this.name}`;
  }
}


const romain = new Contact('Romain');

// la classe est une vraie en TS
// on ne pas supprimer des propriétés / méthodes
// comme en JS
// delete romain.name;

console.log(romain.name);


function useContact(contact: Contact) {
  console.log(contact.name);
}

// Héritage
class Trainer extends Contact {
  speciality: string;

  constructor(name: string, speciality: string) {
    super(name);
    this.speciality = speciality;
  }

  hello() {
    return super.hello() + `, my speciality is ${this.speciality}`;
  }
}

const trainer = new Trainer('Romain', 'TypeScript');

console.log(trainer.name);
console.log(trainer.speciality);
console.log(trainer.hello());

