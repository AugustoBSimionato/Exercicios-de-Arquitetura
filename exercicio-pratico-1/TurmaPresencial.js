import { Turma } from "./Turma.js";

class TurmaPresencial extends Turma {
    #frequencia;

    constructor(codigo, nota, frequencia) {
        super(codigo, nota);
        this.#frequencia = frequencia;
    }

    aprovado() {
       return true;
   }
}

export { TurmaPresencial };