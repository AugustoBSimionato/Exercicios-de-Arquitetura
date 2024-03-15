class Turma {
    #codigo;
    #nota;

    constructor(codigo, nota) {
        this.#codigo = codigo;
        this.#nota = nota;
    }

    aprovado() {
        return true;
    }
}

export { Turma };