// My Custom Header

const headerTemplate = document.createElement('template');
headerTemplate.innerHTML = `

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
<header class="text-gray-700 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
    </svg>
    <span class="ml-3 text-xl">Manan Bhanushali</span>
  </a>
  <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
    <a href="https://mananbhanushali.github.io/" class="mr-5 hover:text-gray-900">Home</a>
    <a href="https://mananbhanushali.github.io/projects" class="mr-5 hover:text-gray-900">Projects</a>
    <a href="https://mananbhanushali.github.io/download" class="mr-5 hover:text-gray-900">Download</a>
  </nav>
</div>
</header>
`

class Header extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(headerTemplate.content);
    }
}

customElements.define('my-header', Header);


// My Custom Footer

const footerTemplate = document.createElement('template');
footerTemplate.innerHTML = `

<link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

<footer class="text-gray-500 bg-gray-900 body-font">
<div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-no-wrap flex-wrap flex-col">
  <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <a class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-blue-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Manan Bhanushali</span>
    </a>
  </div>
  <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">CATEGORIES</h2>
      <nav class="list-none mb-10">
        <li>
            <a href="https://mananbhanushali.github.io/" class="text-gray-600 hover:text-white">Home</a>
          </li>
          <li>
            <a href="https://mananbhanushali.github.io/projects"  class="text-gray-600 hover:text-white">Projects</a>
          </li>
          <li>
            <a href="https://mananbhanushali.github.io/download" class="text-gray-600 hover:text-white">Download</a>
          </li>
      </nav>
    </div>
    <div class="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 class="title-font font-medium text-white tracking-widest text-sm mb-3">PROJECTS</h2>
      <nav class="list-none mb-10">
        <li>
          <a href="https://mananbhanushali.github.io/pong-game" class="text-gray-600 hover:text-white">Pong Game</a>
        </li>
        <li>
          <a href="https://mananbhanushali.github.io/space-invaders" class="text-gray-600 hover:text-white">Space Invaders</a>
        </li>
      </nav>
    </div>
</footer>


`

class Footer extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(footerTemplate.content);
    }
}

customElements.define('my-footer', Footer);

