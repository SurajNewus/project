const tl = gsap.timeline()

tl.from('#logo',{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.5
})

tl.from('li',{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger : 0.3
})

tl.from('span',{
    y:-30,
    opacity:0,
    duration:0.5,
    delay:0.3,
    stagger : 0.3
})