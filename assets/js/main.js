// gsap matchMedia를 위한 Plugin
gsap.registerPlugin(ScrollTrigger);

// Lenis js
const lenis = new Lenis({})
lenis.on('scroll', ScrollTrigger.update)
gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})
gsap.ticker.lagSmoothing(0)

// .group-submenu 출력
$('.btn-menu').click(function(){
  $('.group-gnb').toggleClass('on')
  $('.group-submenu').toggleClass('on')

  if($('.group-submenu').hasClass('on')){
    const subMenuItem = $('.group-submenu .menu-item')
    const subMenuTl1 = gsap.timeline({})
    subMenuTl1
    .from(subMenuItem[0],{y:-30,opacity:0},'a+=.15')
    .from(subMenuItem[1],{y:-30,opacity:0},'a+=.2')
    .from(subMenuItem[2],{y:-30,opacity:0},'a+=.25')
    .from(subMenuItem[3],{y:-30,opacity:0},'a+=.3')
    .from(subMenuItem[4],{y:-30,opacity:0},'a+=.35')
    .from(subMenuItem[5],{y:-30,opacity:0},'a+=.4')
    .from($('.group-submenu .mobile-list'),{y:-30,opacity:0},'a+=.45')
  }
})

// .lang-box 출력
$('.btn-lang').click(function(){
  $('.lang-box').toggleClass('on')
})

// sc-intro 인트로모션
const introTitleWrap = $('.sc-intro .title-wrap span')
const contMotionTl = gsap.timeline({})
contMotionTl
.to('.group-cont-motion',{opacity:0,visibility:'hidden',delay:1.5})
.to('.wrapper',{opacity:1})
.fromTo(introTitleWrap[0],{yPercent:100},{yPercent:0})
.fromTo(introTitleWrap[1],{yPercent:100},{yPercent:0,delay:-.1})
.fromTo(introTitleWrap[2],{yPercent:100},{yPercent:0,delay:-.1})

ScrollTrigger.matchMedia({
  '(min-width:1024px)':function(){
    // sc-intro .group-first
    const introTl1 = gsap.timeline({
      scrollTrigger:{
        // markers:true,
        trigger:".intro",
        start:'0 0',
        end:'100% 0',
        scrub:0
      }
    })
    introTl1
    .to('.sc-intro .group-first',{yPercent:-100},'a')
    .to('.sc-intro .group-first .title-area',{yPercent:100},'a')
    
    // sc-produce sticky-area
    ScrollTrigger.create({
      // markers:true,
      trigger:'.sc-produce .content-list.second',
      start:'0 95%',
      end:'0 0',
      onEnter:function(){
        $('.sc-produce').addClass('on')
      },
      onLeaveBack:function(){
        $('.sc-produce').removeClass('on')
      }
    })

    gsap.utils.toArray('.sc-produce .content-item').forEach(el => {
      ScrollTrigger.create({
        trigger:el,
        start:'0 60%',
        end:'0 0',
        onEnter:function(){
          el.classList.add('on')
        },
      })
    });
  }
})

// sc-app swiper
const swiperApp = new Swiper('.swiper-app',{
  slidesPerView: 'auto',
  spaceBetween:50,
  speed:300,
  loop:true,
  navigation: {
    prevEl: ".swiper-app .btn-prev",
    nextEl: ".swiper-app .btn-next",
  },
  pagination: {
    el: ".swiper-app .pagination",
  },
  breakpoints: {    
    319: {
      spaceBetween: 10,
    },
    768: {
      spaceBetween: 10,
    },
    1023: {
      spaceBetween: 50,
    },
  },
})

gsap.from('.sc-app .swiper-slide',1,{
  scrollTrigger:{
    trigger:'.sc-app',
    start:'0 50%',
    end:'100% 100%',
    // scrub:0,
    // markers:true,
  },
  stagger:.1,
  xPercent:30,
  opacity:0
})


// sc-about 텍스트 opacity
const aboutText = new SplitType('.sc-about .desc', { types: 'words, chars', });
gsap.from('.sc-about .desc .word',{
  scrollTrigger:{
    // markers:true,
    trigger:'.sc-about',
    start:'0 0%',
    end:'100% 100%',
    scrub:0,
  },
  stagger:{
    from:"random",
    each:0.2,
  },
  opacity:0.3
})

// sc-product swiper
const swiperProduct = new Swiper('.swiper-product',{
  speed:1000,
  loop:true,
  navigation:{
    prevEl:'.swiper-product .btn-prev',
    nextEl:'.swiper-product .btn-next'
  },
  pagination:{
    el:'.swiper-product .pagination'
  },
  breakpoints:{
    319: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 2,
    },
    1023: {
      slidesPerView: 1.3,
    }
  }
})

// btn-chatting
$('.btn-chatting').click(function(){
  $(this).toggleClass('on')
})