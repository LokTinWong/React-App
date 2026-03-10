/*
 * Function-based component.
 */

function Message() {
    const name = 'User';
    
    if (name) {
        // This JSX, for JavaScript XML. Allows us to write HTML in React. HTML eventually gets converted into JavaScript.
        return <h1>Hello {name}</h1>;
    } else {
        return <h1>Hello World</h1>;
    }
}

export default Message;