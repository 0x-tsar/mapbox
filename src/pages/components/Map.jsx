import React, { Component } from "react";
// import { ReactMapGL, Marker } from "react-map-gl";
import ReactMapGL, { Marker } from "react-map-gl";
import places from "../../../places";

class Map extends Component {
  state = {
    viewport: {
      width: "100vw",
      height: "100vh",
      latitude: 41.5868,
      longitude: -93.625,
      zoom: 12,
      places: [],
    },
  };

  showAddMarkerPopup = (event) => {
    console.log("clicked");
    const [longitude, latitude] = event.lngLat;

    places.push({
      lon: longitude,
      lat: latitude,
      color: "#ff0",
    });
    // setAddEntryLocation({
    //   latitude,
    //   longitude,
    // });
  };

  constructor(props) {
    super(props);

    // this.setState({
    //   ...places,
    //   places: ["1"],
    // });

    console.log(this.state);
    // console.log(props.viewp);
    this.setState({
      viewport: {
        width: props.viewp.width,
        height: props.viewp.height,
      },
    });
  }

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/thecjreynolds/ck117fnjy0ff61cnsclwimyay"
        mapboxApiAccessToken="pk.eyJ1IjoiYWJoYWRpcmluaGEiLCJhIjoiY2tzazY0djMzMDh6MzMzcDFvMzZiM285cyJ9.wC_aw4cTPK0SsY1UuNstRg"
        onDblClick={this.showAddMarkerPopup}
        onViewportChange={(viewport) => {
          this.setState({ viewport });
        }}
        {...this.state.viewport}
      >
        {places.map((item, key) => {
          return (
            <Marker latitude={item.lat} longitude={item.lon}>
              <div>
                <svg
                  className="marker yellow"
                  style={{
                    height: `${2 * this.state.viewport.zoom}px`,
                    width: `${2 * this.state.viewport.zoom}px`,
                    fill: item.color,
                    // backgroundColor: {item.color}
                    // height: `${40}px`,
                    // width: `${40}px`,
                  }}
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path
                        d="M256,0C153.755,0,70.573,83.182,70.573,185.426c0,126.888,165.939,313.167,173.004,321.035
                        c6.636,7.391,18.222,7.378,24.846,0c7.065-7.868,173.004-194.147,173.004-321.035C441.425,83.182,358.244,0,256,0z M256,278.719
                        c-51.442,0-93.292-41.851-93.292-93.293S204.559,92.134,256,92.134s93.291,41.851,93.291,93.293S307.441,278.719,256,278.719z"
                      />
                    </g>
                  </g>
                </svg>
              </div>
            </Marker>
          );
        })}
      </ReactMapGL>
    );
  }
}

export default Map;
