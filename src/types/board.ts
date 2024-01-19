export type BoardInfo = {
  id: number;
  title: string;
  content: string;
  writerImageUrl: string;
  writer: string;
  eatTime: string;
  shortenedLocation: string | null;
  categoryType: 'KOREAN' | 'JAPAN' | 'CHINA' | 'WEST' | 'ALL';
  alcohol: boolean;
  currentJoin: number;
  joinLimit: number;
  ageLimit: {
    up: number | null;
    down: number | null;
  };
  genderLimit: 'MALE' | 'FEMALE' | 'ALL';
  fix: boolean;
};

export type BoardDetailInfo = BoardInfo & {
  location: {
    content: string;
    position: {
      lat: number;
      lng: number;
    };
  };
  linkeUrl: string;
  priceRange: number;
};

export type boardDetailResponse = {
  data: BoardDetailInfo;
};

export type getBoardResponse = {
  data: BoardInfo[];
};
