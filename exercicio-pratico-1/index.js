import { Aluno } from './Aluno.js';
import { TurmaPresencial } from './TurmaPresencial.js';

const aluno = new Aluno('João', 'joao123', '12345');
const turma = new TurmaPresencial('ES46G', 8.5, 90);

console.log(aluno);
console.log(turma.aprovado());