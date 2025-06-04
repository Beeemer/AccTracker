let library = [
    {
        author: 'Иван Вазов',
        title: 'Под игото',
        readingStatus: true
    },
    {
        author: 'Димитър Димов',
        title: 'Тютюн',
        readingStatus: true
    },
    {
        author: 'Захари Стоянов',
        title: 'Записки по българските въстания',
        readingStatus: false

    },
    function setRead(){
        this.readingStatus = true;
    }];

library[2].readingStatus = true;
library.push(library.author = "Димитър Талев", library.title = "Железният Светилник", library.readingStatus = true);
library.push(library.author = "Алеко Константинов", library.title = "Бай Ганьо", library.readingStatus = true);
library.push(library.author = "Пейо Яворов", library.title = "Две души", library.readingStatus = true);
console.log(library);

let arr = [1,2,"3",true,"false",null,undefined,2n,{author: "Захари Стоянов", title: 'Записки по българските въстания'}]
arr.unshift(12);
arr.pop();
arr.push("Здравей, Свят!");

function checkForNumber(){
    for(let el of arr){
        if(typeof el === "number"){
            el = el/2;
            console.log(el);
        }
    }
}
checkForNumber();
