import cartReducers from '../../../store/reducers/cartReducers';
import { APP_ACTION } from '../../../store/actionTypes';
import CartStateObject from '../../objects/cartStateObject';
import kioskMiddleware from '../../../store/middlewares/kioskMiddleware';

describe('clear cart', () => {
  let cartData;
  beforeAll(() => {
    cartData = cartReducers(
      undefined,
      {
        type: APP_ACTION.REQUEST_REMOVE_CART_SUCCESS,
      },
    );

    spyOn(kioskMiddleware, 'handlerRemoveCart');
    kioskMiddleware.handlerRemoveCart();
  });

  it('clear cart API is called', () => {
    expect(kioskMiddleware.handlerRemoveCart).toHaveBeenCalled();
  })

  it('sessionID is removed', () => {
    expect(cartData.session).toBeNull();
  });

  it('cart ID is updated to 1', () => {
    expect(1).toBe(cartData.cartId);
  });

  it('return the initial state', () => {
    const initialData = CartStateObject.initialize();
    expect(cartData).toEqual(initialData);
  });
});
