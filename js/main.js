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

            previous() {

                if(this.active == 0){
                    this.active = this.items.length - 1;
                }else{
                    this.active--;
                }
                this.resetPlay();
                
            },

            next() {

                if(this.active == this.items.length - 1){
                    this.active = 0;
                }else{
                    this.active++;
                }
                this.resetPlay();
            },

            autoPlay() {
                
                this.play = setInterval(() =>{
                    this.next();
                }, 250);
            },

            resetPlay() {
                clearInterval(this.play);
                this.autoPlay();
            },

            stopOver(){
                clearInterval(this.play);
            },

            playLeave(){
                this.autoPlay();
            }
            
        },
        
        created: function() {
            this.autoPlay();
        }
    }

);
