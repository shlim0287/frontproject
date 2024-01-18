let mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.5313805, 126.9798839), // 지도의 중심좌표
    level: 10 // 지도의 확대 레벨
  };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
// var zoomControl = new kakao.maps.ZoomControl();
// map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
//
// // 지도가 확대 또는 축소되면 마지막 파라미터로 넘어온 함수를 호출하도록 이벤트를 등록합니다
// kakao.maps.event.addListener(map, 'zoom_changed', function() {
//
//   // 지도의 현재 레벨을 얻어옵니다
//   var level = map.getLevel();
//
//   var message = '현재 지도 레벨은 ' + level + ' 입니다';
//   var resultDiv = document.getElementById('result');
//   resultDiv.innerHTML = message;
//
// })
let positions = [
  {
    title: '고양이놀이터',
    latlng: new kakao.maps.LatLng(37.56202, 126.9856)
  },
  {
    title: 'Skycatcafe the first store',
    latlng: new kakao.maps.LatLng(37.5635, 126.9841)
  },
  {
    title: '연남동 고양이 카페',
    latlng: new kakao.maps.LatLng(37.558853, 126.924901)
  },
  {
    title: '청춘고양이카페',
    latlng: new kakao.maps.LatLng(37.5588534, 126.9249012)
  }
  ,
  {
    title: '지구별 고양이',
    latlng: new kakao.maps.LatLng(37.557642, 126.940577)
  }
  ,
  {
    title: '원두볶는 고양이',
    latlng: new kakao.maps.LatLng(37.6650719, 126.8369961)
  }
  ,
  {
    title: '고양이멀티카페 마오',
    latlng: new kakao.maps.LatLng(37.5528398, 126.9221232)
  }
  ,
  {
    title: 'cafe 고양이 noon',
    latlng: new kakao.maps.LatLng(37.6010534, 126.9566015)
  }
  ,
  {
    title: '금고양이 좌식카페',
    latlng: new kakao.maps.LatLng(37.58334139999999, 127.000945)
  }
  ,
  {
    title: '집사의하루 홍대점',
    latlng: new kakao.maps.LatLng(37.5520331 , 126.9226558)
  }
  ,
  {
    title: '고양이라 좋은 날',
    latlng: new kakao.maps.LatLng(37.5008484, 127.0286708)
  }
  ,
  {
    title: '카페 하룻고양이',
    latlng: new kakao.maps.LatLng( 37.5806247, 127.02506)
  }
  ,
  {
    title: '캠핑고양이카페',
    latlng: new kakao.maps.LatLng(37.502459, 127.0502604)
  }
  ,
  {
    title: '고양이별캣카페',
    latlng: new kakao.maps.LatLng(37.5604152 , 126.8383811)
  }
  ,
  {
    title: '더귀여워',
    latlng: new kakao.maps.LatLng(37.54896189999999 , 126.9208636)
  }
  ,
  {
    title: '카페모로',
    latlng: new kakao.maps.LatLng(37.5621928, 126.9259081)
  }
];

// 마커 이미지의 이미지 주소입니다
let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

for (var i = 0; i < positions.length; i ++) {

  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image : markerImage // 마커 이미지
  });
}
