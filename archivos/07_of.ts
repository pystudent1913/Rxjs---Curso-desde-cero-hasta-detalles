import { of } from 'rxjs';


const obs$ = of<number>(...[1,2,3,4,5,6])

console.log('inicio del obs');
obs$.subscribe( next => {
    console.log('next => ', next)
  },
  null,
  () => console.log('se termino')
);
console.log('fin del obs');

// const obs$ = of( 
//     [1,2,3], 
//     {a:2, b:3},
//     () => {},
//     true,
//     Promise.resolve(true)
//   );


// console.log('inicio del obs');
// obs$.subscribe( next => {
//     console.log('next => ', next)
//   },
//   null,
//   () => console.log('se termino')
// );
// console.log('fin del obs');
