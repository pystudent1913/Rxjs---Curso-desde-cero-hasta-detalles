import { Observable, Observer } from 'rxjs';

/**
 * TERCERA CLASE
 * 
 * Subscription and unsubscribe 
 * En el caso del intervale RXJS nos ofrece un 
 * metodo con la funcionalidad de cancelacion ya creada
 */


const observer: Observer<any> = {
  next: value => console.log('next => ', value),
  error: err => console.warn('err => ', err),
  complete: () => console.info('completado')
}


const intervalo$ = new Observable<number>( subs => {

  let contador = 0;
  // Crear un contador 1,2,3,4,5

  const intervalo = setInterval( () => {
    //cada segundo
    contador++;
    subs.next(contador)
  }, 1000);

  return () => {
    clearInterval(intervalo);
    console.log('intervalo destruido')
  }
})
 
const subs1 = intervalo$.subscribe( num => {
  console.log('num -> ', num);
});
const subs2 = intervalo$.subscribe( num => {
  console.log('num2 -> ', num);
});
const subs3 = intervalo$.subscribe( num => {
  console.log('num -> ', num);
});


setTimeout(() => {
  
  subs1.unsubscribe();
  subs2.unsubscribe();
  subs3.unsubscribe();

}, 3000);





