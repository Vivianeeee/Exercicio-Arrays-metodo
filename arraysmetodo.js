// Exercício

/ ** O método percorre automaticamente os elementos do array.
O método pode executar uma função sobre cada elemento da matriz. * /

// Método forEach ()
const  frutas  =  [ 'Uva' ,  'Pera' ,  'Caqui' ,  'Ameixa' ] ;
frutas . forEach ( minhaFuncao ) ;
function  minhaFuncao ( item ,  index )  {
console . log ( `Índice: $ { index } ` ) ;
console . log ( `Elemento: $ { item } ` ) ;
}

/ ** função seta O, é uma forma muito mais prática e que
também torna o código mais enxuto e elegante. Utilizando
o mesmo código anterior com função de seta:
 * /

// Método forEach () com função de seta
console . limpar ( ) ;
const  frutas01  =  [ 'Uva' ,  'Pera' ,  'Caqui' ] ;
frutas . forEach ( ( índice ,  item )  =>  {
console . log ( `Índice: $ { index } ` ) ;
console . log ( `Elemento: $ { item } ` ) ;
} ) ;

// forEach () com array de objetos
console . limpar ( ) ;
 tarefas  constantes =  [
{
id : 1 ,
texto : 'Levar o lixo para fora' ,
isCompleted : false ,
} ,
{
id : 2 ,
texto : 'Encontrar com o chefe' ,
isCompleted : true ,
} ,
{
id : 3 ,
texto : 'Consulta no dentista' ,
isCompleted : false ,
} ,
] ;
tarefas . forEach ( ( teste )  =>  console . log ( teste . texto ) ) ;

/ ** O map () executa uma vez função para cada elemento de array que
possui um valor atribuído e constrói um novo array com base nos
valores retornados pela execução da função * /

// Método map ()
const  numeros  =  [ 5 ,  7 ,  18 ,  28 ] ;
const  newArray  =  numeros . mapa ( Math . sqrt ) ;  //Math.sqrt (Raiz quadrada)
console . limpar ( ) ;
console . log ( 'Números:' ) ;
console . log ( numeros ) ;
console . log ( 'Novo array:' ) ;
console . log ( newArray ) ;

/ ** O filtro () executa uma vez uma função para cada elemento de array que
possui um valor atribuído e constrói um novo array com os
elementos que retornarem true para uma condição no filtro.
 * /
// Filtro de método
console . limpar ( ) ;
const  idades  =  [ 38 ,  35 ,  18 ,  47 ] ;
let  filtroIdade  =  idades . filtro ( ( idade )  =>  {
voltar  idade  > =  19 ;
} ) ;
console . log ( filtroIdade ) ;

/ ** o find () executa uma função vez a para cada elemento de array e
retorna os valores que retornarem true para a condição configurada
sem filtro.
 * /

// Método find ()
console . limpar ( ) ;
const  meuArray  =  [
{ nome : 'Uva' ,  quantidade : 2  } , 
{ nome : 'Acerola' ,  quantidade : 0  } ,
{ nome : 'Pessego' ,  quantidade : 5  } , 
] ;

console . log (
meuArray . find ( ( fruta )  =>  {
return  fruta . nome  ===  'Pessego' ;
} )  ) ; 