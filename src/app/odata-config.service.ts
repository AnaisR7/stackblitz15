import { Injectable, Inject } from '@angular/core';
import { ODataConfiguration } from "@awdorrin/ngx-odata-client/projects/ngx-odata-client/src/lib/odata-configuration";

@Injectable({
  providedIn: 'root'
})
export class ODataConfigService extends ODataConfiguration {
  constructor(
    @Inject('BASE_URL') private host: string
  ) {
    super();
    this.baseUrl = this.host + "odata/";
  }
}