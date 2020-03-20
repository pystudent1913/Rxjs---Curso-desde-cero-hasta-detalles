import { of, range, asyncScheduler } from 'rxjs';

/**
 * 09 Range
 * 
 * Secuencia de numeros en base a un rango
 */

// const src$ = of(...[1,2,3,4,5]);
const src$ = range(1, 5, asyncScheduler);
 
/**
 * hasta ahora son sincronos
 * primer inicio luego los prints y al final fin
 * 
 * Y si agregamos asyncScheduler saldriana inicio fin y los prints
 */
console.log('inicio')
src$.subscribe(next => {
  console.log('next => ', next);
})
console.log('fin')




