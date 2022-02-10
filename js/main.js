const vue = new Vue(
    {
        el: "#root",
        data :{

            items: [
                {
                    url:'img/01.jpg',
                    name:'Svezia',
                    alt:'lago in Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
                },
                {
                    url:'img/02.jpg',
                    name:'Svizzera',
                    alt:'lago in Svizzera',
                    text:'Lorem ipsum'
                },
                {
                    url:'img/03.jpg',
                    name:'Gran Bretagna',
                    alt:'Big Ben London',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
                },
                {
                    url:'img/04.jpg',
                    name:'Germania',
                    alt:'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                },
                {
                    url:'img/05.jpg',
                    name:'Paradise',
                    alt:'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
                }
            ],

            active: 0,
            play: 0
        },
        methods: {
            //funzione per vedere la foto precedente
            previous() {

                if(this.active == 0){
                    this.active = this.items.length - 1;
                }else{
                    this.active--;
                }
                this.resetPlay();
                
            },

            //funzione per vedere la foto successiva
            next() {

                if(this.active == this.items.length - 1){
                    this.active = 0;
                }else{
                    this.active++;
                }
                this.resetPlay();
            },

            //Funzione per l'autoplay
            autoPlay() {
                
                this.play = setInterval(() =>{
                    this.next();
                }, 3000);
            },

            //funzione per resettare la funzione di autoplay
            resetPlay() {
                clearInterval(this.play);
                this.autoPlay();
            },

            //funzione richiamata in caso di over per stoppare l'autoplay
            stopOver(){
                clearInterval(this.play);
            },

            //funzione per riprendere l'autoplay 
            playLeave(){
                this.autoPlay();
            }
            
        },
        
        //invocazione dell'autoplay alla creazione della pagina
        created: function() {
            this.autoPlay();
        }
    }

);
