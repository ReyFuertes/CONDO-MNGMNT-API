import { IDocumentDto } from "src/document/document.dto";
import { ISpouse } from "src/spouse/spouse.dto";
import { IPersonal } from "src/personal/personal.dto";
import { IOccupantDto } from "src/occupant/occupant.dto";
import { IVehicleDto } from "src/vehicle/vehicle.dto";

export interface IOnboadingResponseDto {
  data: IOnboardingDto[], count: number
}
export interface IOnboardingDto {
  id?: string;
  type?: any;
  personal?: IPersonal;
  spouse?: ISpouse;
  documents?: IDocumentDto[];
  occupants?: IOccupantDto[];
  vehicles?: IVehicleDto[];
}