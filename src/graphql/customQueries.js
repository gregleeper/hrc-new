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
          AwayTeam {
            id
            name
          }
          HomeTeam {
            id
            name
          }

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
          items {
            id
            name
            number
          }
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
          items {
            id
            name
            number
          }
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
