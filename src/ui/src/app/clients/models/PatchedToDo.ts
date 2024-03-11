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
 * @interface PatchedToDo
 */
export interface PatchedToDo {
    /**
     * 
     * @type {number}
     * @memberof PatchedToDo
     */
    readonly toDoId?: number;
    /**
     * 
     * @type {string}
     * @memberof PatchedToDo
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedToDo
     */
    description?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof PatchedToDo
     */
    dueDatetime?: Date | null;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedToDo
     */
    isComplete?: boolean;
    /**
     * 
     * @type {number}
     * @memberof PatchedToDo
     */
    owner?: number | null;
}

/**
 * Check if a given object implements the PatchedToDo interface.
 */
export function instanceOfPatchedToDo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedToDoFromJSON(json: any): PatchedToDo {
    return PatchedToDoFromJSONTyped(json, false);
}

export function PatchedToDoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedToDo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'toDoId': !exists(json, 'to_do_id') ? undefined : json['to_do_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'dueDatetime': !exists(json, 'due_datetime') ? undefined : (json['due_datetime'] === null ? null : new Date(json['due_datetime'])),
        'isComplete': !exists(json, 'is_complete') ? undefined : json['is_complete'],
        'owner': !exists(json, 'owner') ? undefined : json['owner'],
    };
}

export function PatchedToDoToJSON(value?: PatchedToDo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'description': value.description,
        'due_datetime': value.dueDatetime === undefined ? undefined : (value.dueDatetime === null ? null : value.dueDatetime.toISOString()),
        'is_complete': value.isComplete,
        'owner': value.owner,
    };
}

