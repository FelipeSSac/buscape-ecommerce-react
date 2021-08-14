import { Fragment } from 'react';

import { useDetectClickOutside } from 'react-detect-click-outside';

import { useDispatch } from 'react-redux';
import { ActionTypes } from '../../../store';

import { Header } from '../Header';

import { CartList } from '../../Molecule/CartList';
import { ShopList } from '../ShopList';

export default function Layout() {
  const dispatch = useDispatch();

  const hideShowMenu = () => {
    dispatch({ type: ActionTypes.hideCartItemsList });
  };

  const ref = useDetectClickOutside({ onTriggered: hideShowMenu });

  return (
    <>
      <div ref={ref}>
        <Header />
        <CartList />
      </div>
      <ShopList />
    </>
  );
}
