import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LocationMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TeamMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DivisionMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SportMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FacilityMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type LeisureMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Location {
  readonly id: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Location, LocationMetaData>);
  static copyOf(source: Location, mutator: (draft: MutableModel<Location, LocationMetaData>) => MutableModel<Location, LocationMetaData> | void): Location;
}

export declare class Event {
  readonly id: string;
  readonly dateAndTime?: string;
  readonly HomeTeam?: Team;
  readonly AwayTeam?: Team;
  readonly Sport?: Sport;
  readonly sportID?: string;
  readonly Division?: Division;
  readonly Location?: Location;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Event, EventMetaData>);
  static copyOf(source: Event, mutator: (draft: MutableModel<Event, EventMetaData>) => MutableModel<Event, EventMetaData> | void): Event;
}

export declare class Team {
  readonly id: string;
  readonly name?: string;
  readonly Division?: Division;
  readonly divisionID?: string;
  readonly roster?: (Player | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team, TeamMetaData>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team, TeamMetaData>) => MutableModel<Team, TeamMetaData> | void): Team;
}

export declare class Division {
  readonly id: string;
  readonly name: string;
  readonly Teams?: (Team | null)[];
  readonly sportID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Division, DivisionMetaData>);
  static copyOf(source: Division, mutator: (draft: MutableModel<Division, DivisionMetaData>) => MutableModel<Division, DivisionMetaData> | void): Division;
}

export declare class Player {
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly number: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

export declare class Sport {
  readonly id: string;
  readonly name: string;
  readonly about?: string;
  readonly summary?: string;
  readonly cost?: (string | null)[];
  readonly Divisions?: (Division | null)[];
  readonly Events?: (Event | null)[];
  readonly imageURL?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sport, SportMetaData>);
  static copyOf(source: Sport, mutator: (draft: MutableModel<Sport, SportMetaData>) => MutableModel<Sport, SportMetaData> | void): Sport;
}

export declare class Facility {
  readonly id: string;
  readonly name: string;
  readonly imageURL?: string;
  readonly address: string;
  readonly about: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Facility, FacilityMetaData>);
  static copyOf(source: Facility, mutator: (draft: MutableModel<Facility, FacilityMetaData>) => MutableModel<Facility, FacilityMetaData> | void): Facility;
}

export declare class Leisure {
  readonly id: string;
  readonly activityName: string;
  readonly about: string;
  readonly cost: (string | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Leisure, LeisureMetaData>);
  static copyOf(source: Leisure, mutator: (draft: MutableModel<Leisure, LeisureMetaData>) => MutableModel<Leisure, LeisureMetaData> | void): Leisure;
}