# 🚀 Guia de Deploy Lunara para a Hostinger

Este guia prático foi criado para orientar você no passo a passo de como tirar a aplicação **Lunara** do ambiente do Google AI Studio e colocá-la no ar em sua conta da **Hostinger** (seja em um domínio principal ou em uma subpasta).

---

## 📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em seu computador local:
- **Node.js** (Versão 18 ou superior recomendada): Baixe em [nodejs.org](https://nodejs.org/).
- Um descompactador de arquivos (como WinRAR, 7-Zip ou o utilitário nativo do seu sistema operacional).

---

## 🛠️ Passo 1: Exportar o Projeto do Google AI Studio
1. No painel superior do Google AI Studio (ou utilizando o menu de configurações/compartilhamento), selecione a opção de **Exportar como ZIP** ou clonar para o seu GitHub.
2. Extraia o arquivo ZIP em uma pasta fácil de acessar no seu computador (por exemplo, na Área de Trabalho ou em uma pasta dedicada a projetos).

---

## 💻 Passo 2: Instalar as Dependências e Gerar a Versão de Produção
No seu terminal local (Prompt de Comando, PowerShell no Windows ou Terminal no macOS/Linux):

1. **Acesse a pasta extraída**:
   ```bash
   cd caminho/para/a/pasta/do-projeto
   ```

2. **Instale as dependências oficiais**:
   ```bash
   npm install
   ```

3. **Gere os arquivos prontos para publicação (Build)**:
   ```bash
   npm run build
   ```

Este comando criará uma nova pasta chamada **`dist`** no diretório do seu projeto. É esta pasta que contém os arquivos otimizados, compactados e prontos para rodar em produção de forma extremamente rápida.

---

## 🌐 Passo 3: Publicação na Hostinger (Fácil e Rápido)
A maioria dos planos de hospedagem compartilhada da Hostinger roda em servidores **Apache** ou **LiteSpeed**. Já adicionamos suporte automático a rotas amigáveis através de um arquivo `.htaccess` na pasta raiz.

Para colocar o site no ar:

### Opção A: Pelo Gerenciador de Arquivos da Hostinger (Recomendado)
1. Acesse o painel **hPanel** da Hostinger ([admin.hostinger.com](https://admin.hostinger.com)).
2. Vá até a seção **Sites** e clique em **Gerenciar** ao lado do seu domínio.
3. No painel de navegação, selecione **Gerenciador de Arquivos** (ou File Manager).
4. Entre na pasta **`public_html`** (se estiver hospedando no domínio principal) ou crie uma subpasta caso prefira (ex: `public_html/lunara`).
5. **Atenção**: Delete arquivos padrão antigos que possam atrapalhar, como `default.php` ou `index.php` da própria Hostinger.
6. Abra a pasta **`dist`** no seu computador local.
7. Selecione **todos os arquivos e pastas internos** de `dist` (incluindo o arquivo oculto `.htaccess`) e faça o upload para a pasta da Hostinger.
   * *Dica esperta:* Você pode compactar todo o conteúdo de `dist` em um arquivo `.zip`, fazer o upload desse `.zip` direto para o painel da Hostinger e utilizar a ferramenta de "Extrair" integrada deles para descompactá-lo instantaneamente!

### Opção B: Através de FTP (ex: FileZilla)
1. Baixe o FileZilla ou seu cliente FTP favorito.
2. Copie as credenciais FTP diretamente do seu hPanel Hostinger.
3. Conecte-se e envie tudo de dentro da pasta local **`dist`** diretamente para a pasta **`public_html`** (ou subpasta de destino) no servidor.

---

## 🔧 Configurações Avançadas e Dicas

### 📂 Como colocar o site em uma Subpasta? (exemplo: `meudominio.com/lunara`)
Por padrão, o projeto é compilado assumindo que estará na raiz de um domínio (`meudominio.com`). Se preferir colocar em uma subpasta:

1. Abra o arquivo **`vite.config.ts`** na raiz do projeto.
2. Adicione a propriedade `base` com o caminho da sua subpasta:
   ```typescript
   export default defineConfig(() => {
     return {
       base: '/lunara/', // Subpasta onde os arquivos estarão hospedados
       plugins: [react(), tailwindcss()],
       // ... restante da configuração ...
     }
   });
   ```
3. Salve o arquivo e execute `npm run build` novamente antes de enviar no servidor da Hostinger.

### 🛡️ O arquivo `.htaccess` incluído
Para evitar qualquer eventual erro "404 Not Found" que possa ocorrer se o site for atualizado ou se rotas dinâmicas forem criadas posteriormente, incluímos o arquivo `.htaccess` nas pastas públicas. Ele garante que qualquer requisição retorne corretamente para o arquivo principal de entrada (`index.html`).

---

✨ **Pronto!** O projeto Lunara agora está pronto para trilhar os caminhos virtuais e ser acessado por qualquer pessoa ao redor do mundo. Que as energias celestes acompanhem o seu projeto! 🌌
