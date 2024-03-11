/* tslint:disable */
/* eslint-disable */
/**
 * To Do App ✅
 * Simple to do application for state management demo
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Group,
  PaginatedGroupList,
  PatchedGroup,
} from '../models/index';
import {
    GroupFromJSON,
    GroupToJSON,
    PaginatedGroupListFromJSON,
    PaginatedGroupListToJSON,
    PatchedGroupFromJSON,
    PatchedGroupToJSON,
} from '../models/index';

export interface GroupsCreateRequest {
    group: Group;
}

export interface GroupsDestroyRequest {
    id: number;
}

export interface GroupsListRequest {
    page?: number;
}

export interface GroupsPartialUpdateRequest {
    id: number;
    patchedGroup?: PatchedGroup;
}

export interface GroupsRetrieveRequest {
    id: number;
}

export interface GroupsUpdateRequest {
    id: number;
    group: Group;
}

/**
 * 
 */
export class GroupsApi extends runtime.BaseAPI {

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsCreateRaw(requestParameters: GroupsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters.group === null || requestParameters.group === undefined) {
            throw new runtime.RequiredError('group','Required parameter requestParameters.group was null or undefined when calling groupsCreate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: GroupToJSON(requestParameters.group),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsCreate(requestParameters: GroupsCreateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.groupsCreateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsDestroyRaw(requestParameters: GroupsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsDestroy.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsDestroy(requestParameters: GroupsDestroyRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.groupsDestroyRaw(requestParameters, initOverrides);
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsListRaw(requestParameters: GroupsListRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PaginatedGroupList>> {
        const queryParameters: any = {};

        if (requestParameters.page !== undefined) {
            queryParameters['page'] = requestParameters.page;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PaginatedGroupListFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsList(requestParameters: GroupsListRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PaginatedGroupList> {
        const response = await this.groupsListRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsPartialUpdateRaw(requestParameters: GroupsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsPartialUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: PatchedGroupToJSON(requestParameters.patchedGroup),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsPartialUpdate(requestParameters: GroupsPartialUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.groupsPartialUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsRetrieveRaw(requestParameters: GroupsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsRetrieve.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsRetrieve(requestParameters: GroupsRetrieveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.groupsRetrieveRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsUpdateRaw(requestParameters: GroupsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Group>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling groupsUpdate.');
        }

        if (requestParameters.group === null || requestParameters.group === undefined) {
            throw new runtime.RequiredError('group','Required parameter requestParameters.group was null or undefined when calling groupsUpdate.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && (this.configuration.username !== undefined || this.configuration.password !== undefined)) {
            headerParameters["Authorization"] = "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
        }
        const response = await this.request({
            path: `/api/groups/{id}/`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: GroupToJSON(requestParameters.group),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GroupFromJSON(jsonValue));
    }

    /**
     * API endpoint that allows groups to be viewed or edited.
     */
    async groupsUpdate(requestParameters: GroupsUpdateRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Group> {
        const response = await this.groupsUpdateRaw(requestParameters, initOverrides);
        return await response.value();
    }

}