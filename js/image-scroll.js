const imageList = document.querySelector(".img-grid");
let pageToFetch = 1;
let fetching = false;


const throttleDelay = 200;
const throttleFetchImages = throttle(fetchImages, throttleDelay);


document.getElementById('show_more_btn').addEventListener('click', () => {
  if (!fetching) {
    fetching = true;
    throttleFetchImages(pageToFetch);
    window.addEventListener("scroll", handleScroll);
  }
});

document.getElementById('show_more_btn').addEventListener('click', () => {
  hideButton();
});

imageList.addEventListener("scroll", handleScroll);

fetchImages(pageToFetch);


function hideButton() {
  const catPictureMore = document.querySelector('.cat_picture_more');
  if (catPictureMore) {
    catPictureMore.style.display = 'none';
  }
}

async function fetchImages(pageNum) {
  try {
    const response = await fetch(`https://picsum.photos/v2/list?page=${pageNum}&limit=6`);
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }

    const datas = await response.json();
    console.log(datas);
    makeImageList(datas);

  } catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
  } finally {
    fetching = false;
  }
}

function makeImageList(datas) {
  datas.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `<img src=${item.download_url} alt=''>`;
    imageList.appendChild(li);
  });
}

function handleScroll() {
  if (imageList.scrollTop + imageList.clientHeight + 10 >= imageList.scrollHeight) {
    if (!fetching) {
      fetching = true;
      throttleFetchImages(pageToFetch++);
    }
  }
}


function throttle(func, delay) {
  let timeout;
  return function (...args) {
    if (!timeout) {
      timeout = setTimeout(() => {
        func(...args);
        timeout = null;
      }, delay);
    }
  };
}
