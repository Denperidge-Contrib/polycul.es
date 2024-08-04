'use strict';

const PREVIOUSLY_VISITED_ID = "previouslyVisited";
function getHash() {
    const pathname = window.location.pathname;
    return pathname.substring(pathname.lastIndexOf("/") + 1);
}

function getPreviouslyVisited() {
    const savedData = localStorage.getItem(PREVIOUSLY_VISITED_ID);
    if (savedData) {
        return JSON.parse(savedData);
    } else {
        return [];
    }
}

function viewPreviouslyVisited() {
    const ul = document.querySelector("#previouslyVisited ul");
    const savedData = getPreviouslyVisited();
    if (savedData.length >= 1) {
        // This header is hidden by default
        document.querySelector("#previouslyVisited h2").setAttribute("style", "");
    }
    for (let i = 0; i < savedData.length; i++) {
        const hash = savedData[i];
        const a = document.createElement("a");
        a.setAttribute("href", window.location.origin + "/" + hash);
        const li = document.createElement("li");
        li.innerText = hash;

        a.appendChild(li)
        ul.appendChild(a);
    }
}

function addPreviouslyVisited() {
    const savedData = getPreviouslyVisited();
    const currentHash = getHash()
    savedData.push(getHash());
    localStorage.setItem(PREVIOUSLY_VISITED_ID, JSON.stringify(Array.from(new Set(savedData))));
}
