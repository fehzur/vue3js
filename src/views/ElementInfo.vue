<template>
    <div id="show">
        <div v-if="item" class="show">
            <h1>{{ item.title }}</h1>
            <img :src="item.image" alt="">
            <p>{{ item.info }}</p>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      id: {
        type: [String, Number],
        required: true,
      },
    },
    data() {
      return {
        item: null,
      };
    },
    created() {
      // Vous pourriez également récupérer cet item via une requête API ou un store
      const items = [
        // Remplacez avec vos données d'items
                {id:1, title:'JETCLEAN', image:'../../public/image/property-01.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:2, title:'CCLEANER', image:'../../public/image/property-02.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:3, title:'FLSTUDIO', image:'../../public/image/property-03.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:4, title:'DXDIAG', image:'../../public/image/property-04.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:5, title:'GOOGLE BARD', image:'../../public/image/property-05.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'},
                {id:6, title:'GPT CHAT', image:'../../public/image/property-06.jpg', info:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere blanditiis nulla molestias. Explicabo reprehenderit veniam nulla numquam dolorem atque harum. Tempore totam, porro explicabo aliquid quaerat voluptas est consectetur hic?'}
      ];
      this.item = items.find(item => item.id.toString() === this.id);
    }
  };
  </script>

  <style>
  #show{
    margin: 10px 15px;
    background-color: beige;
    text-align: center;
  }
        div.show{
            width: 100%;
        }

        div.show img{
            width: 90%;
        }
        div.show p{
            padding-top: 20px;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            font-weight: bolder;
        }
</style>