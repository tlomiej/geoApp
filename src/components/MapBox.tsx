// @ts-ignore
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import * as turf from '@turf/turf';
import mapboxgl from "mapbox-gl";
import React from "react";
import { MAPBOX_ACCESS_TOKEN } from "../models/MapBoxToken";
import "./../css/Map.css";
import { SearchBox } from "./SearchBox";

import FireBaseStart from "./FireBaseStart";

mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;

type Props = {
    longitude: number;
    latitude: number;
};

type State = {
    lng: number;
    lat: number;
    zoom: number,
    data?: any
    points: Array<Object>
};
class MapBox extends React.Component<Props, State> {
    private mapContainer: any;
    private map: any;
    private marker: any;
    private draw: any;

    constructor(props: any) {
        super(props);
        this.state = {
            lng: 5,
            lat: 34,
            zoom: 0,
            points: []
        };
    }

    componentDidMount(): void {
        this.map = new mapboxgl.Map({
            container: this.mapContainer,
            center: [this.props.longitude, this.props.latitude],
            style: 'mapbox://styles/mapbox/streets-v11',
            zoom: 21,
            pitch: 45
        });

        this.draw = new MapboxDraw({
            displayControlsDefault: false,
            controls: {
                point: true,
                polygon: true,
                trash: true
            }
        });
        this.map.addControl(new mapboxgl.NavigationControl());
        this.map.addControl(this.draw, 'top-right');

        this.map.on('load', () => {

            this.map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': []
                }
            });
            this.map.addLayer({
                'id': 'points',
                'source': 'point',
                'type': 'circle',
                'paint': {
                    'circle-radius': 20,
                    'circle-color': 'red'
                }
            });
        }
        );

        this.map.on('move', () => {
            this.setState({
                lng: this.map.getCenter().lng.toFixed(4),
                lat: this.map.getCenter().lat.toFixed(4),
                zoom: this.map.getZoom().toFixed(2)
            });
        });

        this.map.on('draw.create', this.drawLog);
        this.map.on('draw.delete', this.drawLog);
        this.map.on('draw.update', this.drawLog);
 


    }

    drawLog = ()=>{
        console.log("draw", this.draw.getAll())
    }

    private getDataFromMapQuest = (event: any) => {
        console.log("getDataFromMapQuest =>", event)
        let objectData: any = event.results[0].locations.map((obj: any) => {
            return {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',

                    'coordinates': [parseFloat(obj.latLng.lng), parseFloat(obj.latLng.lat)]
                }
            }
        })

        let geoJsonData = {
            'type': 'FeatureCollection',
            'features': []
        }
        geoJsonData.features = objectData;

        if (!this.map.getSource('mapQuestLayer')) {
            this.map.addSource('mapQuestLayer', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': []
                }
            });
            this.map.addLayer({
                'id': 'mapQuestLayerId',
                'source': 'mapQuestLayer',
                'type': 'circle',
                'paint': {
                    'circle-radius': 10,
                    'circle-color': 'blue'
                }
            });
        }
        this.map.getSource('mapQuestLayer').setData(geoJsonData);

    }

    private buildBbox(geojson: any) {
        return turf.bbox(geojson)
    }

    private getDataFromSearch = async (event: any) => {
        console.log("getDataFromSearch =>", event)
        let objectData: any = event.map((obj: any) => {
            return {
                'type': 'Feature',
                'geometry': {
                    'type': 'Point',
                    'coordinates': [parseFloat(obj.lon), parseFloat(obj.lat)]
                }
            }
        })
        console.log("GEoJson", objectData)
        this.setState({ points: objectData })

        let geoJsonData = {
            'type': 'FeatureCollection',
            'features': []
        }
        geoJsonData.features = objectData;

        if (!this.map.getSource('point')) {
            this.map.addSource('point', {
                'type': 'geojson',
                'data': {
                    'type': 'FeatureCollection',
                    'features': []
                }
            });
            this.map.addLayer({
                'id': 'points',
                'source': 'point',
                'type': 'circle',
                'paint': {
                    'circle-radius': 20,
                    'circle-color': 'red'
                }
            });
        }
        this.map.getSource('point').setData(geoJsonData);
        const bbox = this.buildBbox(geoJsonData)
        await this.map.fitBounds(
            [[bbox[0], bbox[1]], [bbox[2], bbox[3]]]
        );
    }

    rotateCamera = (timestamp: number) => {
        this.map.rotateTo((timestamp / 150) % 360, { duration: 0 });
        requestAnimationFrame(this.rotateCamera);
    }

    onClikItem = (event: any) => {
        let box = event.boundingbox.map((el: string) => Number(el))
        this.map.fitBounds(
            [[box[2], box[0]], [box[3], box[1]]]
            , { padding: 20 });
    }

    render(): JSX.Element {
        return (
            <div>
                {/*   <div className='sidebarStyle'>
                    <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
                </div> */}
                <div className='searchStyle'>
                    <SearchBox onGetMapQuestData={this.getDataFromMapQuest} onGetData={this.getDataFromSearch} onClickItem={this.onClikItem}></SearchBox>
                </div>
                <div className='fireBaseStyle'>
                    <FireBaseStart></FireBaseStart>
                </div>

                <div ref={el => this.mapContainer = el} className='mapContainer' />
            </div>
        );
    }
}

export default MapBox;