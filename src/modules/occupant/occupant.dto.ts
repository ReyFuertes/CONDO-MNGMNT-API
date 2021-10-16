import { IOnboardingDto } from "src/modules/on-boarding/on-boarding.dto";

export interface IOccupantDto {
  id?: string;
  onboarding?: IOnboardingDto;
  name?: string;
  relationship?: string;
}