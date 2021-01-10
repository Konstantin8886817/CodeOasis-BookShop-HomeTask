import books from './books.json';

export default class BookService{
    static getAllBooks(){
        return new Promise(resolve => {
           setTimeout(()=>{
               resolve(books);
           },500);
        });
    }

    static findBookById(id){
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                const book = books.find(book => book.id === id);
                if(book){
                    return resolve(book);
                }
                reject({message:`Book with id: ${id} not found!`})
            },500);
        })
    }
}
