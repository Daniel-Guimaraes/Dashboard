Então bora para a criação de mais um projeto, dessa vez para aprender a lidar com a lib **Tailwind**, para criar as estilizações das nossas páginas. 

Então o primeiro passo foi iniciar esse projeto, eu fiz isso utilizando o **NextJs**, e para criar um novo arquivo, eu utilizei o comando: 
`npx create-next-app tailwind-next`. E vou receber algumas perguntas, e vou dando enter para escolher o que for recomendado pelo próprio next.

Com o projeto criado, o primeiro passo vai ser entrar no arquivo **tailwind.config.ts** e dentro desse arquivo vai estar o seguinte código: 

```js
import type { Config } from 'tailwindcss'

const config: Config = {
  //Aqui são os possíveis caminhos que vai conter estilização
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  //Aqui eu posso extender os padrões do tailwind
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
```

Então eu vou modificar esse arquivo, deixando ele da seguinte forma: 

```js
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.tsx',
  ],
  theme: {
    extend: {
      //Eu criei essa extensão somente para fins de explicação
      daniel: '#8257e6'
    },
  },
  plugins: [],
}
export default config
```

No meu arquivo `page.tsx`, eu vou deixar o arquivo da seguinte maneira: 

```js
export default function Home() {
  return (
    <h1>Hellow Tailwind</h1>
  )
}
```
E no meu arquivo `global.css`, eu vou deixar ele da seguinte maneira: 

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Agora pronto, posso começar o projeto.

A primeira coisa que preciso ter e mente, e que vou perceber quando eu rodar o projeto, é que o tailwind ele **reseta as propriedades HTML**, ou seja, vamos supor que eu tenha o seguinte código: 

```js
export default function Home() {
  return (
    <h1>Hellow Tailwind</h1>
    <h2>Hellow Tailwind</h2>
    <p>Hellow Tailwind</p>
  )
}
```

Mesmo eu tendo tags diferentes, o resultado em tela vai ser o mesmo. E isso é muito interessante, porque se pararmos para raciocinar, o <h1> ele quer dizer semanticamente, que o texto é muito importante para aquela página, e não que ele somente vai ser maior do os outros textos, com isso podemos pensar e olhar para o html com outros olhos.

Então para estilizar, um texto, eu uso **classes**, então vamos supor que eu queira deixar meu título em negrito e com a cor que eu extendi no meu arquivo de configuração, para isso eu uso os seguinte código: 

```js
export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-5xl text-daniel">Hellow word</h1>
    </div>
  )
}
```

E pronto, posso ver que minha página já começa a ganhar estilização


# Seletores e Estados

O que podemos fazer com o Tailwind é a mesma coisa que fazemos por padrão com o css, como por exemplo usar seletores. Então vamos supor que eu queira, criar um traço antes do meu título, para isso eu posso usar o pseudo-elemento **before:**, e para isso eu somente escrevo `before:` na minha classe, e tudo que vier na frente vai ser aplicar nesse pseudo-elemento. E para cada elemento que eu queira criar, eu tenho que repetir o seletor:

```js
export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-5xl text-daniel flex items-center gap-3 before:h-1 before:w-1 before:bg-sky-500 before:flex">Hellow word</h1>
    </div>
  )
}
```

Eu posso também lidar com o estado da tag HTML, para exemplificar isso, eu vou utilizar um <button>, na onde eu vou lidar com o estado de `hover:` e de `disabled:`:

```js
export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-5xl text-daniel flex items-center gap-3 
      before:h-1 before:w-1 before:bg-sky-500 before:flex">
        Hellow word
      </h1>

      <button className="bg-sky-500 px-3 py-2 rounded-md font-medium 
      mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
        Sign-In
      </button>
    </div>
  )
}
```

Note que agora eu manipulei o estilo do botão de acordo com o estado em que ele se encontra. 


# Responsividade e BreakPoints

Outra coisa que o tailwind facilita, é em relação a responsividade. Ele utiliza o modelo **Mobile First**, ou seja, todo o css aplicado é para mobile leva em consideração primeiro para mobile. Então o tailwind já vem com alguns breakpoints pré configurados.

Então para exemplificar eu vou definir o tamanho do título que eu criei para ele ser maior dependendo do tamanho da tela: 

```js
export default function Home() {
  return (
    <div className="p-8 bg-slate-900 text-slate-100 h-screen">
      <h1 className="font-bold text-xl sm:text-3xl lg:text-6xl text-daniel flex 
      items-center gap-3 before:h-1 before:w-1 before:bg-sky-500 before:flex">
        Hellow word
      </h1>

      <button className="bg-sky-500 px-3 py-2 rounded-md font-medium 
      mt-4 enabled:hover:bg-sky-600 disabled:opacity-60 disabled:cursor-not-allowed">
        Sign-In
      </button>
    </div>
  )
}
```

Então eu defini o tamanho para mobile `text-xl`, para uma tela acima de `648px` eu usei `sm:text-3xl` e para telas acima de `1024px` eu usei o `lg:text-6xl`. 


# Dark mode

Outra coisa que o tailwind facilita é na criação do modo dark e light, e isso eu faço da mesma forma que eu fiz com os tamanhos de telas, usando prefixos. E os prefixos que eu uso para isso são `dark: e o light:`. Não vou me aprofundar nisso agora, porque ele segue o mesmo conceito dos tamanhos de telas. 


# Valores arbitrários

