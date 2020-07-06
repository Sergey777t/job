// // // // class User  {

// // // //  constructor (name) {

// // // //  this.name = name
// // // //   };

// // // // get name () {
// // // //   return this._name ;
// // // // }
// // // // set name (value) {
// // // // if (value.length<4) {
// // // //   alert ('Слишком короткое значение');
// // // //   return;
// // // // } 
// // // // else {
// // // //   this._name = value;
// // // // }
// // // // }
// // // // }

// // // // let user = new User ('ВАСЯ');

// // // // console.log (user)
 
// // // // let obj  = {
// // // //   sourname: 'ПЕТЯ',
// // // //   age: 11
// // // // }



// // // // let  obj2 =  Object.defineProperties ({}, Object.getOwnPropertyDescriptors(obj))

// // // // console.log (obj2)
// // // // console.log (obj)
// // // // // delete obj2.age
// // // // console.log (obj2)
// // // // console.log (obj)
// // // // console.log  (Object.defineProperty (obj2, 'name2', {
// // // // value:'Sergey', configurable: true, writable: true,}))
// // // // console.log (Object.getOwnPropertyDescriptors (obj2))


// // // // function Rabbit(n) {
 
// // // // };
// // // // let abbit = new Rabbit('n');

// // // // console.log(abbit);
// // // // let rabbit3 = new rabbit.constructor ('b');
// // // // console.log(rabbit3);


// // // // class User   {
// // // // constructor (name)  { this.name = name };
// // // // say () {alert ('PRIVET'); 
// // // // };
// // // // }
// // // // let c  = new User(1)
// // // // let a  = new User(2)
// // // // console.log(c);
// // // // console.log(a)
 
// // // function Clock({ template }) {
  
// // //   let timer;

// // //   function render() {
// // //     let date = new Date();

// // //     let hours = date.getHours();
// // //     if (hours < 10) hours = '0' + hours;

// // //     let mins = date.getMinutes();
// // //     if (mins < 10) mins = '0' + mins;

// // //     let secs = date.getSeconds();
// // //     if (secs < 10) secs = '0' + secs;

// // //     let output = template
// // //       .replace('h', hours)
// // //       .replace('m', mins)
// // //       .replace('s', secs);

// // //     console.log(output);
// // //   }

// // //   this.stop = function() {
// // //     clearInterval(timer);
// // //   };

// // //   this.start = function() {
// // //     render();
// // //     timer = setInterval(render, 1000);
// // //   };

// // // }

// // // let clock = new Clock({template: 'h:m:s'});
// // // clock.start();


// let c = [22,33,44]
// for (let key of c ) {

//   if (!isNaN[key]) {
//     alert ('Это число')
//      alert ([key])
//      alert (c[1])
//   }

//   else (

//     alert ('Это строка')
//   )
// }

// let arr = [];



// for (let i = 0; i<1;i++)
// {
// let c = prompt ('введите значения',  )  
// arr = c.split  (', ');
     
//    for (let key of arr  )  { 
//      alert ([key])
//     if ([key]=='1')  { 
//     arr.length = 0;
//     alert ('обнулил')
//     i--;
//   }
// }
 
// }


// let arr  =  [11,'dfgfdg']

// // arr.forEach ((item, coul) => {
// // alert (item);
// // alert (typeof item)
// // })

//  for  (let key of arr ) {
// alert ( [key]) ;
// alert ( Number.isNaN ([key]))
// }

// console.log (arr)