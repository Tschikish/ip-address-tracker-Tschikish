import React, { useEffect, useState } from "react";
import "./InfoCard.css"

export interface InfoCardProps {
  ip: string;
  city: string;
  postalCode: string;
  regionCode: string;
  UfcOffset: string;
  ISP: string;
}

export interface InfoCardWrapperProps {
  data: InfoCardProps | null;
}

const placeholder = {
  ip: "192.212.174.101",
  city: "Brooklyn",
  postalCode: "10001",
  regionCode: "NY",
  UfcOffset: "-05:00",
  ISP: "SpaceX Starlink",
};

const InfoCard: React.FC<InfoCardWrapperProps> = (props) => {
  const [displayData, setDisplayData] = useState(placeholder);

  useEffect(() => {
    if (props.data !== null && props.data.ip !== placeholder.ip) {
      setDisplayData(props.data);
    }
  }, [props.data]);

  return (
    <div className="info-card">
      <div className="panel">
        <span id="title">IP ADDRESS</span>
        <span id="info">{displayData.ip}</span>
      </div>

      <div className="panel">
        <span id="title">LOCATION</span>
        <span id="info">
          {displayData.city ? displayData.city + "," : ""}
          {displayData.regionCode} {displayData.postalCode}
        </span>
      </div>

      <div className="panel">
        <span id="title">TIMEZONE</span>
        <span id="info">UTC {displayData.UfcOffset}</span>
      </div>

      <div className="panel">
        <span id="title">ISP</span>
        <span id="info">{displayData.ISP}</span>
      </div>
    </div>
  );
};

export default InfoCard;