O que o tailwind nos permite fazer e que temos que evitar ao máximo, é utilizar valores arbitrários. Que seria usar valores que fogem do padrão do tailwind. E para usar esses valores que utilizo colchetes e coloco o valor que eu quero usar ali dentro, então vamos supor que eu queira uma cor que seja padrão do navegador, como o azul, para isso eu uso `bg-[blue]`, ou talvez eu queira um tamanho diferente, para isso eu uso `max-w-[700px]`. Mas isso não considerado uma boa prática, caso eu queira usar um valor diferente do tailwind, eu tenho que ir e extender criando o valor personalizado que eu quiser.  


# Configurando o Eslint

Vamos agora instalar as configurações do eslint que a própria rocket fez, para podermos configurar o nosso prettier com as melhores práticas de organização do nosso código. Para instalar eu uso `npm i @rocketseat/eslint-config -D`

Agora no nosso arquivo `.eslintrc.json`, e vou extender para as configurações da rocket para o next. Essas configurações, ela já vem instalada configurações do plugin **prettier** e com isso eu posso instalar plugins do prettier para o tailwind, usando `npm i prettier-plugin-tailwindcss -D`

E agora com tudo instalado, eu vou criar um arquivo que vou chamar de `prettier.config.js`, e dentro desse arquivo eu escrevo os seguintes comandos:

```js
module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
}
```

E agora é importante eu dar um **reload** no vs code para fixar as alterações. E quando eu entrar novamente no meu arquivo `page.tsx` eu vou notar erros no código por não estar formatado, se não tiver dando esses erros é porque deve ter algum conflito interno.  


# Layout 

Agora vou criar o layout da minha página no meu arquivo `layout.tsx`, o layout ela é a estrutura que vai ser fixa da nossa página, independente se tiver trocas de rotas.

E o layout da aplicação eu posso ver que eu tenho uma sidebar e o conteúdo principal ao lado, então para isso eu vou dividir em duas colunas a minha página, e uma coluna vai ser a minha sidebar e a outra o conteúdo. Então como eu tenho o tamanho da nossa sidebar como sendo uma medida que não é trazida por padrão no tailwind, eu tenho que extender no arquivo de configurações do tailwind. 

Uma coisa bastante legal também que ajuda na estilização, é definirmos uma altura mínima para a nossa div principal, que vai envelopar toda a estrutura, e essa altura ser 100vh, para que possa ocupar 100% da altura da tela. Isso nos ajuda em relação a centralização de elementos, entre outras coisas.

```js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <aside className="border-r border-zinc-200 px-5 py-8">Sidebar</aside>
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
```

# logo e input de busca

O que eu vou começar fazendo vai ser criar um componente para a minha sidebar, para isso eu vou criar um arquivo chamado `components` e dentro desse arquivo eu vou criar uma pasta chamada `Sidebar/index.tsx`. E dentro desse arquivo eu vou criar uma função chamada `Sidebar()` e vou mover meu HTML <aside> lá para dentro.

```js
export function Sidebar() {
  return <aside className="border-r border-zinc-200 px-5 py-8">Sidebar</aside>
}
```

E importo meu componente lá no meu `page.tsx`:

```js
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <div className="grid min-h-screen grid-cols-app">
          <Sidebar />
          <main className="px-4 pb-12 pt-8">{children}</main>
        </div>
      </body>
    </html>
  )
}
```

Agora o que vou fazer vai ser criar a minha logo e o título, e aqui eu poso aprender uma ferramente muito top, que se chama `transform.tools`, essa ferramenta online, me permite transformar meu svg em um componente React. Então vou no figma, copio o svg do figma, vou no site e transformo ele em um componente, e crio um arquivo em baixo do `index.tsx` mesmo, chamado `Logo.tsx` e colo ele: 

Após feito isso, eu vou envelopar meu código com uma tag <strong> e vou adicionar o título no final do código, eu to fazendo tudo isso, porque quando partirmos para o mobile, eu posso usar uma propriedade do tailwind, chamada `sr-only` que esconde o conteúdo visualmente, mas ele ainda fica disponível para os leitores de tela, o que nos ajuda na acessibilidade. O código deve ficar da seguinte forma: 

