import React, { Fragment, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteCartAsync, selectItems, updateCartAsync } from "./cartSlice";

import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { Link, Navigate } from "react-router-dom";

export function Cart() {
  // const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const items = useSelector(selectItems);

  const totalAmount = items.reduce(
    (amount, item) => item.product.price * item.quantity + amount,
    0
  );
  const totalItems = items.reduce((total, item) => item.quantity + total, 0);

  const [open, setOpen] = useState(true);

  const handleQuantity = (e, item) => {
    dispatch(updateCartAsync({ id:item.id, quantity: +e.target.value }));
    //dispatch(updateCartAsync({ ...item, quantity: +e.target.value }));
  };

  const handleDelete = (e, itemId) => {
    console.log("itemId", itemId);
    dispatch(deleteCartAsync(itemId));
  };

  return (
    <>
      {
        !items.length && <Navigate to="/"></Navigate>
      }
      <div>
        <div className="mx-auto mt-12 bg-white max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <h1 className="text-4xl my-5 font-bold tracking-tight text-gray-900">
              Cart
            </h1>
            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {items.map((item, index) => (
                    <li key={index} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                          src={item.product.thumbnail}
                          alt={item.product.title}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={item.href}>{item.product.title}</a>
                            </h3>
                            <p className="ml-4">{item.product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">
                            {item.color}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">
                            Qty
                            <select onChange={(e) => handleQuantity(e, item)}>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </p>

                          <div className="flex">
                            <button
                              onClick={(e) => handleDelete(e, item.id)}
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$ {totalAmount}</p>
              </div>
              <div className="flex justify-between text-base font-medium text-gray-900">
                <p>Total items in cart</p>
                <p>{totalItems} items</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="mt-6">
                <Link to={'/checkout'} >
                <div className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700" >
                  Checkout
                </div>
                    </Link>
              </div>
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <Link to="/">
                    <button
                      type="button"
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                      onClick={() => setOpen(false)}
                    >
                      Continue Shopping
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
