/* eslint-disable import/prefer-default-export */

import { type SchemaTypeDefinition } from 'sanity';
import teamMember from '@/schemas/team-member';
import availableRole from '@/schemas/available-role';

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [teamMember, availableRole],
};
