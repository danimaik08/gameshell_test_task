import { z } from 'zod';
import * as validation from './validation';

export type ValuteProperty = z.infer<typeof validation.schemaValuteProperty>;

export type GetResponse = z.infer<typeof validation.schemaGetResponse>;
