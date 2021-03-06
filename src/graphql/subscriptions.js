/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation {
    onUpdateLocation {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation {
    onDeleteLocation {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent {
    onCreateEvent {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateSport = /* GraphQL */ `
  subscription OnCreateSport {
    onCreateSport {
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
export const onUpdateSport = /* GraphQL */ `
  subscription OnUpdateSport {
    onUpdateSport {
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
export const onDeleteSport = /* GraphQL */ `
  subscription OnDeleteSport {
    onDeleteSport {
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
export const onCreateDivision = /* GraphQL */ `
  subscription OnCreateDivision {
    onCreateDivision {
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
export const onUpdateDivision = /* GraphQL */ `
  subscription OnUpdateDivision {
    onUpdateDivision {
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
export const onDeleteDivision = /* GraphQL */ `
  subscription OnDeleteDivision {
    onDeleteDivision {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateFacility = /* GraphQL */ `
  subscription OnCreateFacility {
    onCreateFacility {
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
export const onUpdateFacility = /* GraphQL */ `
  subscription OnUpdateFacility {
    onUpdateFacility {
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
export const onDeleteFacility = /* GraphQL */ `
  subscription OnDeleteFacility {
    onDeleteFacility {
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
export const onCreateLeisure = /* GraphQL */ `
  subscription OnCreateLeisure {
    onCreateLeisure {
      id
      activityName
      imageURL
      summary
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
export const onUpdateLeisure = /* GraphQL */ `
  subscription OnUpdateLeisure {
    onUpdateLeisure {
      id
      activityName
      imageURL
      summary
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
export const onDeleteLeisure = /* GraphQL */ `
  subscription OnDeleteLeisure {
    onDeleteLeisure {
      id
      activityName
      imageURL
      summary
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
export const onCreateSummer = /* GraphQL */ `
  subscription OnCreateSummer {
    onCreateSummer {
      id
      name
      imageURLs
      summary
      about
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSummer = /* GraphQL */ `
  subscription OnUpdateSummer {
    onUpdateSummer {
      id
      name
      imageURLs
      summary
      about
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSummer = /* GraphQL */ `
  subscription OnDeleteSummer {
    onDeleteSummer {
      id
      name
      imageURLs
      summary
      about
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
