  export interface Attributes {
      playlistId: number;
      season: number;
  }

  export interface Metadata {
      name: string;
  }

  export interface Metadata2 {
      iconUrl: string;
      name: string;
  }

  export interface Tier {
      rank?: any;
      percentile?: any;
      displayName: string;
      displayCategory: string;
      category: string;
      metadata: Metadata2;
      value: number;
      displayValue: string;
      displayType: string;
  }

  export interface Metadata3 {
      name: string;
  }

  export interface Division {
      rank?: any;
      percentile?: any;
      displayName: string;
      displayCategory: string;
      category: string;
      metadata: Metadata3;
      value: number;
      displayValue: string;
      displayType: string;
  }

  export interface Metadata4 {
  }

  export interface MatchesPlayed {
      rank?: any;
      percentile?: any;
      displayName: string;
      displayCategory: string;
      category: string;
      metadata: Metadata4;
      value: number;
      displayValue: string;
      displayType: string;
  }

  export interface Metadata5 {
  }

  export interface WinStreak {
      rank?: any;
      percentile?: any;
      displayName: string;
      displayCategory: string;
      category: string;
      metadata: Metadata5;
      value: number;
      displayValue: string;
      displayType: string;
  }

  export interface Metadata6 {
  }

  export interface Rating {
      rank?: any;
      percentile?: any;
      displayName: string;
      displayCategory: string;
      category: string;
      metadata: Metadata6;
      value: number;
      displayValue: string;
      displayType: string;
  }

  export interface Stats {
      tier: Tier;
      division: Division;
      matchesPlayed: MatchesPlayed;
      winStreak: WinStreak;
      rating: Rating;
  }

  export interface Datum {
      type: string;
      attributes: Attributes;
      metadata: Metadata;
      expiryDate: Date;
      stats: Stats;
  }

  export interface RootObject {
      data: Datum[];
  }