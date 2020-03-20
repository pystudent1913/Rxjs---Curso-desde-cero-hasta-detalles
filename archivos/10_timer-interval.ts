import { interval, timer } from 'rxjs';

/**
 * 10 Interval y Timer
 * 
 * Interval => nos dice cada cuanto tiempo emitira una señal
 * 
 * Timer => nos dice luego de cuanto tiempo emitira la señal
 */


const interval$ = interval(1000);

// console.log('inicio')
interval$.subscribe(interval => {
  console.log('interval => ', interval)
})
// console.log('fin')

// const timer$ = timer(2000);
/**
 * Aunque le ponga zero segundos el timer se ejecutara cuando el callstack se libere osea cuando haya ejecutado los consoles de inicio fin y cualquier otro que exista
 */
// const timer$ = timer(2000, 1000);
// timer$.subscribe(time => {
//   console.log('time => ', time)
// })


// interesante programar una accion
const en5Minutos : Date = new Date();
en5Minutos.setMinutes( en5Minutos.getMinutes() + 1);

const timer$ = timer(en5Minutos);

timer$.subscribe(time => {
  console.log('en un minuto sonara')
})






