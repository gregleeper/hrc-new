// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Location, Event, Team, Division, Sport } = initSchema(schema);

export {
  Location,
  Event,
  Team,
  Division,
  Sport
};