import React from "react"
import map from "../images/rtMap.png"

const CoverageMap = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="location-heading col-12">
          <h2 className="center offer-heading blue-color offer-head-alt">
            Where to find Rebuilding Together
          </h2>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-3">
          <h3 style={{ fontSize: `22px`, paddingLeft: `15px` }}>
            What areas do we service?
          </h3>
          <p className="offer-text">
            There are four different locations for Rebuilding Together in the
            state of Connecticut. We are all affiliates of the{" "}
            <a href="https://rebuildingtogether.org" className="nation">
              National Organization
            </a>{" "}
            which is located in Washington DC.
          </p>
          <p className="offer-text">
            Rebuilding Together Litchfield County serves the residents of
            Litchfield County. We sometimes may have the ability to serve
            residents of close, surrounding counties, but generally we stay in
            our home county. Look at the map and if you live near one of the
            other affiliates please click on their link.
          </p>
        </div>
        <div className="location-map col-lg-8 col-md-9">
          <img
            src={map}
            style={{ width: `750`, height: `500` }}
            alt="Service Area"
            className="area-map mb-5"
            useMap="#imageMap"
          />
          <map name="imageMap" id="Map">
            <area
              target="_parent"
              alt="Rebuilding Together Litchfield"
              title="Rebuilding Together Litchfield"
              href="https://res.cloudinary.com/mattaz/image/upload/v1572460634/RebuildingTogether/Icons/RebuilderLogo.jpg"
              coords="92,164,201,223"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Rebuilding Together New Britain"
              title="Rebuilding Together New Britain"
              href="https://www.rtnewbritain.org"
              coords="300,180,403,239"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Rebuilding Together Hartford"
              title="Rebuilding Together Hartford"
              href="https://www.rthartford.org"
              coords="329,104,436,153"
              shape="rect"
            />
            <area
              target="_blank"
              alt="Rebuilding Together Manchester"
              title="Rebuilding Together Manchester"
              href="mailto:rebuildmanchester@gmail.com"
              coords="394,26,500,79"
              shape="rect"
            />
          </map>
        </div>
      </div>
    </div>
  )
}

export default CoverageMap
