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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      }
      Sport {
        id
        name
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
      }
      Sport {
        id
        name
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
      }
      Sport {
        id
        name
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateSport = /* GraphQL */ `
  mutation UpdateSport(
    $input: UpdateSportInput!
    $condition: ModelSportConditionInput
  ) {
    updateSport(input: $input, condition: $condition) {
      id
      name
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
export const deleteSport = /* GraphQL */ `
  mutation DeleteSport(
    $input: DeleteSportInput!
    $condition: ModelSportConditionInput
  ) {
    deleteSport(input: $input, condition: $condition) {
      id
      name
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
export const createDivision = /* GraphQL */ `
  mutation CreateDivision(
    $input: CreateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    createDivision(input: $input, condition: $condition) {
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
export const updateDivision = /* GraphQL */ `
  mutation UpdateDivision(
    $input: UpdateDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    updateDivision(input: $input, condition: $condition) {
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
export const deleteDivision = /* GraphQL */ `
  mutation DeleteDivision(
    $input: DeleteDivisionInput!
    $condition: ModelDivisionConditionInput
  ) {
    deleteDivision(input: $input, condition: $condition) {
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
