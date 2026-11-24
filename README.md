# landingpage

Landing page de um nutricionista clínico e comportamental de Brasília, com planos de acompanhamento e agendamento de consulta pelo WhatsApp.

Site · Web (Next.js) · 2026

[Página no ar](https://landingpage-lilac-two.vercel.app)

## O que faz

- Apresenta o profissional, a filosofia de trabalho e o método de atendimento (consulta inicial, plano construído junto, acompanhamento ativo e educação nutricional).
- Mostra os planos (consulta individual, trimestral e semestral) com o que cada um inclui.
- Tem galeria de fotos do atendimento e seção de depoimentos.
- Leva para o WhatsApp com uma mensagem pronta para cada plano.
- Layout responsivo, com fotos otimizadas pelo `next/image`.

## Meu papel

Projeto solo: desenvolvi o site, de 08/05/2026 a 14/05/2026. Os seis commits do repositório são de Cauê Carneiro.

## Como foi feito

- **Next.js 16 com App Router:** a página é montada em `src/app/page.tsx` a partir de componentes em `src/components/` (`Header`, `Hero`, `About`, `Philosophy`, `Method`, `Gallery`, `Testimonials`, `Services`, `Contact`, `Footer`).
- **Estilo com Tailwind CSS 4:** as cores da marca ficam como variáveis em `src/app/globals.css` (prefixo `pm-`).
- **Fontes com `next/font`:** Inter e Playfair Display.
- **Metadados de SEO** (título, descrição, palavras-chave e Open Graph) definidos em `src/app/layout.tsx`.
- **Deploy na Vercel.**

## Tecnologias

Next.js 16, React 19, TypeScript, Tailwind CSS 4, ESLint.

## Como rodar

Requisitos: Node.js e npm.

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000). Outros comandos: `npm run build`, `npm start` e `npm run lint`.

## Licença

[MIT](LICENSE).

---
Feito por Cauê Crillanovick · [portfólio](https://cauecarneiro.github.io/portfolio/) · [LinkedIn](https://www.linkedin.com/in/cau%C3%AA-carneiro)
