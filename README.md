# Rick and Morty - Desafio GZH

## 🧰 Tecnologias e Ferramentas

- **Next.js**  
  Utilizado por eu ter mais familiaridade com o NextJS, uso tanto em projetos locais como profissionalmente. Conheço bem como usar seus principais recursos.

- **Apollo Client**  
  Escolhido para realizar requisições GraphQL de forma otimizada e com cache automático. Além de eu conseguir gerenciar facilmente os estados de loading e error e poder apresentá-los ao usuário

- **Tailwind CSS**  
  Utilizado para estilização. Tenho grande familiaridade e por ser breakpoints (sm, md, lg) facilitam a não me preocupar com os tamanhos na hora da responsividade optei por Tailwind.

---

## 🚀 Como rodar o projeto localmente

I. Clone o repositório:

```bash
git clone https://github.com/gablsl/gzh-challenge.git
```

II - Instale as dependências

```bash
npm install
```

III - Rode o projeto

```bash
npm run dev
```

## ⚙️ Decisões Técnicas

- Escolha de NextJS por conta facilidade para configuração de SEO, rotas dinâmicas, páginas de erros customizáveis (404, 500) e poder usar o SSR para renderizar componentes e jogar menos JavaScript para o navegador, trazendo mais desempenho a aplicação.

- Foi adicionada uma validação extra nas rotas dinâmicas de personagens e planetas de origem para redirecionar à página 404 caso o ID seja inválido ou exceda o número total.

- Os componentes são modulares e reutilizáveis, priorizando organização e legibilidade.

- Escolha do TypeScript por conta forte tipagem, tornar o código mais legível e facilitar a manutenção

- Optei por não usar ContextAPI ou Redux pois como é um projeto simples e não criei nenhum estado que seria compartilhado entre vários componentes escolhi o useState por ser que julguei ser a melhor opção nesse caso e mais simples de ser implementado.

## 📌 Observações importantes

- Se o personagem ou a origem de um personagem não tiver ID (null), o link da página /character/null ou planet/null é evitado e a navegação não é exibida.

- Componente de Loading para dar uma feedback visual ao usuário de carregamento.

- Há uma página de erro para tratar problemas com a API (500) e uma página 404 personalizada.

- A aplicação é responsiva e adaptada para dispositivos móveis (tablet e mobile).
