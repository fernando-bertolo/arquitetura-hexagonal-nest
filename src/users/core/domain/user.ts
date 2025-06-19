export class User {
    private nome: string;
    private email: string;
    private senha: string;

    constructor(nome: string, email: string, senha: string) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    getNome(): string {
        return this.nome;
    }

    getEmail(): string {
        return this.email;
    }

    getSenha(): string {
        return this.senha;
    }
}
