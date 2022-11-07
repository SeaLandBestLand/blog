class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark" id="navbar">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Oliver's Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../index.html">Home</a>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programming
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="../pages/c.html">C</a></li>
                    <li><a class="dropdown-item" href="../pages/python.html">Python</a></li>
                    <li><a class="dropdown-item" href="../pages/html+css.html">HTML/CSS</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Content Areas
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="../pages/ca 1-4.html">CA 1-4</a></li>
                    <li><a class="dropdown-item" href="../pages/ca 5-8.html">CA 5-8</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="../pages/ui+ux.html">UI/UX</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../pages/industry placement.html">Industry Placement</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../pages/events.html">Events</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../pages/blog.html">Blog</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="../pages/masterclasses.html">Masterclasses</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      `;
    }
}

customElements.define('header-component', Header);
