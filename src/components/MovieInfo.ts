export interface Movie {
    screeningId: string;
    movieCd: string;
    movieNm: string;
    movieNmEn: string;
    prdYear: string;
    hallId: string;
    startTime: string;
    endTime: string;
    startDate: string;
    endDate: string;
    screeningStatus: boolean;
    registDate: string;
    lastUpdateDate: string;
    lastUpdateUser: string;
    movieposter?: string;
}

export interface Seat {
    screeningId: string;
    hallCd: string;
    seatCd: string;
    rsvId?: string;
}