const imageList = document.querySelector(".img-grid");
let pageToFetch = 1;

let fetching = false;

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
  } finally {
    fetching = false; // 무한 스크롤 완료 후 플래그를 false로 설정
  }
}

function makeImageList(datas) {
  datas.forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = "<img src=" + item.download_url + " alt=''>";
    imageList.appendChild(li);
  });
}

// 최초 로딩 시 이미지 가져오기
fetchImages(pageToFetch);

document.getElementById('show_more_btn').addEventListener('click', () => {
  if (!fetching) {
    fetching = true; // 쇼 모어 버튼 클릭 시 fetching 플래그를 true로 설정
    fetchImages(pageToFetch);
    window.addEventListener("scroll", handleScroll);
  }
});

// 스크롤 이벤트 처리 함수
function handleScroll() {
  if (imageList.scrollTop + imageList.clientHeight + 10 >= imageList.scrollHeight) {
    if (!fetching) {
      fetching = true; // 스크롤 이벤트 발생 시 fetching 플래그를 true로 설정
      fetchImages(pageToFetch++);
    }
  }
}
imageList.addEventListener("scroll", handleScroll);

