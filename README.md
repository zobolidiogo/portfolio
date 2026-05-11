# Archivum — Portfólio Pessoal

Portfólio single page em **HTML + CSS + JavaScript puro**.
Estética dark academia / vintage sofisticado, totalmente responsivo.

## Estrutura

```
portfolio/
├── index.html
├── style.css
├── script.js
└── assets/
    ├── portrait.jpg
    ├── project1.jpg
    ├── project2.jpg
    ├── project3.jpg
    ├── project4.jpg
    └── parchment.jpg
```

## Como rodar

1. **Abrir direto**: dê duplo clique em `index.html`.
2. **Live Server (VS Code)**: instale a extensão *Live Server*, clique com o botão direito em `index.html` → *Open with Live Server*.
3. **Servidor Python rápido**:
   ```bash
   python3 -m http.server 8080
   ```
   Acesse `http://localhost:8080`.

## Como editar

- **Textos e dados pessoais**: tudo em `index.html` — basta procurar pelos placeholders (Seu Nome, Empresa Exemplar, etc.).
- **Cores e fontes**: variáveis CSS no topo de `style.css` (`:root { ... }`).
- **Imagens**: substitua os arquivos em `assets/` mantendo os mesmos nomes.

## Publicar gratuitamente

- **GitHub Pages**: faça push para um repositório, vá em *Settings → Pages → Deploy from branch* e escolha `main /root`.
- **Netlify** ou **Vercel**: arraste a pasta inteira no painel — deploy em segundos.
- **Cloudflare Pages**: conecte o repositório, sem build, output `/`.
