const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
            {
                image: 'avatar_1.jpg',
                name: 'Michele',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_2.jpg',
                name: 'Fabio',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_3.jpg',
                name: 'Samuele',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_4.jpg',
                name: 'Alesandro B.',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_5.jpg',
                name: 'Alessandro L.',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_6.jpg',
                name: 'Alessandra',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_7.jpg',
                name: 'Marco',
                lastMessage: 'Lorem ipsum dolor sit amet'
            },{
                image: 'avatar_8.jpg',
                name: 'Luca',
                lastMessage: 'Lorem ipsum dolor sit amet'
            }
        ]
        
      }
    }
  }).mount('#app')