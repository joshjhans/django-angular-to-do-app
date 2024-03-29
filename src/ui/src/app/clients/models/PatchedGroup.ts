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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PatchedGroup
 */
export interface PatchedGroup {
    /**
     * 
     * @type {string}
     * @memberof PatchedGroup
     */
    readonly url?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedGroup
     */
    name?: string;
}

/**
 * Check if a given object implements the PatchedGroup interface.
 */
export function instanceOfPatchedGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedGroupFromJSON(json: any): PatchedGroup {
    return PatchedGroupFromJSONTyped(json, false);
}

export function PatchedGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function PatchedGroupToJSON(value?: PatchedGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

