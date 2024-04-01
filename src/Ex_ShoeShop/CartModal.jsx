import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
/* eslint-disable */

const CartModal = ({
  isOpen,
  closeModal,
  arrCart,
  deleteCart,
  updateToTal,
}) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <h3 className="text-xl font-semibold mb-5">Giỏ hàng của tôi</h3>
                {/* tên sản phẩm, hình ảnh, số lượng, giá tiền, xóa */}

                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Tên sản phẩm
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Hình ảnh
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Số lượng
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Giá tiền
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Hành động
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* <tr className="bg-white  ">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                      >
                        Apple MacBook Pro 17"
                      </th>
                      <td className="px-6 py-4">Silver</td>
                      <td className="px-6 py-4">Laptop</td>
                      <td className="px-6 py-4">$2999</td>
                    </tr> */}
                      {/* eslint-disable-next-line */}
                      {arrCart.map((item, index) => {
                        return (
                          <tr key={index}>
                            <th>{item.name}</th>
                            <td>
                              <img className="w-20" src={item.image} alt="" />
                            </td>
                            <td className="space-x-2">
                              <button
                                onClick={() => {
                                  updateToTal("minus", item.id);
                                }}
                                className=" px-1 bg-black text-white rounded"
                              >
                                <i className="fa-solid fa-minus"></i>
                              </button>
                              <span>{item.toTal}</span>
                              <button
                                onClick={() => {
                                  updateToTal("plus", item.id);
                                }}
                                className=" px-1 bg-black text-white rounded"
                              >
                                <i className="fa-solid fa-plus"></i>
                              </button>
                            </td>
                            <td>{item.toTal * item.price}</td>
                            <td>
                              <button
                                onClick={() => {
                                  deleteCart(item.id);
                                }}
                                className="py-2 px-5 text-white bg-red-500 rounded-md"
                              >
                                Xóa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CartModal;
