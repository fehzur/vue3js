<template>
    <div id="home">
    <div class="navbar">
        <div class="contact">
            <div class="icone">
                <a href=""><img :src="icone[0]" alt=""></a>
                <a href=""><img :src="icone[1]" alt=""></a>
                <a href=""><img :src="icone[2]" alt=""></a>
                <a href=""><img :src="icone[3]" alt=""></a>
            </div>
            <div class="message">
                <input type="text" placeholder="Veuillez entrer ici ...">
            </div>
        </div>

        <div class="navigation">
            <div class="logo">
                <h1>INFO-MAD.COM</h1>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="">MAISON</a></li>
                    <li><a href="">CLIENTS</a></li>
                    <li><a href="">CHAMBRE</a></li>
                    <li><a href="#louer">LOUER</a></li>
                    <li id="connexion"><a href="/logout">DECONNEXION
                    </a></li>
                </ul>
            </div>
        </div>
    </div>

    <div class="body">
        <div class="texte">
            <h1>BIENVENUE A VOUS : faites comme chez vous.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim voluptatum omnis similique illum placeat fugit, voluptatem in vel consequuntur distinctio reiciendis porro consequatur magni harum temporibus. Suscipit mollitia voluptates harum, voluptatibus laborum laboriosam rerum obcaecati nisi! Atque minus, deleniti modi ipsa nulla pariatur esse expedita. Soluta accusamus ducimus consequatur amet totam perferendis vel, officiis eligendi?</p>
        </div>
        <div class="premier">
            <img :src="imagePremier[0]" width="50%">
            <img id="relative" :src="imagePremier[1]" width="30%">
        </div>
        <div class="typewritter">
            <p id="texte"></p>
        </div>
    </div>
    <div class="missions">
        <h1>NOTRE MISSIONS :</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptas illum, quasi voluptates, iste delectus distinctio odio accusamus temporibus ex earum perferendis cumque nemo nobis tenetur labore at. Voluptatum necessitatibus quia quis autem dolores, cum facilis soluta dolorum perspiciatis eligendi incidunt doloremque tenetur odit veniam velit repellat alias assumenda? Suscipit, velit magni ducimus nulla quo iusto earum temporibus pariatur laborum ipsum libero harum, ratione in voluptatem architecto alias consectetur, minima ut odio totam aut. Obcaecati necessitatibus neque id, distinctio fugiat magnam, vero non aspernatur ipsum corrupti beatae praesentium ipsam. Est unde nulla impedit. Voluptas debitis atque dolorem rem ut sint obcaecati asperiores et eos necessitatibus veniam dolor aperiam excepturi facilis earum, minima dolores reprehenderit rerum maxime non. Dolorem quas animi repellendus, dolor laudantium officia nulla cum quae iste dignissimos neque sequi, eligendi consectetur doloribus tenetur doloremque labore quisquam quaerat harum rerum! Sed delectus earum nam adipisci! Alias laudantium doloribus itaque!</p>
    </div>

    <div class="louer">
        <h1 id="louer">Quelles sont nos produits :</h1>
        <div class="propriete">
        <div v-for="(item, index) in item" :key="index" class="un">
                <h1>{{ item.title }}</h1>
            <div class="one">
                <img :src="item.image" alt="">
            </div>
            <p>{{ item.info }}</p>
                    <h3>Voulez-vous voir tous les contenues ?</h3>
                <div class="prix">
                    <button @click="showDetails(item)" id="premier"><a>VOIR PLUS</a></button>
                </div>
        </div>
        </div>
    </div>

    <div class="new-background">
        <div class="qualite">
            <h1>NOUS SOMMES PREFESSIONELS</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quod commodi adipisci officiis excepturi, explicabo, minima dolorum vitae repudiandae facere magni at quae dolor sapiente reiciendis assumenda ut quo sunt consequatur, pariatur nulla quibusdam unde blanditiis. Velit omnis voluptatibus, explicabo incidunt, deserunt nesciunt eligendi molestias, ratione obcaecati unde animi autem quod odit rem. Aliquam, ipsa sit. Voluptatum quo cupiditate laudantium quia illum praesentium harum culpa eius tempore blanditiis aperiam saepe, dolorem atque ab ratione voluptates dolor deserunt quisquam iste nemo? Sequi minus distinctio eum, voluptatum aut illo mollitia neque, adipisci, saepe quibusdam quisquam. Id excepturi dolor accusantium sequi voluptatum obcaecati vero eius numquam provident quidem inventore veniam consectetur consequuntur accusamus reprehenderit culpa cupiditate cumque porro, repellat temporibus sunt aliquam. Reprehenderit voluptatibus dolore molestiae sequi soluta, quam adipisci repellendus, debitis, ut sunt asperiores. Accusantium non veritatis ad, ex numquam provident aut quis voluptatibus perferendis temporibus rerum saepe quos eum consequuntur dolorum!</p>
        </div>
    </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            items:[
                { texte: 'Retour en force', images: '../../public/image/1.png'},
                { texte: 'Back to school', images: '../../public/image/2.png'}
            ],
            icone: [
                '../../image/phone-icon.png',
                '../../image/info-icon-04.png',
                '../../image/info-icon-03.png',
                '../../image/info-icon-01.png'
            ],
            imagePremier:[
            "../../public/image/property-05.jpg",
            "../../public/image/property-04.jpg",
            ],
            imageProprieter:[
            '../../public/image/property-03.jpg',
            '../../public/image/property-04.jpg',
            '../../public/image/property-05.jpg',
            '../../public/image/property-06.jpg',
            ],
            item:[
                {id:1, title:'JETCLEAN', image:'../../public/image/property-01.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:2, title:'CCLEANER', image:'../../public/image/property-02.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:3, title:'FLSTUDIO', image:'../../public/image/property-03.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:4, title:'DXDIAG', image:'../../public/image/property-04.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:5, title:'GOOGLE BARD', image:'../../public/image/property-05.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:6, title:'GPT CHAT', image:'../../public/image/property-06.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'}
            ],
            selectedItem: null
        }
    },
    methods: {
    showDetails(item) {
        this.selectedItem = item,
        this.$router.push({ name: 'information', params: { id: item.id } });
        console.log(this.selectedItem);
    }
}
}
</script>