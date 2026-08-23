class ShopOverlay {
    constructor() {
        this.modal = document.getElementById('shop-overlay-container')
        this.openButton = document.getElementById('shopSlideBtn')
        this.closeButton = document.getElementById('shopCloseBtn')
        this.overlayBackground = document.getElementById('shopOverlayBackground')

        this.init()
    }

    init() {

        this.openButton.addEventListener('click', (event) => {

            if (event && typeof event.preventDefault === 'function') event.preventDefault()

            const overlayActive = this.modal.dataset.overlay === '0'
            const url = (this.modal.dataset.url || '').trim()

            // Wenn overlay aktiviert und eine URL existiert -> neues Tab öffnen und Overlay NICHT anzeigen
            if (overlayActive && url !== '') {
                window.open(url, '_blank')
                return
            }

            this.modal.style.display = 'block';
            this.modal.setAttribute('style', 'padding: 0 !important')

            setTimeout(function () {
                document.querySelector("#shopPaddingContainer").style.transform = "translateX(0%)"
                document.querySelector('#shopOverlayBackground').style.opacity = "1"
                document.querySelector('#sticky-overlay-menu').style.opacity = "0"
            },10)
        });

        this.closeButton.addEventListener('click', () => {
            document.querySelector("#shopPaddingContainer").style.transform = "translateX(100%)"
            document.querySelector('#shopOverlayBackground').style.opacity = "0"

            setTimeout(function () {
                document.querySelector('#sticky-overlay-menu').style.opacity = "1"
                document.getElementById('shop-overlay-container').style.display = "none"
            },1000)
        })

        // Hintergrund klicken = schließen
        if (this.overlayBackground) {
            this.overlayBackground.addEventListener('click', () => {
                this.closeButton.click()   // nutzt denselben Logikpfad wie X
            })
        }
    }
}
// $(document).ready(function () {
//     const shopOverlay = new shopOverlay();
// });

document.addEventListener('DOMContentLoaded', () => {
    const shopOverlay = new ShopOverlay();
});
