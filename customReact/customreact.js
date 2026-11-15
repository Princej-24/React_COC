// learning how React creates HTML elements and injects them into the DOM behind the scenes

function customRender(reactElement, container){ // How do you want to create and insert it?
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    container.appendChild(domElement)
    */ // this code is correct but not fully correct 

    const domElement = document.createElement(reactElement.type) // This line creates an actual HTML element
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) { // for-in loop // A for...in loop iterates over the keys of an object
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement)
}




const reactElement = { // What do you want to create?
    type: 'a',
    props: { // properties
        href: 'https://google.com', // Where should the link take us?
        target: '_blank' // where should the link open
    },
    children: 'Click me to visit google' // This is the text that will appear inside the anchor tag
}

/* // this is what we want to create // this is the part of reactElement

<a href="https://google.com" target="_blank">
    Click me to visit google
</a>

*/




const mainContainer = document.querySelector('#root') // Where do you want to create it?

customRender(reactElement, mainContainer) // (kya inject kro,kaha pr inject kro)


// uper tho maine apna react banaya hai vo bhi apne method s , pr agr hme apna react banana h aur vo bhi react k method s tho yeshe krna hoga 
// pehle type ayega , uske bad key ayega , uske bad reference ayega ,uske bad props ayega ye ek rule h and jb sara tree bn jata hai tho ab variable inject kr skte new variable

// const reactElement = React.createElement(
//     'a', // type
//     {href: 'https://google.com',target: '_blank' }, // properties
//     'click me to visit google', // innerHTML
//     
// )
//
// ReactDOM.createRoot(document.getElementById('root')).render(
 
//     reactElement // calling
  
// )



// example of variable injection
// const anotherUser = "chai aur react" // yha pr variable banaya gya

// const reactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target: '_blank' },
//     'click me to visit google',
//     anotherElement // yha pr inject kia gya
// )


// babel =  Babel is a JavaScript compiler (or transpiler) that converts modern JavaScript code into a version of JavaScript that older browsers can understand 