```js
export function Logo() {
  return (
    <strong className="flex items-center gap-2 text-xl font-semibold text-zinc-900">
      <svg
        width={38}
        height={38}
        viewBox="0 0 38 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_dd_226_307)">
          <g clipPath="url(#clip0_226_307)">
            <rect x={3} y={2} width={32} height={32} rx={8} fill="#fff" />
            <rect
              x={3}
              y={2}
              width={32}
              height={32}
              rx={8}
              fill="url(#paint0_linear_226_307)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 4.039c-7.71 0-13.961 6.25-13.961 13.961 0 7.71 6.25 13.961 13.961 13.961 7.71 0 13.961-6.25 13.961-13.961 0-7.71-6.25-13.961-13.961-13.961zM4.961 18c0-7.753 6.286-14.039 14.039-14.039S33.039 10.247 33.039 18 26.753 32.039 19 32.039 4.961 25.753 4.961 18z"
              fill="#D0D5DD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 14.078a3.922 3.922 0 100 7.845 3.922 3.922 0 000-7.845zM15 18a4 4 0 118 0 4 4 0 01-8 0z"
              fill="#D0D5DD"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19 15.32a2.68 2.68 0 100 5.36 2.68 2.68 0 000-5.36zM16.243 18a2.757 2.757 0 115.514 0 2.757 2.757 0 01-5.514 0z"
              fill="#D0D5DD"
            />
            <path d="M18.961 2h.078v32h-.078V2z" fill="#D0D5DD" />
            <path d="M35 17.96v.079H3v-.078h32z" fill="#D0D5DD" />
            <path
              d="M29.602 2h.078v32h-.078V2zM13.64 2h.078v32h-.077V2zM24.282 2h.077v32h-.077V2zM8.32 2h.078v32H8.32V2z"
              fill="#D0D5DD"
            />
            <path
              d="M35 28.602v.077H3v-.077h32zM35 12.64v.078H3v-.077h32zM35 23.281v.078H3v-.078h32zM35 7.32v.078H3V7.32h32z"
              fill="#D0D5DD"
            />
            <g filter="url(#filter1_dd_226_307)">
              <circle
                cx={19}
                cy={18}
                r={8}
                fill="url(#paint1_linear_226_307)"
              />
            </g>
            <g filter="url(#filter2_b_226_307)">
              <path
                d="M3 18h32v3.2c0 4.48 0 6.72-.872 8.432a8 8 0 01-3.496 3.496C28.92 34 26.68 34 22.2 34h-6.4c-4.48 0-6.72 0-8.432-.872a8 8 0 01-3.496-3.496C3 27.92 3 25.68 3 21.2V18z"
                fill="#fff"
                fillOpacity={0.2}
              />
            </g>
          </g>
          <rect
            x={3.15}
            y={2.15}
            width={31.7}
            height={31.7}
            rx={7.85}
            stroke="#D0D5DD"
            strokeWidth={0.3}
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_226_307"
            x={0}
            y={0}
            width={38}
            height={38}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_226_307"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1.5} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
            <feBlend
              in2="effect1_dropShadow_226_307"
              result="effect2_dropShadow_226_307"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_226_307"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_dd_226_307"
            x={8}
            y={8}
            width={22}
            height={22}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0" />
            <feBlend
              in2="BackgroundImageFix"
              result="effect1_dropShadow_226_307"
            />
            <feColorMatrix
              in="SourceAlpha"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy={1} />
            <feGaussianBlur stdDeviation={1.5} />
            <feColorMatrix values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0" />
            <feBlend
              in2="effect1_dropShadow_226_307"
              result="effect2_dropShadow_226_307"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect2_dropShadow_226_307"
              result="shape"
            />
          </filter>
          <filter
            id="filter2_b_226_307"
            x={-2}
            y={13}
            width={42}
            height={26}
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation={2.5} />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_226_307"
            />
            <feBlend
              in="SourceGraphic"
              in2="effect1_backgroundBlur_226_307"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_226_307"
            x1={19}
            y1={2}
            x2={19}
            y2={34}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset={1} stopColor="#D0D5DD" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_226_307"
            x1={15}
            y1={26}
            x2={23}
            y2={10}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#53389E" />
            <stop offset={1} stopColor="#6941C6" />
          </linearGradient>
          <clipPath id="clip0_226_307">
            <rect x={3} y={2} width={32} height={32} rx={8} fill="#fff" />
          </clipPath>
        </defs>
      </svg>

      <span>Untitled UI</span>
    </strong>
  )
}
```

Agora que eu criei a logo, eu importo ela lá na minha função `Sidebar()`:

```js
import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="border-r border-zinc-200 px-5 py-8">
      <Logo />
    </aside>
  )
}
```

Agora vou fazer a criação do meu input de busca, como posso ver no layout, o meu input ele tem um ícone ao lado, que é uma lupa, e naturalmente o meu input não aceita ícones, por isso tenho que envelopar esse input dentro de uma <div>. 

Para o ícone eu vou usar uma lib chamada `lucide react` e para instalar essa lib é só rodar `npm i lucide-react`. Logo depois de instalada eu vou importar meu ícone chamado `<Search />`. Esse ícone ele recebe estilização por meio de classe, então eu vou aplicar aluns estilos nele com o tailwind: 

```js
export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
          type="text"
        />
      </div>
    </aside>
  )
}
```

> Eu usei a classe `space-y-6` do tailwind, porque eu notei que no layout da aplicação, eu tenho um espaçamento no topo, padronizado entre os elementos na minha **sidebar**, e para não ter que ficar colocando `margin-top (mt)` em cada um dos elementos, o tailwind facilita, disponibilizando essa propriedade, que coloca um espaçamento no topo de cada elemento contido dentro do elemento pai que estou usando essa propriedade, de forma automática.


# Menu de navegação

Vou fazer agora meu menu de navegação, para isso eu vou criar uma pasta chamada `MainNavigation/index.tsx`, e dentro eu vou exportar a função `MainNavigation()`.

Dentro da função eu vou retornar uma tag <nav>, na onde vou usar o poder da classe `space-y-0.5` para adicionar um margin top para todos os elementos. 

```js
export function MainNavigation() {
  return <nav className="space-y-0.5"></nav>
}
```

Agora o que eu vou fazer vai ser criar um outra arquivo abaixo do `index.tsx`, que vai se chamar `NavItem.tsx`, na onde eu vou criar a estrutura padrão de cada item, e passar por meio de propriedades, os elementos que não se repetem na estrutura: 

```js
import { ChevronDown } from 'lucide-react'
import { ElementType } from 'react'

interface NavItemProps {
  title: string
  icon: ElementType
}

export function NavItem({ title, icon: Icon }: NavItemProps) {
  return (
    <a
      href="#"
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-violet-50"
    >
      <Icon className="h-5 w-5 text-zinc-500" />
      <span className="font-medium text-zinc-700 group-hover:text-violet-500">
        {title}
      </span>
      <ChevronDown className="ml-auto h-5 w-5 text-zinc-400 group-hover:text-violet-300" />
    </a>
  )
}
```

