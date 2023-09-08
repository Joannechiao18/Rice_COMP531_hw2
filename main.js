const numRows = 10;
const numColumns = 2;

//var numOfImage = Math.random(numRows / 2, numRows) + 1;
var numOfImage = 12;

const postGrid = document.getElementById("postGrid");

const decide=[1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0];

const images = [
  [
    "/Users/joannewang/Desktop/CS 531/hw2/scene-7.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-8.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-9.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-10.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-11.jpg",  
    "/Users/joannewang/Desktop/CS 531/hw2/scene-12.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-13.jpg",
    "/Users/joannewang/Desktop/CS 531/hw2/scene-14.jpg",
    // Add more image URLs here
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/image.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-1.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-2.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-3.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/image.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-1.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-19.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-20.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-10.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-11.jpg",  
      "/Users/joannewang/Desktop/CS 531/hw2/scene-12.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-13.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-14.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-5.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-6.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-7.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-2.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-14.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-5.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-18.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-19.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-14.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-6.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-1.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-2.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-3.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-6.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-9.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-10.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-11.jpg",  
      "/Users/joannewang/Desktop/CS 531/hw2/scene-3.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-1.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-4.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-19.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/image.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-1.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-8.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-11.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-13.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/image.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/wall-2.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/wall-3.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-14.jpg",
    ],

    [
      "/Users/joannewang/Desktop/CS 531/hw2/scene-2.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-12.jpg",
      "/Users/joannewang/Desktop/CS 531/hw2/scene-18.jpg",
    ],
];

function generateRandomInterval() {
  return Math.floor(Math.random() * 5 + 1) * 1000; // Random interval between 1 and 5 seconds
}

function createImageCycling(postElement, images) {
  let imageIndex = -1;
  let timer;
  let i =0;
  const postImage = postElement.querySelector("img");
  var toggleButton = document.createElement("button");
  toggleButton.textContent = "Stop";
  postElement.appendChild(toggleButton);


  function start() {
    if (timer) {
      clearInterval(timer);
      timer = null;
      toggleButton.textContent = "Start";
    }
    else {
      timer = setInterval(function () {
        if(imageIndex==-1){
          imageIndex=Math.floor(Math.random() * images.length);
        }
        
        i= Math.floor(Math.random() * (images[imageIndex].length - 0) + 0);
        //imageIndex = imageIndex >= (images.length - 1) ? 0 : ++imageIndex;
        postImage.setAttribute('src', images[imageIndex][i]);
      }, generateRandomInterval());
      toggleButton.textContent = "Stop";
    }

  }

  toggleButton.addEventListener("click", start);
  start();
}


var count=0;

for (let row = 0; row < numRows; row++) {
  for (let col = 0; col < numColumns; col++) {
    const post = document.createElement("div");
    post.className = "post";

    //var choose = Math.floor(Math.random() * (3 - 0) + 0);

    if(decide[count]==1){
      const randomInterval = generateRandomInterval();
      //let currentImageIndex = 0;
      let currentImageIndex=Math.floor(Math.random() * (images.length - 0) + 0);
      let i = Math.floor(Math.random() * (images[currentImageIndex].length - 0) + 0);
      const postImage = document.createElement("img");
      postImage.src = images[currentImageIndex][i];
      post.appendChild(postImage);

      createImageCycling(post, images);

      //numOfImage--;
      //count++;
    }

    count++;

    const postText = document.createElement("p");
    postText.textContent = `Lorem ipsum dolor sit amet.`;
    post.appendChild(postText);

    postGrid.appendChild(post);
  }
}