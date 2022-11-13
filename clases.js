class User {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
        this.books = [];
        this.pets = []
    }

    getFullName () {
        return `${this.name} ${this.surname}`
    }

    addPet (pet) {
        return this.pets.push(pet)
    }

    countPets (){
        return this.pets.length
    }

    addBook(nameBook, autor) {
        const book = {
            name : nameBook,
            autor : autor
        }
        return this.books.push(book)
    }

    getBookNames() {
        const arrayBooksNames = this.books.map(book => 
            book.name
        )
    
        return arrayBooksNames
    }
}

const user = new User('Pepe', 'Argento')
user.getFullName()
user.addPet('Perro')
user.addPet('Gato')
user.countPets()
user.addBook('Harry Potter', 'J.K Rowling')
user.addBook('El principito', 'Antoine de Saint-Exupéry')
