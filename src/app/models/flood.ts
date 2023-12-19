export interface Flood {
    "@context": string;
    meta: {
      publisher: string;
      licence: string;
      documentation: string;
      version: string;
      comment: string;
      hasFormat: string[];
    };
    items: Item[];
  }
  
  export interface Item {
    "@id": string;
    description: string;
    eaAreaName: string;
    eaRegionName: string;
    floodArea: {
      "@id": string;
      county: string;
      notation: string;
      polygon: string;
      riverOrSea: string;
    };
    floodAreaID: string;
    isTidal: boolean;
    message: string;
    severity: string;
    severityLevel: number;
    timeMessageChanged: string; // consider using Date type
    timeRaised: string; // consider using Date type
    timeSeverityChanged: string; // consider using Date type
  }