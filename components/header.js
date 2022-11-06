class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">Oliver's Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Programming
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">C</a></li>
                    <li><a class="dropdown-item" href="#">Python</a></li>
                    <li><a class="dropdown-item" href="#">HTML/CSS</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Content Areas
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">CA 1-4</a></li>
                    <li><a class="dropdown-item" href="#">CA 5-8</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Projects
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><a class="dropdown-item" href="#">UI/UX</a></li>
                  </ul>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Industry Placement</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Events</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Blog</a>
                </li>
                <!-- -->
                <li class="nav-item">
                  <a class="nav-link" aria-current="page" href="#">Masterclasses</a>
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
