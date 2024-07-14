console.log('%c HI', 'color: firebrick')
// Ensure the JavaScript runs after the HTML has loaded
document.addEventListener('DOMContentLoaded', () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const dogImageContainer = document.getElementById('dog-image-container');
  
    fetch(imgUrl)
     .then(response => response.json())
     .then(data => {
        data.message.forEach(imageUrl => {
          const imgElement = document.createElement('img');
          imgElement.src = imageUrl;
          dogImageContainer.appendChild(imgElement);
        });
      });
  });
  // Ensure the JavaScript runs after the HTML has loaded
document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogBreedsList = document.getElementById('dog-breeds');
  
    fetch(breedUrl)
     .then(response => response.json())
     .then(data => {
        Object.keys(data.message).forEach(breed => {
          const listItem = document.createElement('li');
          listItem.textContent = breed;
          dogBreedsList.appendChild(listItem);
        });
      });
  });
  // Ensure the JavaScript runs after the HTML has loaded
document.addEventListener('DOMContentLoaded', () => {
    const dogBreedsList = document.getElementById('dog-breeds');
  
    dogBreedsList.addEventListener('click', event => {
      if (event.target.tagName === 'LI') {
        event.target.style.color = 'blue'; // Change the font color to blue
      }
    });
  });
  // Ensure the JavaScript runs after the HTML has loaded
document.addEventListener('DOMContentLoaded', () => {
    const breedDropdown = document.getElementById('breed-dropdown');
    const dogBreedsList = document.getElementById('dog-breeds');
  
    breedDropdown.addEventListener('change', event => {
      const selectedLetter = event.target.value;
      const breeds = dogBreedsList.children;
  
      for (let i = 0; i < breeds.length; i++) {
        const breed = breeds[i];
        if (breed.textContent.toLowerCase().startsWith(selectedLetter)) {
          breed.style.display = 'block';
        } else {
          breed.style.display = 'none';
        }
      }
    });
  });