// 2 - Baixe o arquivo destructuring.js, e apenas utilizando o conceito de desestruturação desestruture esse array trazendo 
// o seguinte resultado "Chris Ahmad Antigoni Toby Sam Antony Brad"

const moreStudents = [
    'Chris',
    ['Ahmad', 'Antigoni'],
    ['Toby', 'Sam'],
    { name: "Antony" },
    { fullname: { firstName: "Brad", secondName: "Pitt" } }
];


const [student1, [student2, student3], [student4, student5], { name: student6 }, { fullname: { firstName: student7 } }] = moreStudents;

console.log(student1, student2, student3, student4, student5, student6, student7);