> Quando eu preciso estilizar um elemento, que eu dependendo do estado do elemento pai, por exemplo, caso eu queira que ao aplicar um `hover:` no meu elemento <nav>, eu quero que os elementos que forem filhos dele, também sofram mudanças com esse hover, que no caso seria mudar a cor do elemento quando o pai estiver no estado hover. Para isso eu uso a classe do tailwind chamada `group` no elemento pai, e nos elementos filhos que eu quero mudar a cor, eu também uso essa classe, mas informando qual vai ser o estado que eu quero usar do elemento pai, ou seja, `group-hover:` e na frente eu aplico a estilização. 

Pronto, agora no meu arquivo `index.tsx`, eu chamo meu componente e passo a propriedades que esse elemento está recebendo em sua estrutura:

```js
import { NavItem } from './NavItem'

import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

export function MainNavigation() {
  return (
    <nav className="space-y-0.5">
      <NavItem title="Home" icon={Home} />
      <NavItem title="Dashboard" icon={BarChart} />
      <NavItem title="Projects" icon={SquareStack} />
      <NavItem title="Tasks" icon={CheckSquare} />
      <NavItem title="Reporting" icon={Flag} />
      <NavItem title="Users" icon={Users} />
    </nav>
  )
}
```

Feito isso, eu chamo meu componente na minha função `Sidebar()`:


```js
export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
          type="text"
        />
      </div>

      <MainNavigation />
    </aside>
  )
}
```

# Widget de espaço usado

Agora vou focar em terminar minha sidebar. Vou fazer uma pequena mudança, até porque não devo adicionar tanta complexidade em um projeto como esse, então eu vou remover o componente que eu criei que é o `MainNavigation` e o conteúdo dele, eu vou jogar direto na minha função `Sidebar()`:

```js
import {
  Search,
  BarChart,
  CheckSquare,
  Flag,
  Home,
  SquareStack,
  Users,
} from 'lucide-react'

import { NavItem } from './NavItem'
import { Logo } from './Logo'

export function Sidebar() {
  return (
    <aside className="space-y-6 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
          type="text"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
    </aside>
  )
}
```

Beleza, agora eu vou criar uma seção de navegação, e como ele é bem semelhante ao meu item de navegação que criei, eu vou reutilizar a estrutura:

```js
export function Sidebar() {
  return ( //Aqui eu tive que mudar para flex.
    <aside className="flex flex-col gap-4 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500 " />
        <input
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
          type="text"
        />
      </div>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-5 py-5">
          <div className="space-y-1">
            <p className="text-sm/5 font-medium text-violet-700">Used space</p>
            <p className="text-sm/5 text-violet-500">
              Your team has used 80% of your available space. need more?
            </p>
          </div>

          <div className="h-2 rounded-full bg-violet-100">
            <div className="h-2 w-4/5 rounded-full bg-violet-600" />
          </div>

          <div className="space-x-3">
            <button
              type="button"
              className="text sm font-medium text-violet-500 hover:text-violet-700"
            >
              Dismiss
            </button>

            <button
              type="button"
              className="text sm font-medium text-violet-700 hover:text-violet-900"
            >
              Upgrade plan
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}
```

> Nós que somos programadores front-end sabemos que o <font-size> e o <line-height> andam sempre lado a lado, por isso o tailwind para facilitar nossa vida, nos permite definirmos em um só classe os dois atributos, basta usar `text-sm/5`, depois da / é definido o line-height.

Agora ficou o campos de usuário para fazer, e para fazer esse campo eu vou criar um arquivo chamado `UsedSpaceWidget.tsx`, e dentro dele vou exportar uma função chamada `UsedSpaceWidget()`.

E para esse componente vou mover o que criei até agora:

```js
export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-violet-50 px-5 py-5">
      <div className="space-y-1">
        <p className="text-sm/5 font-medium text-violet-700">Used space</p>
        <p className="text-sm/5 text-violet-500">
          Your team has used 80% of your available space. need more?
        </p>
      </div>

      <div className="h-2 rounded-full bg-violet-100">
        <div className="h-2 w-4/5 rounded-full bg-violet-600" />
      </div>

      <div className="space-x-3">
        <button
          type="button"
          className="text sm font-medium text-violet-500 hover:text-violet-700"
        >
          Dismiss
        </button>

        <button
          type="button"
          className="text sm font-medium text-violet-700 hover:text-violet-900"
        >
          Upgrade plan
        </button>
      </div>
    </div>
  )
}
```

 
# Perfil do usuário

Vou trabalhar na criação do perfil do usuário, então o que eu posso perceber que existe uma linha bem fina que separa o widget do perfil, essa linha eu vou criar uma div mesmo em branco, e vou definir uma cor e uma altura fixa de 1px,

Agora eu vou criar mais um novo componente, que vou nomear de `Profile` e vou importar ele na minha função `sidebar()`.

No meu componente eu vou começar a trabalhar na estrutura: 


```js
export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="https://github.com/Daniel-Guimaraes.png"
        alt="Imagem do usuário"
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Daniel Guimarães
        </span>
        <span className="truncate text-sm text-zinc-500">
          daniel.guimaraes.vieira.dev@gmail.com
        </span>
      </div>
      <button type="button" className="ml-auto rounded-md p-2 hover:bg-zinc-50">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </button>
    </div>
  )
}
```

> Eu usei a classe `truncate` do tailwind, porque ela me traz 3 tipos diferentes de propriedades, a primeira sendo `owerflow: hidden`, essa propriedade faz com que não aja transbordamento na caixa, então todo conteúdo que passar do tamanho da caixa vai ser cortado. A próxima propriedade é chamada de `text-owerflow: ellipsis` essa propriedade faz com que o texto quando for muito grande para o tamanho da caixa, ele crie 3 pontinhos no corte do texto, para indicar que ainda tem mais conteúdo. E a próxima propriedade é chamada de `white-space: nowrap`, essa propriedade faz com que independente do tamanho do texto, ele não quebre a linha. Então esse conjunto de funcionalidades me garante que eu trabalhe melhor com textos longos .

