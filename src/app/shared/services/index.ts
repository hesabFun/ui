import { MessageService } from './message.service';
import { ConfigService } from './config.service';
import { UsersService } from './users.service';

export * from './config.service';
export * from './message.service';

export const Services = [
  ConfigService,
  MessageService,
  UsersService,
];
