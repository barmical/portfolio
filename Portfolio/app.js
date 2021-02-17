// function navAppear(){
//     const introText = document.querySelector('.list4')
//     const navbar = document.querySelector('.hidden-navbar')
//     const introPosition = introText.getBoundingClientRect().top
//     console.log(introPosition)
//     if(introPosition < 60){
//         navbar.style.opacity = '1'
//         navbar.style.transform = 'translateY(0px)';
//     } else{
//         navbar.style.opacity = '0'
//         navbar.style.transform = 'translateY(-85px)'
//     }
// }

// window.addEventListener('scroll', navAppear)



const contactBar = document.querySelector('.contact-bar')
const gmail = document.querySelector('.gmail')
const linkedin = document.querySelector('.linkedin')
const instagram = document.querySelector('.instagram')
const containerImg1 = document.querySelector('.container-img')
const containerImg2 = document.querySelector('.container-img2')
const containerImg3 = document.querySelector('.container-img3')

contactBar.addEventListener('mouseenter', function(){
    contactBar.style.transform = 'translateX(0px)'
})

contactBar.addEventListener('mouseleave', function(){
    contactBar.style.transform = 'translateX(43px)'
})

gmail.addEventListener('mouseenter', function(){
    containerImg1.style.backgroundColor = 'rgb(255, 246, 232)'
    containerImg1.style.transition = '0.5s'
})
gmail.addEventListener('mouseleave', function(){
    containerImg1.style.backgroundColor = 'rgb(252, 234, 203)'
    containerImg1.style.transition = '0.5s'
})
linkedin.addEventListener('mouseenter', function(){
    containerImg2.style.backgroundColor = 'rgb(255, 246, 232)'
    containerImg2.style.transition = '0.5s'
})
linkedin.addEventListener('mouseleave', function(){
    containerImg2.style.backgroundColor = 'rgb(252, 234, 203)'
    containerImg2.style.transition = '0.5s'
})
instagram.addEventListener('mouseenter', function(){
    containerImg3.style.backgroundColor = 'rgb(255, 246, 232)'
    containerImg3.style.transition = '0.5s'
})
instagram.addEventListener('mouseleave', function(){
    containerImg3.style.backgroundColor = 'rgb(252, 234, 203)'
    containerImg3.style.transition = '0.5s'
})


anime({
  targets: '.mesin-tik',
  opacity: [0.2, 1],
  scale: [0.9, 1],
  easing: 'easeInOutQuad',
  autoplay: true,
  duration: 1200,
});

anime({
  targets: '.foto-akbar',
  opacity: [0, 1],
  scale: [0.9, 1],
  easing: 'easeInOutQuad',
  autoplay: true,
  duration: 1200,
});

AOS.init({
    offset: 100,
    duration: 1000,
    easing: 'ease-in-quart'
});

var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  opacity: [0.2, 1],
});

tl
.add({
  targets: '.list1',
  opacity: [0.2, 1],
})
.add({
  targets: '.list2',
  opacity: [0.2, 1],
}, '-=500')
.add({
  targets: '.list3',
  opacity: [0.2, 1],
}, '-=500')

.add({
  targets: '.list4',
  opacity: [0.2, 1],
}, '-=500');

// $('.list-bar a').on('click', function(e){
//     if(this.hash !== ''){
//         e.preventDefault()
        
//         const hash = this.hash
//         $('html, body').animate({
//             scrollTop: $(hash).offset().top
//         }, 100);
//     }
// })

// var scroll = new SmoothScroll('.list-bar a[href*="#"]', {
//     speed: 1000
// });
