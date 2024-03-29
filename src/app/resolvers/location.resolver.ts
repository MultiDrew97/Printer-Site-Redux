import {Injectable} from "@angular/core";
import {Resolve} from "@angular/router";
import {Location} from "../../scripts/models";
import {APIService} from "../services/api.service";

@Injectable({
	providedIn: 'root'
})
export class LocationResolver implements Resolve<Location[]> {
	constructor(private api: APIService) {}

	resolve(): Promise<Location[]> {
		return this.api.getLocations()
	}
}
