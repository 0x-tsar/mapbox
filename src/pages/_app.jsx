import "../../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <link
        href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
