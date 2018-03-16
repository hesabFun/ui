import { ProfileDataBackendInterface, ProfileDataJwtInterface } from '../../../shared/services/interfaces';

export interface ProfileComponentResolveInterface {
  profileLocal: ProfileDataJwtInterface;
  profileRemote: ProfileDataBackendInterface;
}
