import { FaCalendarDay, FaComment, FaGithub } from "react-icons/fa";
import { HeaderContainer, Info, NavBar, ContentContainer } from "./styles";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { MarkdownRenderer } from "../../components/MarkdownRenderer";
import { markdownFormatter } from "../../utils/markdownFormatter";

export function Post() {
  return (
    <>
      <HeaderContainer>
        <NavBar>
          <button>
            <MdOutlineKeyboardArrowLeft size={20} />
            <p>VOLTAR</p>
          </button>
          <a href="https://github.com/WagnerReis" target="_blank">
            <p>VER NO GITHUB</p>
            <FaArrowUpRightFromSquare size={12} />
          </a>
        </NavBar>
        <h1>JavaScript data types and data structures</h1>

        <Info>
          <div>
            <FaGithub size={18} />
            <p>WagnerReis</p>
          </div>
          <div>
            <FaCalendarDay size={18} />
            <p>Há 1 dia</p>
          </div>
          <div>
            <FaComment size={18} />
            <p>10 comentários </p>
          </div>
        </Info>
      </HeaderContainer>
      <ContentContainer>
        <MarkdownRenderer content={markdownFormatter(markdown)} />
      </ContentContainer>
    </>
  );
}

const markdown = `# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

\`\`\`js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
\`\`\`

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

\`\`\`js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
\`\`\`
`;
