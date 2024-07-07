document.addEventListener('DOMContentLoaded', () => {
    const photos = document.querySelectorAll('.photo');
    const hoverBox = document.getElementById('hover-box');

    photos.forEach(photo => {

        photo.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                photo.click();
            }
        });


        photo.addEventListener('mouseover', () => {
            const img = photo.querySelector('img').cloneNode();
            hoverBox.innerHTML = '';
            hoverBox.appendChild(img);

        });

        photo.addEventListener('mouseout', () => {
            hoverBox.innerHTML = '';
            var name = prompt("what car is this ?");
            alert(" you entered " + name);



        });
    });
});
