const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

function containsA(){
  //Variavel que guarda o total de ocorrencias das letras a e A
  let totalOfLetttersA = 0
  //Para cada uma das palavras, contar quantas vezes a letra aparece
  names.forEach((name) =>{ //name agora é cada um dos elementos do array names
  //dentro do forEach cada um dos nomes é uma string. Precisamos transforma-lo em array. Vamos usar split
  const lettersFromName = name.split(''); //isso fará com que as strings se tranformem em array, e cada uma das letras se transforme em um array[index]
    //Agora quero REDUZIR cada uma das palavras, a um numero, o numero de vezes que a letra aA aparece
    totalOfLetttersA += lettersFromName.reduce((lettersAInName, currentLetter) => {
  //Variavel já existente +                  acc, cur = Acumulador vai receber 
  //vai ser somada ao resultado do            quantas vezes a letra aA aparece
  //reduce citado acima                       current é a letra atual, uma vez que 
  //                                          usamos o split para transformar cada letra em um [index]
  if (currentLetter === 'a' || currentLetter === 'A') {
    return lettersAInName + 1;
  }//nesse If: se a letra atual (reduce vai percorrer todas) for igual aA 
  //lettersAInName recebe + 1  Caso não seja igual aA, apenas lettersAInName sem incrementar seu valor:
  return lettersAInName;
  }, 0)  
});
  return totalOfLetttersA;
}
console.log(containsA());