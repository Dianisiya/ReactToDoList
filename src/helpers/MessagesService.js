class MessagesService{
    constructor(){

        this.listeners =[];

        this.addListener = this.addListener.bind(this);
        this.pushMessage = this.pushMessage.bind(this);
    }

    addListener(listener){
        this.listeners.push(listener)
    }

    pushMessage(message){
        this.listeners.forEach(listener => listener(message));
    }
}

export default MessagesService