import handlerCart from '../cartReducers';
import { APP_KIOSK } from '../../actionTypes';

describe('Reducer::handlerCart', () => {

  it('Default value', () => {
    const action = {
      type: 'unknown',
      data: 'data value',
    };
    const newState = handlerCart(action.data, { type: action.type });
    expect(newState).toEqual(action.data);
  });

  it('on UPDATE_KIOSK', () => {
    const data = {
      productList: {
        'kiosk id': {
          data: 'data',
        },
        'kiosk id 2': {
          data: 'data',
        },
      },
      totalPrice: 10,
    };

    const action = {
      type: APP_KIOSK.REQUEST_UPDATE_KIOSK_PRODUCT_SUCCESS,
      productList: data.productList,
      totalPrice: data.totalPrice,
    };
    const newState = handlerCart(data, action);
    expect(newState).toEqual(data);
  });
});
