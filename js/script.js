// Обьекты

// let man = {
//     name: "Roma",
//     surname: "Sadikov",
//     age: 23,
//     ismaried: false,
//     car: {
//         model: "BMW",
//         color: "black"
//     }    
// }
// man.age = man.age + 1
// man.ismaried = true
// man.house = true
// console.log(man);
// console.log(man.name); // Таким образом мы можем вытаскивать определенный обьект в консоль
// Object.freeze(man) // все действия после него заморозились 
// man.age = man.age + 1
// man.ismaried = true
// man.house = true //создание ключа
// man.ismaried = false
// Object.freeze(man.car) 
// delete man.house // Удаление ключа
// man.car.model = "Chaleger" // Изменения ключа который является обьектом         or = > // man.car.model.replace(/BMW/, "Chalenger")
// man.car.color = "red and white line center"
// man.car.garant = true
// console.log(man); ..........................................................

// Проверим обьекты на тип данных
// console.log(typeof(man.));

// Что нельзя делать с обьектом?
// console.log(man.toString()); // нельзя!
// console.log(); // alert - нельзя!

// Массивы
// Массив это коробка без обьектов
// let arr = [1, true, man, man.age, 'hello', [1,2,3,4,5,6,]]
// console.log(Array.isArray(man)); // Проверка на подлинность массива
// console.log(arr);

// let keys = Object.keys(man) // вытаскивает ключи в консоль так как они называются, только названия ключей
// let value = Object.values(man) // вытаскивает значения без названия ключей 

// console.log(keys);    ...............................
// console.log(values);



// const target = {a: 1, b: 2};
// const source = {b:4, c: 5};

// const returnedTarget = Object.assign(target, source); // обьединение обьектов
// console.log(target);









// Домашки:

// Task 1
// у вас есть 3 вопроса
// спрашивает ваше имя
// фамилию
// женаты ли вы
 // создать обьект с этими значениями

//  let name = prompt ('Как вас зовут?')
//  let surname = prompt ('Как ваша фамилия?')
//  let married = confirm ('Вы женаты?')

//  let object = {
//        name,
//        surname,
//        married
//  }
//  console.log(object);



// Task 2
 // поменяйте значения a и b местами 
 // не используя дополнительных переменных
//  let a = 2
//  let b =  3
//  console.log(a + 1 );
//  console.log( b - 1 );



// Task 3
 // из банковской системы создать 2 аккаунта 
 // 2 обьекта 
 // и сделать банковскую систему на 2 человек

 let name1 = "Clyde"
 let account = 10000
 let password1 = 7777 

 let name2 = "Bonnie"
 let password2 = 6666

 
 let your_name = prompt('Введите ваше имя.')
 if (your_name == name1 || your_name == name2) {
    let password_answer = +prompt('Введите пароль')

    if (cash_out <= account ) {
        let done = alert ('Снято')
        let cash_out = +prompt('Сколько обналичить?')
        if (done = true) {
            alert(`Снято: ${cash_out} и у вас осталось ${account - cash_out}`)
            
        } else {
            alert ("Недостаточно средств")
        }
    }else {
        alert ("Ошибка")
    }

    if (password_answer == password1 || password_answer == password2) {
        let pass_ans = alert ('Далее')
    } else {
        alert ("Введен неправильный пароль")
    } 
 }
 else {
    alert("Пользователь не найден, досвидули");
 }








// Task 4
 /*let a = {price: 30}
 let b = {price: -40}
 let c = {price: 50}*/
 // объеденить и посмотреть ответ
 // в переменую тотал сложить все прайсы и дать ответ
  
//  let a = {price: 30}
//  let b = {price: -40}
//  let c = {price: 50}

//  let returnedTarget = Object.assign(a,b,c);
//  console.log(returnedTarget);
//  let total = a.price + (b.price) + c.price 
//  console.log(total);





 

 

