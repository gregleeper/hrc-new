/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createSport = /* GraphQL */ `
  mutation CreateSport(
    $input: CreateSportInput!
    $condition: ModelSportConditionInput
  ) {
    createSport(input: $input, condition: $condition) {
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
export const updateSport = /* GraphQL */ `
  mutation UpdateSport(
    $input: UpdateSportInput!
    $condition: ModelSportConditionInput
  ) {
    updateSport(input: $input, condition: $condition) {
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
export const deleteSport = /* GraphQL */ `
  mutation DeleteSport(
    $input: DeleteSportInput!
    $condition: ModelSportConditionInput
  ) {
    deleteSport(input: $input, condition: $condition) {
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
export const createDivision = /* GraphQL */ `
  mutation CreateDivision(
    $input: CreateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    createDivision(input: $input, condition: $condition) {
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
export const updateDivision = /* GraphQL */ `
  mutation UpdateDivision(
    $input: UpdateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    updateDivision(input: $input, condition: $condition) {
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
export const deleteDivision = /* GraphQL */ `
  mutation DeleteDivision(
    $input: DeleteDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    deleteDivision(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      teamID
      name
      number
      createdAt
      updatedAt
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      teamID
      name
      number
      createdAt
      updatedAt
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      teamID
      name
      number
      createdAt
      updatedAt
    }
  }
`;