E pronto minha seção de usuário está pronta. 


# Pattern de composição

O que eu posso perceber é que eu tenho uma estrutura de inputs  muito parecida em toda a aplicação, por isso vale muito apena criar um componente para meus inputs. Mas outra coisa que posso notar , é que eu vou ter inputs que não possuem ícones, ou com uma estilização diferente. E é ai que entra o conceito de **Pattern de composição** que seria dividirmos um um componente, em componentes menores que formam um todo. 

Por isso eu vou criar meu componente de **input**, então fora da pasta `sidebar` eu vou criar um arquivo chamado `input.tsx`. Dentro eu vou criar a estrutura seguindo os conceitos de **pattern de composição**:

```js
import { ComponentProps } from 'react'

type InputPrefixProps = ComponentProps<'div'>
type InputControlProps = ComponentProps<'input'>
type InputRootProps = ComponentProps<'div'>

export function Prefix(props: InputPrefixProps) {
  return <div {...props} />
}

export function Control(props: InputControlProps) {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export function Root(props: InputRootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-2 py-2 shadow-sm "
      {...props}
    />
  )
}
```

Agora eu tenho 3 componentes, na onde eu posso **manipular** cada elemento contido desse do componente, então agora eu vou importar esse componente na minha `sidebar`, ficando da seguinte forma:

```js
export function Sidebar() {
  return (
    <aside className="flex flex-col gap-4 border-r border-zinc-200 px-5 py-8">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart} />
        <NavItem title="Projects" icon={SquareStack} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>

        <Profile />
      </div>
    </aside>
  )
}
```

# Criando abas com Radix

Vamos agora criar a estilização dos campos da esquerda. Primeiro eu vou começar estilizando o título:

```js
export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>
    </>
  )
}
```

Agora para fazer as abas, eu vou utilizar uma biblioteca chamada `Radix`, e para usar essa lib, eu uso o seguinte código:

```bash
npm i @radix-ui/react-tabs
```

E agora eu importo, e crio a estrutura padrão do radix para criar as listas de abas:

```js
import * as Tabs from '@radix-ui/react-tabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <Tabs.Root>
        <Tabs.List>
          <Tabs.Trigger></Tabs.Trigger>
        </Tabs.List>
      </Tabs.Root>
    </>
  )
}
```

Mas provavelmente vai dar erro na minha aplicação, porque  como eu estou usando o Next, ele usa o conceito de **server-components**, e esse componente do **radix**, ele envolve javascript no lado do cliente, então para resolver isso, eu vou criar uma nova pasta, pode ser na própria pasta `components`, e essa nova pasta eu vou nomear de `SettingsTabs` e vou criar um arquivo `index.tsx`, e dentro desse arquivo eu vou mover a estrutura de componentes que criei para as abas, ficando da seguinte maneira:

```js
'use client' //Aqui eu usei a diretiva do Next, porque eu quero que ele seja um "client component"

import * as Tabs from '@radix-ui/react-tabs'

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List>
        <Tabs.Trigger>Conteúdo</Tabs.Trigger>
      </Tabs.List>
    </Tabs.Root>
  )
}
```

Agora eu importo meu componente no meu arquivo `page.tsx`. O que eu vou fazer agora vai ser criar um componente com a estrutura estilizada da minha aba, então eu vou criar um novo arquivo que vou nomear de `TabItem.tsx`, esse arquivo vai ficar dentro da pasta `SettingsTab` mesmo. E dentro desse arquivo eu vou criar a estrutura do componente: 

```js
'use client'

import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>
    </Tabs.Trigger>
  )
}
```

Agora eu vou criar as minhas abas, passando as propriedades de cada uma de acordo com o layout: 

```js
'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'

export function SettingsTabs() {
  return (
    <Tabs.Root>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem value="tab1" title="Details" />
        <TabItem value="tab2" title="Profile" />
        <TabItem value="tab3" title="Password" />
        <TabItem value="tab4" title="Token" />
        <TabItem value="tab5" title="Plan" />
        <TabItem value="tab6" title="Billing" />
        <TabItem value="tab8" title="Notifications" />
        <TabItem value="tab9" title="Integrations" />
        <TabItem value="tab10" title="API" />
      </Tabs.List>
    </Tabs.Root>
  )
}
```

Com nossas abas criadas, eu vou criar uma lógica, que vai ser a seguinte, quando tiver minha aba selecionada, eu quero que ela fique com uma pequena borda em baixo roxa, para isso eu faço o seguinte:

```js
'use client'

import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.Trigger>
  )
}
```

Se eu der um inspecionar, eu vou notar que o `radix` ele traz por padrão algumas propriedades para o meu componente, uma dessas propriedades é chamada de `data-state`, essa propriedade é acionada sempre que eu clico em alguma aba do meu componente, quando eu clico essa propriedade fica com o valor `active`, quando eu clico em outra aba, ela passa a ser `inactive`. Então se baseando nesse estado, eu vou alterar a cor do meu texto para ser ativado somente quando eu tiver a propriedade `data-sate` como `active`, e para fazer isso com o tailwind, eu uso a seguinte classe: `data-[state=active]:text-violet-700`, ou seja, só aplique esse hover se o estado da minha aba for ativo.

```js
'use client'

import * as Tabs from '@radix-ui/react-tabs'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.Trigger>
  )
}
```

