'use strict';

const PREVIOUSLY_VISITED_ID = "previouslyVisited";
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
    for (let i = 0; i < savedData.length; i++) {
        const link = savedData[i];
        const a = document.createElement("a");
        a.setAttribute("href", link);
        const li = document.createElement("li");
        li.innerText = link;

        a.appendChild(li)
        ul.appendChild(a);
    }
}

function addPreviouslyVisited() {
    const savedData = getPreviouslyVisited();
    savedData.push(window.location.href);
    localStorage.setItem(PREVIOUSLY_VISITED_ID, JSON.stringify(Array.from(new Set(savedData))));
}
