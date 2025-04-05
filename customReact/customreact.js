const mainContainer = document.getElementById("root");

/*version 1*/

/*
function customRender(newElement, container) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href' ,reactElement.props.href);
     domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement);
}
*/

/*version 2*/

function customRender(reactElement, mainContainer) {
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
        }
    mainContainer.appendChild(domElement);
} 



const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.youtube.com/',
        target: '_blank',
    },
    children: 'Click me to visit youtube'
}

customRender(reactElement, mainContainer);