# Climatizamais — site + sistema de gestão

## Executar no computador
1. Instale Node.js (versão LTS).
2. Extraia esta pasta.
3. Abra a pasta no VS Code.
4. No terminal, execute `npm install`.
5. Execute `npm start`.
6. Acesse `http://localhost:3000`.

## Acesso demonstrativo
- Usuário: `admin`
- Senha: `clima123`

## O que está incluído
- Site institucional responsivo com serviços, PMOC, sobre e formulário de orçamento via WhatsApp.
- Painel administrativo com clientes, ordens de serviço, agendamentos, contratos/PMOC, financeiro, equipamentos e relatórios.
- Cadastro, listagem e exclusão dos registros.
- Indicadores financeiros e exportação CSV.

## Importante antes de usar em produção
Esta entrega é um protótipo funcional de interface. Os registros são salvos no `localStorage` do navegador e não são compartilhados entre computadores ou usuários. O login demonstrativo está no JavaScript do navegador e NÃO oferece segurança real. Para operação comercial, implemente backend com autenticação segura, banco de dados (por exemplo PostgreSQL), permissões por usuário, backups, validação no servidor e HTTPS. O formulário público abre o WhatsApp para o visitante confirmar o envio; não grava leads em banco nem envia e-mail automaticamente.

Os dados de contato configurados:
- WhatsApp: 55 91 99133-6230
- E-mail: climatizamais6@gmail.com
- Região: Belém – PA e região
