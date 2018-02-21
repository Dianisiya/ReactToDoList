const KeyPressListener = func => {
    let pressed = [];
    
    document.onkeydown = event =>{
        pressed.push(event.key);
    
        if ((pressed.length === 2) && (pressed.indexOf('Control') === 0) && (pressed.indexOf('Enter') === 1))
            func()
    }
    
    document.onkeyup = event => pressed = pressed.filter(key => key !== event.key);
}

export default KeyPressListener;