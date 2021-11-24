import './MindResourceMap.css';

const MindResourceMap = () => {

    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    console.log(apiKey);

    return (
        <iframe
            className="map-class"
            title="resource-map"
            // style={{ "border": "0" }}
            // loading="lazy"
            src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=therapy+in+Seattle`}>
        </iframe>
    )
}

export default MindResourceMap
