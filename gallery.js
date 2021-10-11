const pictureInnerContainer = document.querySelector('.picture-inner-container');

function shuffle(arr){
  return arr.map(i=>[Math.random(), i]).sort().map(i=>i[1])
}

function createGallery() {
  let arr = [];
  for (let i = 1; i < 16; i++) {
    arr.push(i);
  }
  arr = shuffle(arr);
  for (let i = 0; i < 15; i++) {
    const img = document.createElement('img');
    img.classList.add('gallery-img')
    img.src = `assets/img/galery/galery${arr[i]}.jpg`;
    img.alt = `galery${arr[i]}`;
    // const img = `<img class="gallery-img" src="assets/img/galery/galery${arr[i]}.jpg" alt="galery${arr[i]}">`;
    pictureInnerContainer.append(img);
  }

}

createGallery();