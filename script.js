const photoContainer = document.querySelector('.photo-container')
const images = document.querySelectorAll('.item')


images.forEach(image => {
    image.addEventListener('click', () => {
        console.log("working")
        photoContainer.classList.toggle('hidden')
        photoContainer.appendChild(image)
    })
})