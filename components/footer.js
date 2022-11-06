class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <footer class="text-center text-lg-start mt-auto footer">
            <div class="text-center text-white p-3">
                <div>
                    <p><b>Email:</b> osharp248@fareham.ac.uk</p>
                </div>
                <div>
                    <p>© 2022 Copyright: <a class="text-white" href="https://github.com/SeaLandBestLand">SeaLandBestLand</a></p>
                </div>
            </div>
        </footer>
      `;
    }
}

customElements.define('footer-component', Footer);
