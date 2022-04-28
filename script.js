const photoContainer = document.querySelector('.photo-container')
const images = document.querySelectorAll('.item')
const gallery = document.querySelector('.gallery')
const footer = document.querySelector('footer')
const close1 = document.querySelectorAll('.close')
// const close2 = document.querySelector('.close')
const galImg = document.querySelectorAll('.galImg')
const desc = document.querySelectorAll('.desc')

// close2.addEventListener('click', () => {
//     console.log('working')
//     photoContainer.classList.add('hidden')
// })

close1.forEach(ele => {
    ele.addEventListener('click', () => {
        console.log('working');
        ele.parentNode.classList.add('hidden')
        // gallery.classList.remove('trans')
        // footer.classList.remove('trans')
    })
})

// images.forEach(item => {
    
// })




images.forEach(image => {
    image.addEventListener('click', () => {
        galImg.forEach(img => {
            img.style.width = "70vw";
        })

        close1.forEach(item => {
            item.classList.remove('hidden')
            
        })

        desc.forEach(item => {
            item.classList.remove('hidden')
        })
        photoContainer.appendChild(image)
        photoContainer.classList.remove('hidden')
        gallery.classList.add('trans')
        footer.classList.add('trans')
    })

    // document.querySelector('.close').addEventListener('click', () => {
    //     console.log('working')
    //     photoContainer.classList.add('hidden')
    //     gallery.classList.remove('trans')
    // })
})