import { TAppState } from '@app/types';
import { createFeatureSelector } from '@ngrx/store';

export const selectAppState = createFeatureSelector<TAppState>('app');
