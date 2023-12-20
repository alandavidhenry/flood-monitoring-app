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
    timeMessageChanged: Date;
    timeRaised: Date;
    timeSeverityChanged: Date;
}