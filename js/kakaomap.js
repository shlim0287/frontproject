let mapContainer = document.getElementById('map'), // 지도를 표시할 div
  mapOption = {
    center: new kakao.maps.LatLng(37.5313805, 126.9798839), // 지도의 중심좌표
    level: 10 // 지도의 확대 레벨
  };

let map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

function setCenter() {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(33.452613, 126.570888);

  // 지도 중심을 이동 시킵니다
  map.setCenter(moveLatLon);
}

function panTo() {
  // 이동할 위도 경도 위치를 생성합니다
  var moveLatLon = new kakao.maps.LatLng(33.450580, 126.574942);

  // 지도 중심을 부드럽게 이동시킵니다
  // 만약 이동할 거리가 지도 화면보다 크면 부드러운 효과 없이 이동합니다
  map.panTo(moveLatLon);
}


// 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
let mapTypeControl = new kakao.maps.MapTypeControl();

// 지도에 컨트롤을 추가해야 지도위에 표시됩니다
// kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

// 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
let zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);



let positions = [
  {
    title: '<div>고양이놀이터</div>',
    latlng: new kakao.maps.LatLng(37.56202, 126.9856)
  },
  {
    title: '<div>Skycatcafe the first store</div>',
    latlng: new kakao.maps.LatLng(37.5635, 126.9841)
  },
  {
    title: '<div>연남동 고양이 카페</div>',
    latlng: new kakao.maps.LatLng(37.558853, 126.924901)
  },
  {
    title: '<div>청춘고양이카페</div>',
    latlng: new kakao.maps.LatLng(37.5588534, 126.9249012)
  }
  ,
  {
    title: '<div>지구별 고양이</div>',
    latlng: new kakao.maps.LatLng(37.557642, 126.940577)
  }
  ,
  {
    title: '<div>원두볶는 고양이</div>',
    latlng: new kakao.maps.LatLng(37.6650719, 126.8369961)
  }
  ,
  {
    title: '<div>고양이멀티카페 마오</div>',
    latlng: new kakao.maps.LatLng(37.5528398, 126.9221232)
  }
  ,
  {
    title: '<div>cafe 고양이 noon</div>',
    latlng: new kakao.maps.LatLng(37.6010534, 126.9566015)
  }
  ,
  {
    title: '<div>금고양이 좌식카페</div>',
    latlng: new kakao.maps.LatLng(37.58334139999999, 127.000945)
  }
  ,
  {
    title: '<div>집사의하루 홍대점</div>',
    latlng: new kakao.maps.LatLng(37.5520331 , 126.9226558)
  }
  ,
  {
    title: '<div>고양이라 좋은 날</div>',
    latlng: new kakao.maps.LatLng(37.5008484, 127.0286708)
  }
  ,
  {
    title: '<div>카페 하룻고양이</div>',
    latlng: new kakao.maps.LatLng( 37.5806247, 127.02506)
  }
  ,
  {
    title: '<div>캠핑고양이카페</div>',
    latlng: new kakao.maps.LatLng(37.502459, 127.0502604)
  }
  ,
  {
    title: '<div>고양이별캣카페</div>',
    latlng: new kakao.maps.LatLng(37.5604152 , 126.8383811)
  }
  ,
  {
    title: '<div>더귀여워</div>',
    latlng: new kakao.maps.LatLng(37.54896189999999 , 126.9208636)
  }
  ,
  {
    title: '<div>카페모로</div>',
    latlng: new kakao.maps.LatLng(37.5621928, 126.9259081)
  }
];



// 마커 이미지의 이미지 주소입니다
let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";




for (var i = 0; i < positions.length; i++) {
  // 마커 이미지의 이미지 크기 입니다
  let imageSize = new kakao.maps.Size(24, 35);

  // 마커 이미지를 생성합니다
  let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커를 표시할 위치
    title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
    image: markerImage // 마커 이미지
  });

  // 마커에 표시할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title // 인포윈도우에 표시할 내용
  });

  kakao.maps.event.addListener(marker, 'mouseover', makeOverListener(map, marker, infowindow));
  kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));
}

function makeOverListener(map, marker, infowindow) {
  return function() {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function() {
    infowindow.close();
  };
}

