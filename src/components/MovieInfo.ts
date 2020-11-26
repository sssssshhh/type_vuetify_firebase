export interface Movie {
    movieName: string;
    movieNameE: string;
    pdYear: string;
    hallCode: string;
    screeningDate: string; // TODO: [] に修正予定
    screeningTime: string; // TODO: [] に修正予定
    movieposter?: string;
}

export interface Seat {
    screeningId: string;
    hallCd: string;
    seatCd: string;
    rsvId?: string;
}