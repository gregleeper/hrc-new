// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Event, Team, Division, Sport } = initSchema(schema);

export {
  Event,
  Team,
  Division,
  Sport
};