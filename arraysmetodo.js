// Exercício

const  funcionarios  =  [
    {
        id : 1 ,
        nome : 'Davis' ,
        salario : 2500 ,
    } ,
    {
        id : 2 ,
        nome : 'Breno' ,
        salario : 3100 ,
    } ,
    {
        id : 3 ,
        nome : 'Karen' ,
        salario : 3200 ,
    } ,
    {
        id : 4 ,
        nome : 'Camila' ,
        salario : 2300 ,
    } ,
    {
        id : 5 ,
        nome : 'Julio' ,
        salario : 1400 ,
    } ,
] ;



funcionarios . forEach ( ( funcio )  =>  console . log ( `Funcionário: $ { funcio . nome } têm o sálario $ $ { funcio . salario } reais` ) ) ;
// Reajuste
console . log ( '' )
deixe  newSalario  =  funcionarios . map ( ( novoSalario )  => {
    deixe  reaju  =  novoSalario . salario  *  0,05 ;

      voltar  reaju  +  novoSalario . salario ;

} ) ;

console . log ( `Com o reajuste: $ { newSalario } ` )
console . log ( '' )

// Recebem mais de 5000
let  filtroSalario  =  newSalario . filtro ( ( salari )  => {
    retorno  salari  > =  7000 ;
} )

console . log ( `O salário mais alto: $ { filtroSalario } ` ) ;
console . log ( '' )


// Pesquisar o funcionário Wally
console . log ( funcionarios . find ( ( funcionario )  => {
    console . log ( 'Dados do funcionario:' )
    retorno  funcionario . nome  ===  'Davis' ;
} ) ) ; 