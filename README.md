# React Lista 05

Projeto React com Vite configurado para publicar no GitHub Pages.

## Rodar localmente

```bash
npm install
npm run dev
```

## Gerar build de producao

```bash
npm run build
```

## Publicar no GitHub Pages

Antes de publicar, confirme se o nome do repositorio no GitHub e `reactlista05`.

Se mudar o nome do repositorio, atualize estes dois pontos:

- `homepage` no `package.json`
- `base` no `vite.config.js`

Depois, execute:

```bash
npm install
npm run deploy
```

## Passo a passo no GitHub

1. Crie um repositorio no GitHub com o nome `reactlista05`.
2. Envie os arquivos do projeto para esse repositorio.
3. Rode `npm run deploy`.
4. Abra o repositorio no GitHub e va em `Settings > Pages`.
5. Confirme se a publicacao esta usando a branch `gh-pages`.

## URL esperada

Se o usuario for `Fernandofgs91` e o repositorio continuar com o nome atual, a pagina ficara em:

`https://Fernandofgs91.github.io/reactlista05/`
