# 🏗️ NestJS Hexagonal Architecture Project

Este projeto foi desenvolvido com o objetivo de **praticar e aplicar conceitos de Arquitetura Hexagonal (Ports and Adapters)** utilizando o framework [NestJS](https://nestjs.com/) na versão Node.js 24.

## 🚀 Tecnologias Utilizadas

- Node.js 24
- NestJS
- TypeScript
- Arquitetura Hexagonal (Ports and Adapters)
- ESLint & Prettier (Padronização de código)

## 🧠 Sobre a Arquitetura

O projeto é organizado seguindo os princípios da Arquitetura Hexagonal, priorizando **baixo acoplamento, alta coesão e facilidade na manutenção e testes**.

A estrutura é organizada por **contextos/domínios**, e dentro de cada contexto há separação clara entre:

- **Adapters:**  
  Interfaces de entrada (Controllers) e saída (Gateways, Repositórios, APIs externas, etc.).

- **Core:**  
  Contém as regras de negócio puras, os **Use Cases** e os **Entities**. Não depende de nenhuma tecnologia ou framework.

- **Composition Root:**  
  Arquivo responsável pela injeção de dependências do contexto, geralmente nomeado como `composition-root.ts`.

- **user.module.ts:**  
  Integração com o módulo do NestJS, conectando os adapters e os providers.

## 📂 Estrutura de Pastas

```plaintext
src/
 └── users/
     ├── adapters/           # Controllers, Gateways, e Repositories externos
     ├── core/               # Entities, Use Cases e regras de negócio
     ├── composition-root.ts # Injeção de dependências do contexto
     └── user.module.ts      # Módulo NestJS do contexto
