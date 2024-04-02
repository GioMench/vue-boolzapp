

const { createApp } = Vue;

createApp({
    data() {
        return {
            searchContact: "",
            activeContact: 0,
            value: 0,
            contacts: [
                {
                    image: "avatar_1.jpg",
                    name: "Michele",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Michele My message with MicheleMy message with MicheleMy message with MichelevvMy message with Michele",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Michele",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Michele answer",
                            status: "received",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_2.jpg",
                    name: "Fabio",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Fabio",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Fabio answer",
                            status: "received",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Fabio",
                            status: "sent",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_3.jpg",
                    name: "Samuele",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Samuele",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Samuele",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Samuele answer",
                            status: "received",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_4.jpg",
                    name: "Alesandro B.",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Ale B.",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Ale B.",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Ale B. answer",
                            status: "received",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_5.jpg",
                    name: "Alessandro L.",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Ale L.",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Ale L.",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Ale L. answer",
                            status: "received",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_6.jpg",
                    name: "Alessandra",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Ale",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Ale",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Ale answer",
                            status: "received",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_7.jpg",
                    name: "Marco",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Marco",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Marco answer",
                            status: "received",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Marco",
                            status: "sent",
                            id: null,
                        },
                    ],
                },
                {
                    image: "avatar_8.jpg",
                    name: "Luca",
                    lastMessage: "Lorem ipsum dolor sit amet",
                    messages: [
                        {
                            date: "10/01/2020 15:30:55",
                            msg: "My message with Luca",
                            status: "sent",
                            id: null,
                        },
                        {
                            date: "10/01/2020 16:15:22",
                            msg: "Luca answer",
                            status: "received",
                            id: null,
                        },
                        {
                            date: "10/01/2020 15:50:00",
                            msg: "My message with Luca",
                            status: "sent",
                            id: null,
                        },
                    ],
                },
            ],

            textMessage: "",
            //filteredContactList: ''
        };
    },
    mounted() {
        console.log(this.contacts);
        this.contacts.forEach((contact) => {
            contact.messages.forEach((message) => {
                message.id = ++this.value;
            });
        });

        this.increment()
    },
    methods: {
        activeTheContact(index) {
            this.activeContact = index;
        },

        increment() {
            this.value++;
        },

        generateNewMessage(activeContact) {
            console.log("activeContact", activeContact);
            console.log(this.contacts[activeContact]);
            this.contacts[activeContact].messages.push(
                {
                    date: "10/01/2020 15:30:55",
                    msg: this.textMessage,
                    status: "sent",
                    id: ++this.value,
                },
                {
                    date: "10/01/2020 15:30:55",
                    msg: "Ok!",
                    status: "received",
                    id: ++this.value,
                }
            ),
                (this.textMessage = "");
            console.log(this.contacts[activeContact].messages);
        },

        deleteMessage(event) {
            let messageId = event.target.id;
            console.log(messageId);
            let activeContact = this.contacts[this.activeContact];
            activeContact.messages = activeContact.messages.filter(
              (message) => message.id != messageId
            );
          },

    },

    computed: {
        filteredContactList() {
            return this.contacts.filter((contact) =>
                contact.name.toLowerCase().includes(this.searchContact.toLowerCase())
            );
        },
    },
}).mount("#app");