Agora eu preciso criar uma outra lógica, para quando eu clicar em alguma aba, seja renderizado meu `isSelected`, então para fazer isso, eu vou criar um estado, que vai armazenar a aba que eu clicar através da propriedade `value`, para isso eu vou criar um estado, e vou adicionar a função `onValueChange`, para monitorar o valor, e atualizar meu estado com base nesse valor:

```js
export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState('tab1')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          value="tab1"
          title="Details"
          isSelected={currentTab === 'tab1'}
        />
        <TabItem
          value="tab2"
          title="Profile"
          isSelected={currentTab === 'tab2'}
        />
        <TabItem
          value="tab3"
          title="Password"
          isSelected={currentTab === 'tab3'}
        />
        <TabItem
          value="tab4"
          title="Token"
          isSelected={currentTab === 'tab4'}
        />
        <TabItem value="tab5" title="Plan" isSelected={currentTab === 'tab5'} />
        <TabItem
          value="tab6"
          title="Billing"
          isSelected={currentTab === 'tab6'}
        />
        <TabItem
          value="tab7"
          title="Notifications"
          isSelected={currentTab === 'tab7'}
        />
        <TabItem
          value="tab8"
          title="Integrations"
          isSelected={currentTab === 'tab8'}
        />
        <TabItem value="tab9" title="API" isSelected={currentTab === 'tab9'} />
      </Tabs.List>
    </Tabs.Root>
  )
}
```

Agora eu vou fazer uma animação na borda, e para fazer essa animação eu vou instalar o `npm i framer-motion`:


```js
'use client'

import * as Tabs from '@radix-ui/react-tabs'

import { motion } from 'framer-motion'

interface TabItemProps {
  value: string
  title: string
  isSelected?: boolean
}

export function TabItem({ isSelected = false, title, value }: TabItemProps) {
  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700"
    >
      <span>{title}</span>

      {isSelected && (
        <motion.div
          layoutId="activeTab"
          className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700"
        />
      )}
    </Tabs.Trigger>
  )
}
```


# Estrutura do formulário

Vou trabalhar agora com a estrutura base dos meus formulários.

Vou começar trabalhando no cabeçalho inicial do formulário:

```js
import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal Info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-violet-700"
            >
              Save
            </button>
          </div>
        </div>
      </div>

      <form id="settings" action=""></form>
    </>
  )
}
```

Agora vou trabalhar na criação dos formulários. 

```js
<form
  id="settings"
  className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
>
  <div className="grid-cols-form grid gap-3">
    <label
      htmlFor="firstName"
      className="text-sm font-medium text-zinc-700"
    >
      Name
    </label>
    <div className="grid grid-cols-2 gap-6">
      <Input.Root>
        <Input.Control id="firstName" defaultValue="Daniel" />
      </Input.Root>

      <Input.Root>
        <Input.Control defaultValue="Guimarães" />
      </Input.Root>
    </div>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label htmlFor="email" className="text-sm font-medium text-zinc-700">
      Email Address
    </label>

    <Input.Root>
      <Input.Prefix>
        <Mail className="h-5 w-5 text-zinc-500" />
      </Input.Prefix>
      <Input.Control
        id="email"
        type="email"
        defaultValue="daniel.guimaraes.vieira.dev@gmail.com"
      />
    </Input.Root>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label htmlFor="email" className="text-sm font-medium text-zinc-700">
      Your photo
      <span className="mt-0.5 block text-sm font-normal text-zinc-500">
        This will be displayed on your profile
      </span>
    </label>

    <div></div>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label htmlFor="role" className="text-sm font-medium text-zinc-700">
      Role
    </label>

    <Input.Root>
      <Input.Control
        id="role"
        type="text"
        defaultValue="Front-end Developer"
      />
    </Input.Root>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label
      htmlFor="country"
      className="text-sm font-medium text-zinc-700"
    >
      Country
    </label>

    <div></div>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label
      htmlFor="timezone"
      className="text-sm font-medium text-zinc-700"
    >
      TimeZone
    </label>

    <div></div>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
      Bio
      <span className="mt-0.5 block text-sm font-normal text-zinc-500">
        Write a short introduction
      </span>
    </label>

    <div></div>
  </div>

  <div className="grid-cols-form grid gap-3 pt-5">
    <label
      htmlFor="projects"
      className="text-sm font-medium text-zinc-700"
    >
      Portfolio Projects
      <span className="mt-0.5 block text-sm font-normal text-zinc-500">
        Share a few snippets of your work
      </span>
    </label>

    <div></div>
  </div>

  <div className="flex justify-end gap-2 pt-5">
    <button
      type="button"
      className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-50"
    >
      Cancel
    </button>
    <button
      type="submit"
      form="settings"
      className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold  text-white shadow-sm hover:bg-violet-700"
    >
      Save
    </button>
  </div>
</form>
```

Pronto meu formulário já está todo estruturado, o que vou fazer agora, vai ser editar cada campo, começando pelo campo de **upload do avatar**.

# Upload do avatar

Agora vou criar a seção de upload do avatar, que permite o usuário selecionar uma foto de perfil. 

```js
<div className="grid grid-cols-form gap-3 pt-5">
  <label htmlFor="photo" className="text-sm font-medium text-zinc-700">
    Your photo
    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
      This will be displayed on your profile
    </span>
  </label>

  <div className="flex items-start gap-5">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
      <User className="h-8 w-8 text-violet-500" />
    </div>

    <label
      htmlFor="photo"
      className="hover:bg-violet-25 group flex flex-1 cursor-pointer flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-6 text-center shadow-sm hover:border-violet-200 hover:text-violet-500"
    >
      <div className="border-6 rounded-full border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold text-violet-700">
            Click to upload
          </span>{' '}
          or drag and drop
        </span>

        <span className="text-xs">
          SVG, PNG, JPG or GIF (max, 800px 400px)
        </span>
      </div>
    </label>

    <input type="file" className="sr-only" id="photo" />
  </div>
</div>
```

