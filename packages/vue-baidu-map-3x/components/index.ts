import BaiduMap from '@vue-baidu-map-3x/map'
import BmScale from '@vue-baidu-map-3x/scale'
import BmNavigation from '@vue-baidu-map-3x/navigation'
import BmMapType from '@vue-baidu-map-3x/map-type'
import BmOverviewMap from '@vue-baidu-map-3x/overview-map'
import BmGeolocation from '@vue-baidu-map-3x/geolocation'
import BmCopyright from '@vue-baidu-map-3x/copyright'
import BmCityList from './controls/CityList.vue'
import BmPanorama from './controls/Panorama.vue'
import BmControl from '@vue-baidu-map-3x/control';
import BmMarker from './overlays/Marker.vue'
import BmPointCollection from './overlays/PointCollection.vue'
import BmPolyline from './overlays/Polyline.vue'
import BmPolygon from './overlays/Polygon.vue'
import BmCircle from './overlays/Circle.vue'
import BmGround from './overlays/Ground.vue'
import BmLabel from './overlays/Label.vue'
import BmInfoWindow from './overlays/InfoWindow.vue'
import BmOverlay from './overlays/Overlay.vue'
import BmContextMenu from './context-menu/Menu.vue'
import BmContextMenuItem from './context-menu/Item.vue'
import BmLocalSearch from './search/LocalSearch.vue'
import BmTransit from './search/Transit.vue'
import BmWalking from './search/Walking.vue'
import BmDriving from './search/Driving.vue'
import BmBus from './search/Bus.vue'
import BmTile from './layers/Tile.vue'
import BmTraffic from './layers/Traffic.vue'
import BmBoundary from './others/Boundary.vue'
import BmAutoComplete from './others/AutoComplete.vue'

import BmlMarkerClusterer from './extra/MarkerClusterer.vue'
import BmlLushu from './extra/Lushu.vue'
import BmlHeatmap from './extra/Heatmap.vue'
import BmlCurveLine from './extra/CurveLine.vue'

import { setConfig, getConfig } from '@vue-baidu-map-3x/utils'
import { getAddressByPoints, getPointByAddress, getPointsTransfer } from './utils';
import { useGeocoder, usePoint, useMap } from './hooks';

export default {
  install(Vue, options = {}) {
    setConfig(options);

    Vue.component(BaiduMap.name, BaiduMap)

    Vue.component(BmScale.name, BmScale)
    Vue.component(BmNavigation.name, BmNavigation)
    Vue.component(BmMapType.name, BmMapType)
    Vue.component(BmOverviewMap.name, BmOverviewMap)
    Vue.component(BmGeolocation.name, BmGeolocation)
    Vue.component(BmCopyright.name, BmCopyright)
    Vue.component('bm-city-list', BmCityList)
    Vue.component('bm-panorama', BmPanorama)
    Vue.component(BmControl.name, BmControl)

    Vue.component('bm-marker', BmMarker)
    Vue.component('bm-point-collection', BmPointCollection)
    Vue.component('bm-polyline', BmPolyline)
    Vue.component('bm-polygon', BmPolygon)
    Vue.component('bm-circle', BmCircle)
    Vue.component('bm-ground', BmGround)
    Vue.component('bm-label', BmLabel)
    Vue.component('bm-info-window', BmInfoWindow)
    Vue.component('bm-overlay', BmOverlay)

    Vue.component('bm-context-menu', BmContextMenu)
    Vue.component('bm-context-menu-item', BmContextMenuItem)

    Vue.component('bm-local-search', BmLocalSearch)
    Vue.component('bm-transit', BmTransit)
    Vue.component('bm-walking', BmWalking)
    Vue.component('bm-driving', BmDriving)
    Vue.component('bm-bus', BmBus)

    Vue.component('bm-tile', BmTile)
    Vue.component('bm-traffic', BmTraffic)

    Vue.component('bm-auto-complete', BmAutoComplete)
    Vue.component('bm-boundary', BmBoundary)
  }
}

export {
  BaiduMap,
  BmScale, BmNavigation, BmMapType, BmOverviewMap, BmGeolocation, BmCopyright, BmCityList, BmPanorama, BmControl,
  BmMarker, BmPointCollection, BmPolyline, BmPolygon, BmCircle, BmGround, BmLabel, BmInfoWindow, BmOverlay,
  BmContextMenu, BmContextMenuItem,
  BmLocalSearch, BmTransit, BmWalking, BmDriving, BmBus,
  BmTile, BmTraffic,
  BmBoundary, BmAutoComplete
}

export {
  BmlMarkerClusterer,
  BmlLushu,
  BmlHeatmap,
  BmlCurveLine
}

export {
  getAddressByPoints,
  getPointByAddress,
  getPointsTransfer,
  useMap,
  getConfig,
  useGeocoder,
  usePoint
}