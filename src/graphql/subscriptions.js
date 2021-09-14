/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation {
    onCreateLocation {
      id
      name
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent {
    onUpdateEvent {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent {
    onDeleteEvent {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateSport = /* GraphQL */ `
  subscription OnCreateSport {
    onCreateSport {
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
export const onUpdateSport = /* GraphQL */ `
  subscription OnUpdateSport {
    onUpdateSport {
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
export const onDeleteSport = /* GraphQL */ `
  subscription OnDeleteSport {
    onDeleteSport {
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
export const onCreateDivision = /* GraphQL */ `
  subscription OnCreateDivision {
    onCreateDivision {
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
export const onUpdateDivision = /* GraphQL */ `
  subscription OnUpdateDivision {
    onUpdateDivision {
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
export const onDeleteDivision = /* GraphQL */ `
  subscription OnDeleteDivision {
    onDeleteDivision {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      teamID
      name
      number
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
      createdAt
      updatedAt
    }
  }
`;