# Context e Preview da imagem

Agora o que vou fazer vai ser criar um array que vai armazenar os arquivos do meu usuário, eu vou criar esse array no meu arquivo `Root.tsx` do meu componente `FileInput`.

```js
'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
```

Agora meus inputs tem acesso a essas informações. E agora no meu arquivo `Control.tsx`, eu vou criar uma função e vou passar ela para meu input, essa função vai receber um evento, na onde eu vou capturar o arquivo que vem desse evento e armazenar ele em uma constante, e essa constante eu passo para a minha função que está atualizando meu estado:


```js
'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      {...props}
    />
  )
}
```

Agora no meu arquivo `ImagePreview.tsx` eu vou ter acesso a essa imagem, e vou exibi-la em tela. Para isto eu vou usar o `useMemo()` do react, que nada mais é do que uma função que vai memorizar cálculos pesados para o navegador. Então o que vou fazer vai ser, transformar meu arquivo em uma URL e exibir em tela.

```js
'use client'

import { User } from 'lucide-react'
import { useFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50">
        <User className="h-8 w-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <img src={previewURL} className="h-16 w-16 rounded-full object-cover" />
    )
  }
}
```

# Listagem de arquivos

O que vou fazer agora vai ser criar uma lista dos uploads do usuário, então pra isso eu vou criar uma novo arquivo chamado `FileList.tsx`, dentro do meu componente `FileInput`. E nesse arquivo eu vou criar a estrutura:

```js
'use client'

import { Trash2, UploadCloud } from 'lucide-react'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">{file.size}</span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50"
            >
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
```

No meu arquivo `index.tsx` eu vou importar meu componente e vou compartilhar ele: 

```js
import { Root } from './Root'
import { Control } from './Control'
import { ImagePreview } from './ImagePreview'
import { Trigger } from './Trigger'
import { FileList } from './FileList'

export { Root, Control, ImagePreview, Trigger, FileList }
```

Agora para visualizar preciso chamar meu componente no meu arquivo `page.tsx`:

```js
<div className="grid grid-cols-form gap-3 pt-5">
  <label
    htmlFor="projects"
    className="text-sm font-medium text-zinc-700"
  >
    Portfolio Projects
    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
      Share a few snippets of your work
    </span>
  </label>

  <FileInput.Root>
    <FileInput.Trigger />
    <FileInput.FileList />
    <FileInput.Control multiple />
  </FileInput.Root>
</div>
```

O que posso perceber é que o tamanho do meu arquivo está vindo em bytes, então o que eu preciso fazer é converter o bytes em giga, para isso eu vou criar uma pasta chamada `Utils` e dentro dela um arquivo chamado `format-bytes.ts`, e nesse arquivo eu vou ter a estrutura de formatação:


```js
export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB']

  let value = bytes
  let unitIndex = 0

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024
    unitIndex++
  }

  return `${value.toFixed(1)}${units[unitIndex]}`
}
```

Agora eu vou e uso essa função para formatar o tamanho do meu arquivo :

```js
<div className="flex flex-col">
  <span className="text-sm font-medium text-zinc-700">
    {file.name}
  </span>
  <span className="text-sm text-zinc-500">
    {formatBytes(file.size)}
  </span>
</div>
```

Agora tenho outro problema, ao invés de criar uma lista, o arquivo está sobrescrevendo um ao outro. para mudar isso, eu vou pegar a propriedade que estou recebendo do meu input chamada `multiple`, essa propriedade eu vou falar que por padrão ela vai começar como falsa, então no momento que meu input verificar que o usuário, selecionou múltiplos arquivos ele vai mudar a propriedade para `true`, e essa propriedade eu vou passar para a minha função `onFilesSelected` que estou compartilhando no meu contexto.

```js
'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
      multiple={multiple}
      {...props}
    />
  )
}
```

Agora lá no meu contexto, eu vou ter que alterar a minha função para que ela receba também o `multiple` e vou criar uma função que vai verificar pra mim se tem ou não múltiplos arquivos, e se tiver tomar uma outra ação. 

```js

'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

export type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function onFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((state) => [...state, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export const useFileInput = () => useContext(FileInputContext)
```

# Criando Select de País

Vou agora criar o select de país, para que o usuário possa definir qual o país que ele mora. Eu vou criar esse select com o radix, então eu preciso instalar com o seguinte comando `npm i @radix-ui/react-select`.

Feito isso eu começo a criação. Primeiro eu vou criar um arquivo chamado `Select.tsx` no meu componente `Form`. Agora nesse arquivo eu vou criar toda a estrutura do meu select com radix:

```js
'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { Check, ChevronDownIcon } from 'lucide-react'

export function Select() {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder="Select a country..."
          className="text-black"
        />

        <SelectPrimitive.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport>
            <SelectPrimitive.Item
              value="br"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Brazil
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="us"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                United State
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="uk"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                England
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>

            <SelectPrimitive.Item
              value="rus"
              className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <SelectPrimitive.ItemText className="text-black">
                Russia
              </SelectPrimitive.ItemText>

              <SelectPrimitive.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </SelectPrimitive.ItemIndicator>
            </SelectPrimitive.Item>
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
```

Agora eu chamo o select lá no meu arquivo `page.tsx`: 

