var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 2 // 지도의 확대 레벨
    };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성

// 마커가 표시될 위치
var markerPosition  = new kakao.maps.LatLng(37.45639, 126.70528);

// 마커를 생성
var marker = new kakao.maps.Marker({
    position: markerPosition
});

marker.setMap(map);