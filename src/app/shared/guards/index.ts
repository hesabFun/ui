import { AnonymousGuard } from './anonymous.guard';
import { AuthenticationGuard } from './authentication.guard';

export * from './anonymous.guard';
export * from './authentication.guard';


export const Guards = [
  AnonymousGuard,
  AuthenticationGuard,
];