```js
<div className="grid grid-cols-form gap-3 pt-5">
  <label
    htmlFor="country"
    className="text-sm font-medium text-zinc-700"
  >
    Country
  </label>

  <Select />
</div>
```

# Componentizando select

Vou agora componentizar meu `select` para que eu tenha boas práticas na escrita do código.

Então eu vou transformar meu `select` em uma pasta, e vou criar dois arquivos `index.tsx e SelectItem.tsx`, no meu index vai continuar a minha estrutura, agora no meu selectItem eu vou desaclopar os códigos de adicionar um item no select:

```js
'use client'

import * as Select from '@radix-ui/react-select'
import { Check } from 'lucide-react'

export type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...props }: SelectItemProps) {
  return (
    <Select.Item
      className="flex cursor-pointer items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
      {...props}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}
```

Agora a minha estrutura no arquivo `index` vai ficar da seguinte forma:

```js
'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDownIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps {
  children: ReactNode
  placeholder: string
}

export function Select({ children, placeholder }: SelectProps) {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />

        <SelectPrimitive.Icon>
          <ChevronDownIcon className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
```

E agora no meu arquivo `page.tsx` eu vou utilizar meu componente:

```js
<div className="grid grid-cols-form gap-3 pt-5">
    <label
      htmlFor="country"
      className="text-sm font-medium text-zinc-700"
    >
      Country
    </label>

    <Select placeholder="Select a country">
      <SelectItem value="br" text="Brazil" />
      <SelectItem value="us" text="United State" />
      <SelectItem value="rus" text="Russia" />
    </Select>
  </div>

  <div className="grid grid-cols-form gap-3 pt-5">
    <label
      htmlFor="timezone"
      className="text-sm font-medium text-zinc-700"
    >
      TimeZone
    </label>

    <Select placeholder="Select a timezone">
      <SelectItem value="utc8" text="São Paulo (GMT-03:00)" />
      <SelectItem value="utc3" text="Cuiabá (GMT-04:00)" />
      <SelectItem value="utc4" text="Manaus (GMT-04:00)" />
    </Select>
  </div>
```

# Input de Biografia

Vou trabalhar agora na construção do meu input de biografia, aonde o usuário vai poder deixar sua biografia por escrita para adicionar no seu perfil.

```js
<div className="grid grid-cols-form gap-3 pt-5">
  <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
    Bio
    <span className="mt-0.5 block text-sm font-normal text-zinc-500">
      Write a short introduction
    </span>
  </label>

  <div className="space-y-3">
    <div className="grid grid-cols-2 gap-3">
      <Select defaultValue="normal">
        <SelectItem value="normal" defaultChecked text="Normal text" />
        <SelectItem value="md" text="Markdown" />
      </Select>

      <div className="flex items-center gap-1">
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
        >
          <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
        >
          <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
        >
          <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
        >
          <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
        </button>
        <button
          type="button"
          className="rounded-md p-2 hover:bg-zinc-50"
        >
          <ListOrdered
            className="h-4 w-4 text-zinc-500"
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  </div>
</div>
```

Agora vou criar um novo componente para minha **textarea**:

```js
import { ComponentProps } from 'react'

export type TextareaProps = ComponentProps<'textarea'>

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
```

E pronto, agora é só chamar o componente passando um `id` e `defaultValue`, para que fique com um texto padrão. 

```js
<Textarea
  id="bio"
  defaultValue="I'm a Product Designer based in Melbourne, Australia. I specialise in UX/UI design, brand strategy, and Webflow development."
/>
```

E pronto meu layout está finalizado. 


# Animando portfólio

Vou deixar o projeto um pouco mais dinâmico, no momento as animações estão bem secas.

Umas das libs mais usadas para esse tipo de estilização é a `framerMotion`, mas como já usamos ela, quero apresentar uma nova lib que se chama `AutoAnimate`, para instalar essa lib é só usar o seguinte comando: 

```bash
npm i @formkit/auto-animate
```

Eu vou começar usando na minha lista de downloads, então no meu arquivo `FileList.tsx`, eu vou importar a lib e usa-la na minha lista de arquivos

```js
import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <div
            key={file.name}
            className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
          >
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>

            <div className="flex flex-1 flex-col items-start gap-1">
              <div className="flex flex-col">
                <span className="text-sm font-medium text-zinc-700">
                  {file.name}
                </span>
                <span className="text-sm text-zinc-500">
                  {formatBytes(file.size)}
                </span>
              </div>

              <div className="flex w-full items-center gap-3">
                <div className="h-2 flex-1 rounded-full bg-zinc-100">
                  <div className="h-2 w-4/5 rounded-full bg-violet-600" />
                </div>
                <span className="text-sm font-medium text-zinc-700">80%</span>
              </div>
            </div>

            <button
              type="button"
              className="ml-auto rounded-md p-2 hover:bg-zinc-50"
            >
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
          </div>
        )
      })}
    </div>
  )
}
```

# Animação na abertura do input

Sempre que eu abro meus inputs de select, eles abrem com uma animação bem seca, então vamos mudar isso, e dessa vez eu vou criar essas animações com o próprio Tailwind: 

```js
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 26rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      borderWidth: {
        6: '6px',
      },

      colors: {
        violet: {
          25: '#fcfaff',
        },
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
```

Agora no meu componente de select, eu adiciono a animação via tailwind:

```js
<SelectPrimitive.Portal>
  <SelectPrimitive.Content
    side="bottom"
    position="popper"
    sideOffset={8}
    className="animate-slideDownAndFade z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
  >
    <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
  </SelectPrimitive.Content>
</SelectPrimitive.Portal>
```


















