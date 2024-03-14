const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact : 0,
            contacts: [
                {
                    image: 'avatar_1.jpg',
                    name: 'Michele',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Michele',
                    contactMessage: 'Michele answer'
                }, {
                    image: 'avatar_2.jpg',
                    name: 'Fabio',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Fabio',
                    contactMessage: 'Fabio answer'
                }, {
                    image: 'avatar_3.jpg',
                    name: 'Samuele',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Samuele',
                    contactMessage: 'Samuele answer'
                }, {
                    image: 'avatar_4.jpg',
                    name: 'Alesandro B.',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Ale B.',
                    contactMessage: 'Ale B. answer'
                }, {
                    image: 'avatar_5.jpg',
                    name: 'Alessandro L.',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Ale L.',
                    contactMessage: 'Ale L. answer'
                }, {
                    image: 'avatar_6.jpg',
                    name: 'Alessandra',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Ale',
                    contactMessage: 'Ale answer'
                }, {
                    image: 'avatar_7.jpg',
                    name: 'Marco',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Marco',
                    contactMessage: 'Marco answer'
                }, {
                    image: 'avatar_8.jpg',
                    name: 'Luca',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    myMessage:' My message with Luca',
                    contactMessage: 'Luca answer'
                }
            ],

           
        }
 
    },

    methods: {
        activeTheContact(index){
            this.activeContact = index 
        }

    }
}).mount('#app')