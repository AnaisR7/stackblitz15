import { Injectable, Inject } from '@angular/core';
import { ODataConfiguration } from "@awdorrin/ngx-odata-client";

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