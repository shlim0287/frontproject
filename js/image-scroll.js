const imageList = document.querySelector(".img-grid");
let pageToFetch = 1;

async function fetchImages(pageNum) {
  try {
    const response = await fetch('https://picsum.photos/v2/list?page=' + pageNum + '&limit=6');
    if (!response.ok) {
      throw new Error('네트워크 응답에 문제가 있습니다.');
    }

    const datas = await response.json();
    console.log(datas);

    makeImageList(datas);

  } catch (error) {
    console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
  }
}

function makeImageList(datas) {
  datas.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = "<img src=" + item.download_url + " alt=''>";
    imageList.appendChild(li);
  });
}

document.getElementById('show_more_btn').addEventListener('click',()=>{
  fetchImages(pageToFetch++);
});
window.addEventListener('scroll',()=>{

});

fetchImages(pageToFetch);



//
//
// window.addEventListener("scroll", () => {
//   if (window.innerHeight + document.documentElement.scrollTop + 10 >=
//     document.documentElement.offsetHeight) {
//     fetchImages(pageToFetch++);
//   }
// });


