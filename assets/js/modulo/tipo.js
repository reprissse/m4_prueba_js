// importamos Animal
import Animal from "./animal.js";

// Obtenemos el elemento del reproductor
const player = document.getElementById("player");

// función para sonido de un animal
function playSound(sound) {
  player.src = sound;
  player.play();
}

// clase leon
class Leon extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }

  // metodo rugir
  rugir() {
    playSound(this._sound);
  }
}

// clase lobo
class Lobo extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }

  //metodo aullar
  aullar() {
    playSound(this._sound);
  }
}

//clase oso
class Oso extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }
//metodo gruñir
  gruñir() {
    playSound(this._sound);
  }
}

//clase serpiente
class Serpiente extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }

  //metodo sisear
  sisear() {
    playSound(this._sound);
  }
}


//clase aguila
class Aguila extends Animal {
  constructor(name, age, images, comments, sound) {
    super(name, age, images, comments, sound);
  }

//metodo chillar
  chillar() {
    playSound(this._sound);
  }
}

// exportamos animales
export { Leon, Lobo, Oso, Serpiente, Aguila };