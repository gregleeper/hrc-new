/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      dateAndTime
      sportID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Location {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      HomeTeam {
        id
        name
        divisionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roster {
          nextToken
          startedAt
        }
      }
      AwayTeam {
        id
        name
        divisionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roster {
          nextToken
          startedAt
        }
      }
      Sport {
        id
        name
        about
        summary
        cost
        imageURL
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Events {
          nextToken
          startedAt
        }
        Divisions {
          nextToken
          startedAt
        }
      }
      Division {
        id
        name
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateAndTime
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Location {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        HomeTeam {
          id
          name
          divisionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        AwayTeam {
          id
          name
          divisionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Sport {
          id
          name
          about
          summary
          cost
          imageURL
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dateAndTime
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Location {
          id
          name
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        HomeTeam {
          id
          name
          divisionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        AwayTeam {
          id
          name
          divisionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Sport {
          id
          name
          about
          summary
          cost
          imageURL
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      divisionID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Division {
        id
        name
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Teams {
          nextToken
          startedAt
        }
      }
      roster {
        items {
          id
          teamID
          name
          number
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        divisionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roster {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        divisionID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        roster {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getSport = /* GraphQL */ `
  query GetSport($id: ID!) {
    getSport(id: $id) {
      id
      name
      about
      summary
      cost
      imageURL
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Events {
        items {
          id
          dateAndTime
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
      Divisions {
        items {
          id
          name
          sportID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listSports = /* GraphQL */ `
  query ListSports(
    $filter: ModelSportFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSports(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        about
        summary
        cost
        imageURL
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Events {
          nextToken
          startedAt
        }
        Divisions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSports = /* GraphQL */ `
  query SyncSports(
    $filter: ModelSportFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSports(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        about
        summary
        cost
        imageURL
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Events {
          nextToken
          startedAt
        }
        Divisions {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getDivision = /* GraphQL */ `
  query GetDivision($id: ID!) {
    getDivision(id: $id) {
      id
      name
      sportID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        items {
          id
          name
          divisionID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const listDivisions = /* GraphQL */ `
  query ListDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDivisions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Teams {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncDivisions = /* GraphQL */ `
  query SyncDivisions(
    $filter: ModelDivisionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDivisions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        sportID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        Teams {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      teamID
      name
      number
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        name
        number
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        name
        number
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getFacility = /* GraphQL */ `
  query GetFacility($id: ID!) {
    getFacility(id: $id) {
      id
      name
      imageURL
      address
      about
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listFacilities = /* GraphQL */ `
  query ListFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFacilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        imageURL
        address
        about
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncFacilities = /* GraphQL */ `
  query SyncFacilities(
    $filter: ModelFacilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncFacilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        imageURL
        address
        about
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLeisure = /* GraphQL */ `
  query GetLeisure($id: ID!) {
    getLeisure(id: $id) {
      id
      activityName
      about
      cost
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const listLeisures = /* GraphQL */ `
  query ListLeisures(
    $filter: ModelLeisureFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeisures(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        activityName
        about
        cost
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLeisures = /* GraphQL */ `
  query SyncLeisures(
    $filter: ModelLeisureFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLeisures(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        activityName
        about
        cost
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
