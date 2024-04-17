import { FactoryProvider } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { ODataConfiguration } from '@awdorrin/ngx-odata-client';

export class ODataConfigurationFactory {

    constructor() {
        const config = new ODataConfiguration();
        config.baseUrl = "https://localhost:4200/subscription";

        config.defaultRequestOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
        config.customRequestOptions.headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });

        return config;
    }
}