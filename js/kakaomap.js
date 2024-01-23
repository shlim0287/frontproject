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
    title: '<div class="infowindow"><div>고양이놀이터</div><div><a href="https://map.naver.com/p/search/%EA%B3%A0%EC%96%91%EC%9D%B4%20%EB%86%80%EC%9D%B4%ED%84%B0/place/21617309?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place&c=15.00,0,0,0,dh">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.56202, 126.9856)
  },
  {
    title: '<div class="infowindow"><div>Skycatcafe</div><div><a href="https://map.naver.com/p/search/Skycatcafe?c=15.00,0,0,0,dh">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5635, 126.9841)
  },
  {
    title: '<div class="infowindow"><div>연남동 고양이 카페</div><div><a href="https://map.naver.com/p/search/%EC%97%B0%EB%82%A8%EB%8F%99%20%EA%B3%A0%EC%96%91%EC%9D%B4%20%EC%B9%B4%ED%8E%98?c=15.00,0,0,0,dh">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.558853, 126.924901)
  },
  {
    title: '<div class="infowindow"><div>청춘고양이카페</div><div><a href="https://map.naver.com/p/search/%EC%B2%AD%EC%B6%98%EA%B3%A0%EC%96%91%EC%9D%B4%EC%B9%B4%ED%8E%98/place/33706021?c=15.00,0,0,0,dh&isCorrectAnswer=true">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5588534, 126.9249012)
  }
  ,
  {
    title: '<div class="infowindow"><div>지구별 고양이</div><div><a href="https://www.google.com/search?q=%EC%A7%80%EA%B5%AC%EB%B3%84+%EA%B3%A0%EC%96%91%EC%9D%B4&rlz=1C1JJTC_koKR1051KR1051&oq=%EC%A7%80%EA%B5%AC%EB%B3%84+%EA%B3%A0%EC%96%91%EC%9D%B4&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBggCEEUYPDIGCAMQRRg8MgYIBBBFGDyoAgCwAgA&sourceid=chrome&ie=UTF-8#ip=1">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.557642, 126.940577)
  }
  ,
  {
    title: '<div class="infowindow"><div>원두볶는 고양이</div><div><a href="https://www.google.com/search?q=%EC%9B%90%EB%91%90%EB%B3%B6%EB%8A%94+%EA%B3%A0%EC%96%91%EC%9D%B4&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=Gz-vZYODJdbc2roP0Lax2Ao&udm=&ved=0ahUKEwjD_Mvl1PKDAxVWrlYBHVBbDKsQ4dUDCBA&uact=5&oq=%EC%9B%90%EB%91%90%EB%B3%B6%EB%8A%94+%EA%B3%A0%EC%96%91%EC%9D%B4&gs_lp=Egxnd3Mtd2l6LXNlcnAiFuybkOuRkOuztuuKlCDqs6DslpHsnbQyAhAmSP8mUMsEWNwTcAF4AJABAJgBrAGgAaMCqgEDMC4yuAEDyAEA-AEC-AEBwgIOEC4YgAQYxwEYrwEYsAPCAggQABiABBiwA8ICCBAAGIAEGKIE4gMEGAEgQYgGAZAGAg&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.6650719, 126.8369961)
  }
  ,
  {
    title: '<div class="infowindow"><div>고양이멀티카페 마오</div><div><a href="https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%A9%80%ED%8B%B0%EC%B9%B4%ED%8E%98+%EB%A7%88%EC%98%A4&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=OD-vZayHKLHk2roP3tWQ6AY&udm=&ved=0ahUKEwisg7nz1PKDAxUxslYBHd4qBG0Q4dUDCBA&uact=5&oq=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%A9%80%ED%8B%B0%EC%B9%B4%ED%8E%98+%EB%A7%88%EC%98%A4&gs_lp=Egxnd3Mtd2l6LXNlcnAiHOqzoOyWkeydtOupgO2LsOy5tO2OmCDrp4jsmKQyCxAuGIAEGMcBGK8BMgIQJkjqX1CsWVisWXABeACQAQCYAYkBoAGJAaoBAzAuMbgBA8gBAPgBAvgBAeIDBBgBIEGIBgE&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5528398, 126.9221232)
  }
  ,
  {
    title: '<div class="infowindow"><div>cafe 고양이 noon</div><div><a href="https://www.google.com/search?q=cafe+%EA%B3%A0%EC%96%91%EC%9D%B4+noon&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=UT-vZbHvLKTf2roP3My_uAw&udm=&ved=0ahUKEwjx27P_1PKDAxWkr1YBHVzmD8cQ4dUDCBA&uact=5&oq=cafe+%EA%B3%A0%EC%96%91%EC%9D%B4+noon&gs_lp=Egxnd3Mtd2l6LXNlcnAiE2NhZmUg6rOg7JaR7J20IG5vb24yAhAmSOMEUABYAHAAeAGQAQCYAYkBoAGJAaoBAzAuMbgBA8gBAPgBAvgBAeIDBBgAIEE&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.6010534, 126.9566015)
  }
  ,
  {
    title: '<div class="infowindow"><div>금고양이 좌식카페</div><div><a href="https://www.google.com/search?q=%EA%B8%88%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%A2%8C%EC%8B%9D%EC%B9%B4%ED%8E%98&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=Xj-vZYW2KePg2roPtKyz6A0&udm=&ved=0ahUKEwiF3cmF1fKDAxVjsFYBHTTWDN0Q4dUDCBA&uact=5&oq=%EA%B8%88%EA%B3%A0%EC%96%91%EC%9D%B4+%EC%A2%8C%EC%8B%9D%EC%B9%B4%ED%8E%98&gs_lp=Egxnd3Mtd2l6LXNlcnAiGeq4iOqzoOyWkeydtCDsoozsi53subTtjpgyAhAmSOsHUABYAHAAeACQAQCYAXigAXiqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBB&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.58334139999999, 127.000945)
  }
  ,
  {
    title: '<div class="infowindow"><div>집사의하루 홍대점</div><div><a href="">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5520331 , 126.9226558)
  }
  ,
  {
    title: '<div class="infowindow"><div>고양이라 좋은 날</div><div><a href="https://www.google.com/search?q=%EC%A7%91%EC%82%AC%EC%9D%98%ED%95%98%EB%A3%A8+%ED%99%8D%EB%8C%80%EC%A0%90&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=aT-vZf3qNabi2roPrsqLgAk&udm=&ved=0ahUKEwi9w_WK1fKDAxUmsVYBHS7lApAQ4dUDCBA&uact=5&oq=%EC%A7%91%EC%82%AC%EC%9D%98%ED%95%98%EB%A3%A8+%ED%99%8D%EB%8C%80%EC%A0%90&gs_lp=Egxnd3Mtd2l6LXNlcnAiGeynkeyCrOydmO2VmOujqCDtmY3rjIDsoJAyCxAuGIAEGMcBGK8BMgIQJjIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIggpQAFgAcAB4AJABAJgBigGgAYoBqgEDMC4xuAEDyAEA-AEC-AEB4gMEGAAgQboGBggBEAEYFA&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5008484, 127.0286708)
  }
  ,
  {
    title: '<div class="infowindow"><div>카페 하룻고양이</div><div><a href="https://www.google.com/search?q=%EC%B9%B4%ED%8E%98+%ED%95%98%EB%A3%BB%EA%B3%A0%EC%96%91%EC%9D%B4&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=ez-vZcKbI5Hg2roPtpmSQA&udm=&ved=0ahUKEwiCxa2T1fKDAxURsFYBHbaMBAgQ4dUDCBA&uact=5&oq=%EC%B9%B4%ED%8E%98+%ED%95%98%EB%A3%BB%EA%B3%A0%EC%96%91%EC%9D%B4&gs_lp=Egxnd3Mtd2l6LXNlcnAiFuy5tO2OmCDtlZjro7vqs6DslpHsnbQyBBAAGB4yCBAAGAgYHhgPMgIQJkiuB1AAWABwAHgBkAEAmAGAAaABgAGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBB&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng( 37.5806247, 127.02506)
  }
  ,
  {
    title: '<div class="infowindow"><div>캠핑고양이카페</div><div><a href="https://www.google.com/search?q=%EC%BA%A0%ED%95%91%EA%B3%A0%EC%96%91%EC%9D%B4%EC%B9%B4%ED%8E%98&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=hz-vZc_5L9Dp2roP5uessAc&udm=&ved=0ahUKEwiP2ZaZ1fKDAxXQtFYBHeYzC3YQ4dUDCBA&uact=5&oq=%EC%BA%A0%ED%95%91%EA%B3%A0%EC%96%91%EC%9D%B4%EC%B9%B4%ED%8E%98&gs_lp=Egxnd3Mtd2l6LXNlcnAiFey6oO2VkeqzoOyWkeydtOy5tO2OmDILEC4YgAQYxwEYrwEyBRAAGIAEMgIQJjIaEC4YgAQYxwEYrwEYlwUY3AQY3gQY4ATYAQFIywhQAFgAcAB4AZABAJgBigGgAYoBqgEDMC4xuAEDyAEA-AEC-AEB4gMEGAAgQboGBggBEAEYFA&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.502459, 127.0502604)
  }
  ,
  {
    title: '<div class="infowindow"><div>고양이별캣카페</div><div><a href="https://www.google.com/search?q=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B3%84%EC%BA%A3%EC%B9%B4%ED%8E%98&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=lj-vZbT3FJTP2roPxcamkAE&udm=&ved=0ahUKEwi0mo-g1fKDAxWUp1YBHUWjCRIQ4dUDCBA&uact=5&oq=%EA%B3%A0%EC%96%91%EC%9D%B4%EB%B3%84%EC%BA%A3%EC%B9%B4%ED%8E%98&gs_lp=Egxnd3Mtd2l6LXNlcnAiFeqzoOyWkeydtOuzhOy6o-y5tO2OmDILEC4YgAQYxwEYrwEyAhAmMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUjUBVAAWABwAHgAkAEAmAGPAaABjwGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBugYGCAEQARgU&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.5604152 , 126.8383811)
  }
  ,
  {
    title: '<div class="infowindow"><div>더귀여워</div><div><a href="https://www.google.com/search?q=%EB%8D%94%EA%B7%80%EC%97%AC%EC%9B%8C&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=oD-vZfXSC4Pn2roP09CIkAM&udm=&ved=0ahUKEwj1ouik1fKDAxWDs1YBHVMoAjIQ4dUDCBA&uact=5&oq=%EB%8D%94%EA%B7%80%EC%97%AC%EC%9B%8C&gs_lp=Egxnd3Mtd2l6LXNlcnAiDOuNlOq3gOyXrOybjDILEC4YgAQYxwEYrwEyBRAAGIAEMgQQABgeMgYQABgFGB4yAhAmMhoQLhiABBjHARivARiXBRjcBBjeBBjgBNgBAUi5B1AAWABwAHgBkAEAmAGPAaABjwGqAQMwLjG4AQPIAQD4AQL4AQHiAwQYACBBugYGCAEQARgU&sclient=gws-wiz-serp">상세정보</a></div></div>',
    latlng: new kakao.maps.LatLng(37.54896189999999 , 126.9208636)
  }
  ,
  {
    title: '<div class="infowindow"><div>카페모로</div><div><a href="https://www.google.com/search?q=%EC%B9%B4%ED%8E%98%EB%AA%A8%EB%A1%9C&sca_esv=600640614&rlz=1C1JJTC_koKR1051KR1051&ei=qz-vZY_NE6Dl2roPz9Wd6AY&udm=&ved=0ahUKEwjPzo-q1fKDAxWgslYBHc9qB20Q4dUDCBA&uact=5&oq=%EC%B9%B4%ED%8E%98%EB%AA%A8%EB%A1%9C&gs_lp=Egxnd3Mtd2l6LXNlcnAiDOy5tO2OmOuqqOuhnDICECYyAhAmSNkFUABYAHAAeAGQAQCYAY8BoAGPAaoBAzAuMbgBA8gBAPgBAvgBAeIDBBgAIEE&sclient=gws-wiz-serp">상세정보</a></div></div>',
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
    image: markerImage,
    clickable:true// 마커 이미지
  });
  var iwRemoveable=true;
  // 마커에 표시할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].title,// 인포윈도우에 표시할 내용
    removable:iwRemoveable
  });
  kakao.maps.event.addListener(marker, 'click', makeClickListener(map, marker, infowindow));
}


// 클릭 이벤트를 처리하는 함수를 생성합니다
function makeClickListener(map, marker, infowindow) {
  return function() {
    infowindow.open(map, marker);
  };
}

//
// function makeOverListener(map, marker, infowindow) {
//   return function() {
//     infowindow.open(map, marker);
//   };
// }
//
// // 인포윈도우를 닫는 클로저를 만드는 함수입니다
// function makeOutListener(infowindow) {
//   return function() {
//     infowindow.close();
//   };
// }

