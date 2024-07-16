var vol = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Funzione per creare il popup
function createPopupEnableSounds(file) {
    var popup = document.createElement("div");
    popup.className = "popup";
    applyStyles(popup, {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: "9999",
    });

    var popupContent = document.createElement("div");
    popupContent.className = "popup-content";
    applyStyles(popupContent, {
        backgroundColor: "#fff",
        padding: "20px",
        borderRadius: "5px",
        textAlign: "center",
    });
    popup.appendChild(popupContent);

    var message = document.createElement("p");
    message.textContent = "Vuoi accettare le notifiche sonore?";
    popupContent.appendChild(message);

    var buttonsContainer = document.createElement("div");
    buttonsContainer.className = "popup-buttons";
    applyStyles(buttonsContainer, {
        display: "flex",
        justifyContent: "center",
    });

    var accettaButton = document.createElement("button");
    accettaButton.textContent = "Accetta";
    accettaButton.onclick = function () {
        enableSounds(file);
        chiudiPopup();
    };
    applyStyles(accettaButton, {
        margin: "0 10px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#3baf4a",
        color: "#fff",
    });
    buttonsContainer.appendChild(accettaButton);

    var rifiutaButton = document.createElement("button");
    rifiutaButton.textContent = "Rifiuta";
    rifiutaButton.onclick = chiudiPopup;
    applyStyles(rifiutaButton, {
        margin: "0 10px",
        padding: "10px 20px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        backgroundColor: "#e53935",
        color: "#fff",
    });
    buttonsContainer.appendChild(rifiutaButton);

    popupContent.appendChild(buttonsContainer);

    var body = document.getElementsByTagName("body")[0];
    body.appendChild(popup);
}

function applyStyles(element, styles) {
    for (var property in styles) {
        element.style[property] = styles[property];
    }
}

// Funzione per chiudere il popup
function chiudiPopup() {
    var popup = document.querySelector(".popup");
    popup.parentNode.removeChild(popup);
}

async function enableSounds(url) {
    const audio = new Audio(url);
    while (true) {

        await sleep(1000);
        if (vol) {
            audio.play();
            vol = false;
        }
    }
}

function crossBrowserNotificationSoundPlay() {
    vol = true;
}