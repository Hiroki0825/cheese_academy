function initialize() {
	  var latlng = new google.maps.LatLng(33.5866685,130.3944389);/*表示したい場所の経度、緯度*/
	  var myOptions = {
	    zoom: 19, /*拡大比率*/
	    center: latlng, /*表示枠内の中心点*/
	    mapTypeControlOptions: { mapTypeIds: ['noText', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
	  };
	  var map = new google.maps.Map(document.getElementById('map_custmomize'), myOptions);/*マップのID取得*/

	  /*スタイルのカスタマイズ*/
	  var styleOptions =
	[
	  {
	    "featureType": "landscape.natural",
	    "stylers": [
	      { "color": "#fff2c2" }
	    ]
	  },{
	    "featureType": "road",
	    "stylers": [
	      { "gamma": 2.61 },
	      { "color": "#ffffff" }
	    ]
	  },{
	    "featureType": "transit.line",
	    "stylers": [
	      { "invert_lightness": true },
	      { "visibility": "simplified" },
	      { "color": "#ffbe00" }
	    ]
	  },{
	    "elementType": "labels.icon",
	    "stylers": [
	      { "visibility": "off" }
	    ]
	  },{
	    "featureType": "landscape.man_made",
	    "elementType": "geometry",
	    "stylers": [
	      { "visibility": "simplified" },
	      { "color": "#ffce5f" }
	    ]
	  },{
	    "featureType": "poi",
	    "elementType": "geometry",
	    "stylers": [
	      { "color": "#ffde5b" }
	    ]
	  },{
	    "featureType": "water",
	    "stylers": [
	      { "color": "#993366" }
	    ]
	  },{
	    "featureType": "transit.station",
	    "elementType": "geometry",
	    "stylers": [
	      { "color": "#fab022" }
	    ]
	  }
	];

	 var styledMapOptions = { name: 'チーズアカデミーFUKUOKA' }
	  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
	  map.mapTypes.set('sample', sampleType);
	  map.setMapTypeId('sample');

	/*チーズアカデミーFUKUOKAアイコンの取得*/
	var icon = new google.maps.MarkerImage('img/chz2.png',/*アイコンの場所*/
	  new google.maps.Size(65,60),/*アイコンのサイズ*/
	  new google.maps.Point(0,0)/*アイコンの位置*/
	);

	/*マーカーの設置*/
	var markerOptions = {
	  position: latlng,/*表示場所と同じ位置に設置*/
	  map: map,
	  icon: icon,
	  title: 'チーズアカデミーFUKUOKA'/*マーカーのtitle*/
	};
	var marker = new google.maps.Marker(markerOptions);

	}