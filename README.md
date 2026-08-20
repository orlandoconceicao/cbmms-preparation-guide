# CBMMS Preparation Guide

**Guia de preparação para o concurso de Soldado do CBMMS, com resumo do edital, conteúdo programático, plano de estudos, acompanhamento de desempenho e preparação para o TAF.**

## Sobre o projeto

O CBMMS Preparation Guide centraliza informações e ferramentas para a preparação antecipada de um futuro concurso de Soldado do Corpo de Bombeiros Militar de Mato Grosso do Sul.

O conteúdo utiliza principalmente o concurso de 2022 como referência. Esse concurso está concluído, e requisitos, etapas, matérias e demais regras podem mudar quando um novo edital for publicado.

O projeto é independente e não possui vínculo oficial com o CBMMS ou com o Governo do Estado de Mato Grosso do Sul.

## Funcionalidades

- Dashboard com resumo do concurso e progresso geral.
- Consulta de requisitos, etapas e dados históricos do edital.
- Conteúdo programático organizado por matéria e tópico.
- Controle de tópicos não iniciados, em estudo ou concluídos.
- Plano semanal e metas de estudo.
- Cronômetro com registro do tempo estudado.
- Registro de questões e desempenho por matéria.
- Cadastro de simulados e gráfico de evolução.
- Índices do TAF separados por sexo e registro de resultados pessoais.
- Favoritos e agendamento de revisões em 24 horas, 7 dias ou 30 dias.
- Busca interna por matérias e tópicos.
- Importação e exportação dos dados em JSON.
- Interface responsiva para computadores, tablets e celulares.

## Conteúdo programático

As oito matérias utilizadas como referência são:

- Língua Portuguesa.
- Raciocínio Lógico.
- Química.
- Física.
- Informática.
- Noções de Direito.
- História e Geografia de Mato Grosso do Sul.
- Legislação Específica do CBMMS.

## Teste de Aptidão Física

A área de TAF organiza os índices masculinos e femininos do concurso de referência e permite registrar resultados pessoais para:

- Barra fixa ou isométrica.
- Flexão.
- Abdominal remador.
- Corrida de 2.400 metros.
- Natação de 50 metros.
- Escalada vertical.
- Transporte de carga.

Os índices apresentados são baseados no concurso de 2022 e podem ser alterados em um próximo edital. O sistema não realiza avaliação médica ou determinação de aptidão.

## Tecnologias

- React
- TypeScript
- Vite
- React Router
- Lucide React
- Recharts
- CSS
- `localStorage`

## Estrutura do projeto

```text
.
|-- src/
|   |-- components/       # Layout e componentes reutilizáveis
|   |-- data/             # Dados históricos do edital, matérias e TAF
|   |-- pages/            # Páginas e módulos da aplicação
|   |-- storage/          # Persistência no armazenamento local
|   |-- types/            # Tipos compartilhados
|   |-- App.tsx           # Rotas e estado principal
|   |-- main.tsx          # Inicialização da aplicação
|   `-- styles.css        # Tema, componentes e responsividade
|-- index.html
|-- package.json
`-- README.md
```

## Como executar

É necessário ter o [Node.js](https://nodejs.org/) e o npm instalados.

Clone o repositório:

```bash
git clone https://github.com/orlandoconceicao/cbmms-preparation-guide.git
cd cbmms-preparation-guide
```

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O terminal exibirá o endereço local utilizado pelo Vite.

## Build de produção

Para validar o TypeScript e gerar a versão otimizada:

```bash
npm run build
```

Os arquivos serão gerados em `dist/`. Para visualizar o build localmente:

```bash
npm run preview
```

## Armazenamento

O projeto não possui backend, conta de usuário ou sincronização em nuvem. Os dados são mantidos no `localStorage` do navegador, incluindo:

- Progresso dos tópicos.
- Sessões e tempo de estudo.
- Questões e simulados.
- Resultados do TAF.
- Revisões e favoritos.
- Metas e configurações.

A aplicação permite exportar esses dados em JSON, importá-los novamente ou removê-los mediante confirmação.

## Fonte das informações

### Fonte oficial

Os dados utilizados como referência foram organizados com base no concurso de Soldado do CBMMS de 2022.

[Portal de Concursos do Governo de Mato Grosso do Sul](https://www2.concursos.ms.gov.br/index.php?concurso=124&location=editais_complemento)

Futuros editais podem alterar requisitos, matérias, etapas, índices físicos, remuneração, vagas, banca e demais regras do concurso.

## Aviso

> Este projeto é independente e não possui vínculo com o Corpo de Bombeiros Militar de Mato Grosso do Sul ou com o Governo do Estado. As informações são utilizadas como referência de estudo e devem ser conferidas no edital oficial de cada concurso.

## Autor

**Orlando Conceição Vilhalba de Almeida**

Desenvolvedor Backend em formação, com foco em Python, Django, Django REST Framework, PostgreSQL, APIs REST e Docker, utilizando React como tecnologia complementar para integração das aplicações.

GitHub: [github.com/orlandoconceicao](https://github.com/orlandoconceicao)

LinkedIn: [linkedin.com/in/orlando-conceição-582234315](https://www.linkedin.com/in/orlando-concei%C3%A7%C3%A3o-582234315)

Portfólio: [orlandoconceicao.github.io](https://orlandoconceicao.github.io/)
