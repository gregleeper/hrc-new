/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      dateAndTime
      sportID
      createdAt
      updatedAt
      Location {
        id
        name
        createdAt
        updatedAt
      }
      HomeTeam {
        id
        name
        divisionID
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          createdAt
          updatedAt
        }
        roster {
          nextToken
        }
      }
      AwayTeam {
        id
        name
        divisionID
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          createdAt
          updatedAt
        }
        roster {
          nextToken
        }
      }
      Sport {
        id
        name
        createdAt
        updatedAt
        Events {
          nextToken
        }
        Divisions {
          nextToken
        }
      }
      Division {
        id
        name
        sportID
        createdAt
        updatedAt
        Teams {
          nextToken
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
        createdAt
        updatedAt
        Location {
          id
          name
          createdAt
          updatedAt
        }
        HomeTeam {
          id
          name
          divisionID
          createdAt
          updatedAt
        }
        AwayTeam {
          id
          name
          divisionID
          createdAt
          updatedAt
        }
        Sport {
          id
          name
          createdAt
          updatedAt
        }
        Division {
          id
          name
          sportID
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      divisionID
      createdAt
      updatedAt
      Division {
        id
        name
        sportID
        createdAt
        updatedAt
        Teams {
          nextToken
        }
      }
      roster {
        items {
          id
          teamID
          name
          number
          createdAt
          updatedAt
        }
        nextToken
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
        createdAt
        updatedAt
        Division {
          id
          name
          sportID
          createdAt
          updatedAt
        }
        roster {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSport = /* GraphQL */ `
  query GetSport($id: ID!) {
    getSport(id: $id) {
      id
      name
      createdAt
      updatedAt
      Events {
        items {
          id
          dateAndTime
          sportID
          createdAt
          updatedAt
        }
        nextToken
      }
      Divisions {
        items {
          id
          name
          sportID
          createdAt
          updatedAt
        }
        nextToken
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
        createdAt
        updatedAt
        Events {
          nextToken
        }
        Divisions {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getDivision = /* GraphQL */ `
  query GetDivision($id: ID!) {
    getDivision(id: $id) {
      id
      name
      sportID
      createdAt
      updatedAt
      Teams {
        items {
          id
          name
          divisionID
          createdAt
          updatedAt
        }
        nextToken
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
        createdAt
        updatedAt
        Teams {
          nextToken
        }
      }
      nextToken
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
