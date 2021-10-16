import { IDocumentDto } from "src/modules/document/document.dto";
import { ISpouse } from "src/modules/spouse/spouse.dto";
import { IPersonal } from "src/modules/personal/personal.dto";
import { IOccupantDto } from "src/modules/occupant/occupant.dto";
import { IVehicleDto } from "src/modules/vehicle/vehicle.dto";
import { IHomeowner } from "../homeowner/homeowner.dto";

export interface IOnboadingResponseDto {
  data: IOnboardingDto[], count: number
}
export interface IOnboardingDto {
  id?: string;
  type?: any;
  onboarding?: IOnboarding;
  personal?: IPersonal;
  spouse?: ISpouse;
  documents?: IDocumentDto[];
  occupants?: IOccupantDto[];
  vehicles?: IVehicleDto[];
}

export interface IOnboarding {
  id?: string;
  type?: any;
  personal?: IPersonal;
  spouse?: ISpouse;
}