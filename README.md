# 👓 Ótica Moderna - SPA

Uma Single Page Application (SPA) moderna e elegante para ótica, desenvolvida com **Vite + React + TypeScript**.

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool rápida e moderna
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **shadcn/ui** - Componentes UI reutilizáveis

## ✨ Funcionalidades

- ✅ Tema Dark/Light com persistência via localStorage
- ✅ Navegação suave entre seções
- ✅ Catálogo de armações com filtros
- ✅ Preços de lentes detalhados
- ✅ Carrossel de marcas parceiras
- ✅ Sistema de avaliações
- ✅ Mapa integrado do Google Maps
- ✅ Botão flutuante do WhatsApp
- ✅ Design responsivo (mobile-first)
- ✅ Animações suaves e elegantes

## 📦 Instalação

```bash
# Instalar dependências
npm install

# Ou com pnpm
pnpm install
```

## 🏃 Executar o Projeto

```bash
# Modo desenvolvimento
npm run dev

# Ou com pnpm
pnpm run dev
```

O projeto estará disponível em `http://localhost:5173`

## 🏗️ Build para Produção

```bash
# Gerar build otimizado
npm run build

# Preview do build
npm run preview
```

## 📂 Estrutura de Pastas

```
src/
 ├─ assets/          → Imagens e recursos estáticos
 ├─ components/      → Componentes React
 │   ├─ ui/          → Componentes UI do shadcn/ui
 │   ├─ Header.jsx
 │   ├─ Hero.jsx
 │   ├─ Frames.jsx
 │   ├─ Lenses.jsx
 │   ├─ Brands.jsx
 │   ├─ Reviews.jsx
 │   ├─ Contact.jsx
 │   ├─ Footer.jsx
 │   └─ WhatsAppButton.jsx
 ├─ context/         → Context API (ThemeContext)
 ├─ App.jsx          → Componente principal
 ├─ App.css          → Estilos globais
 └─ main.jsx         → Ponto de entrada
```

## 🎨 Paleta de Cores

### Light Mode
- Background: Branco e tons de cinza claro
- Accent: Azul-petróleo (#0891b2)
- Text: Cinza escuro

### Dark Mode
- Background: Grafite e azul-escuro
- Accent: Ciano (#22d3ee)
- Text: Branco e cinza claro

## 📱 Seções

1. **Hero** - Seção inicial com call-to-action
2. **Armações** - Catálogo de armações com filtros
3. **Lentes** - Tipos de lentes e preços
4. **Marcas** - Carrossel de marcas parceiras
5. **Avaliações** - Depoimentos de clientes
6. **Contato** - Informações de contato e mapa
7. **Footer** - Links úteis e informações

## 🔧 Customização

Para personalizar o projeto:

1. **Cores**: Edite as variáveis CSS em `App.css`
2. **Conteúdo**: Modifique os dados nos componentes
3. **WhatsApp**: Altere o número em `WhatsAppButton.jsx`, `Frames.jsx` e `Lenses.jsx`
4. **Mapa**: Atualize as coordenadas em `Contact.jsx`

## 📄 Licença

Este projeto é de código aberto e está disponível sob a licença MIT.

---

Desenvolvido com ❤️ para Ótica Moderna
