const home= document.getElementById('home')
const missions= document.querySelector('.missions')
const auto= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, deserunt? Laboriosam atque similique, voluptate amet aperiam culpa fuga ea explicabo nisi animi facilis ex suscipit dolorem possimus sequi molestiae ratione molestias, maiores aliquid voluptatibus ad deleniti beatae! Ab placeat commodi voluptates ipsam temporibus illum dicta dolore, voluptas ducimus optio fugiat at suscipit animi voluptatum. Fugiat dignissimos odio assumenda mollitia provident animi consequatur. Dolorum modi quaerat minus, amet quibusdam neque. Maiores nostrum modi consectetur similique, beatae sapiente voluptates earum ipsam voluptatibus inventore. Quis velit aperiam id placeat beatae perspiciatis ipsa, pariatur odio quas atque magnam quibusdam, corporis commodi ex laborum tempora doloremque laudantium libero quaerat eum? Tenetur similique dolore enim, aliquid suscipit dolores magni eligendi, perferendis laudantium pariatur eaque accusantium quia nisi consectetur id ab perspiciatis, voluptatum obcaecati alias tempore expedita ad. Eligendi, sequi hic ipsam magnam ullam beatae odit modi accusamus reprehenderit, enim et nulla. Nihil delectus aliquid cumque quisquam, id iusto? Deserunt dolores similique vero, numquam dolore laborum tempora tenetur ipsa consectetur officiis adipisci exercitationem at quaerat sunt minus voluptate alias iure, quo nam. Sit expedita adipisci aliquid praesentium amet aperiam dolorum, omnis molestias repellat dicta, a doloribus rem dolores reprehenderit minima tempora alias ducimus suscipit est architecto perspiciatis!'
var speed=20
var index=0

window.addEventListener('load',function(){
    home.style.transform='scale(1)'
})

window.addEventListener('scroll', ()=>{
    let missions_pos= missions.getBoundingClientRect()

    if(missions_pos.bottom>=0){
        missions.style.opacity='1'
    }
})

function typewritter(){
    let texte= document.getElementById('texte').innerText= auto.slice(0, index)
    index++;
}
setInterval(typewritter, speed)

