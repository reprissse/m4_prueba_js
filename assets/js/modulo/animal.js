// clase Animal
class Animal {
    // constructor
    constructor(name, age, images, comments, sound) {
        this._name = name;
        this._age = age;
        this._images = images;
        this._comments = comments;
        this._sound = sound;
    }

    // métodos get
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }
    get images() {
        return this._images;
    }
    get comments() {
        return this._comments;
    }
    get sound() {
        return this._sound;
    }

    //  método set
    set comments(comments) {
        this._comments = comments;
    }
}

// Exportamos 
export default Animal;