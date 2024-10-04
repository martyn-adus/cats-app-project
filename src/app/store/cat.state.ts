import { State, Action, StateContext } from '@ngxs/store';
import {SetBreed, SetLimit} from './cat.actions';

export interface CatStateModel {
  breed: string;
  limit: number;
}

@State<CatStateModel>({
  name: 'cat',
  defaults: {
    breed: '',
    limit: 10,
  }
})
export class CatState {

  @Action(SetBreed)
  setBreed(ctx: StateContext<CatStateModel>, action: SetBreed) {
    ctx.patchState({ breed: action.breed });
  }

  @Action(SetLimit)
  setLimit(ctx: StateContext<CatStateModel>, action: SetLimit) {
    ctx.patchState({ limit: action.limit });
  }
}
