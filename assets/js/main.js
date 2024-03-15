const { createApp } = Vue

createApp({
    data() {
        return {
            activeContact: 0,
            contacts: [
                {
                    image: 'avatar_1.jpg',
                    name: 'Michele',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Michele My message with MicheleMy message with MicheleMy message with MichelevvMy message with Michele',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Michele',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Michele answer',
                            status: 'received'

                        }
                    ]
                }, {
                    image: 'avatar_2.jpg',
                    name: 'Fabio',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Fabio',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Fabio answer',
                            status: 'received'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Fabio',
                            status: 'sent'
                        }
                    ]
                }, {
                    image: 'avatar_3.jpg',
                    name: 'Samuele',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Samuele',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Samuele',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Samuele answer',
                            status: 'received'

                        }
                    ]
                }, {
                    image: 'avatar_4.jpg',
                    name: 'Alesandro B.',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Ale B.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Ale B.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Ale B. answer',
                            status: 'received'

                        }
                    ]
                }, {
                    image: 'avatar_5.jpg',
                    name: 'Alessandro L.',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Ale L.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Ale L.',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Ale L. answer',
                            status: 'received'

                        }                       

                    ]
                     
                }, {
                    image: 'avatar_6.jpg',
                    name: 'Alessandra',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Ale',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Ale',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Ale answer',
                            status: 'received'

                        }
                    ]
                }, {
                    image: 'avatar_7.jpg',
                    name: 'Marco',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Marco',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            msg: 'Marco answer',
                            status: 'received'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Marco',
                            status: 'sent'
                        }
                    ]
                }, {
                    image: 'avatar_8.jpg',
                    name: 'Luca',
                    lastMessage: 'Lorem ipsum dolor sit amet',
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            msg: 'My message with Luca',
                            status: 'sent'
                        },{
                            date: '10/01/2020 16:15:22',
                            msg: 'Luca answer',
                            status: 'received'

                        },
                        {
                            date: '10/01/2020 15:50:00',
                            msg: 'My message with Luca',
                            status: 'sent'
                        }
                        
                    ]
                }
            ],
            

        }

    },

    methods: {
        activeTheContact(index) {
            this.activeContact = index    
        },

        generateNewMessage(activeContact){
            console.log(this.contacts[activeContact]);
        }

        

    }
}).mount('#app')