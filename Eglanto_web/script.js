
gsap.from("#nav ul",{
    y:-100,
    duration:1,
    delay:0.4,
    stagger:0.1
})

gsap.from("#logo, #eglanto p",{
    y:-100,
    delay:0.6,
    duration:1,  
    stagger:0.1
})
gsap.from("#side_div",{
    x:100,
    duration:1,
    delay:1.1,
    scale:0,
    opacity:0
})

gsap.from("#main h5, #bangle_pic, #text_page1 p",{
    x:-100,
    delay:0.9,
    duration:1,
    stagger:0.1,
    opacity:0
})
gsap.from("#image_1, #big_oval, #image_2",{
    scale:0,
    duration:1,
    delay:1.1,
    opacity:0,
    stagger:0.2
})
gsap.from("#see_all, #circle, #play_video",{
    scale:0,
    duration:1.1,
    opacity:0,
    delay:0.8,
    stagger:0.2
})
