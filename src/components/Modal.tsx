/** @format */

import clsx from "clsx";
import { RiCloseCircleLine } from "react-icons/ri";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";

type Props = {
  showModal: boolean;
  className?: string;
  classNameOuter?: string;
  closeModal: Function;
  title: string;
  children: React.ReactNode;
  mt?: string | number;
  titleRight?: string;
};

export default function Modal({
  showModal,
  closeModal,
  className,
  title = "Modal Title",
  classNameOuter,
  children,
  mt,
  titleRight
}: Props) {
  const ref = useOnclickOutside(() => {
    closeModal();
  });

  const heightRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<any>(0);

  useEffect(() => {
    function getHeight() {
      setHeight(heightRef?.current?.offsetHeight);
      window?.requestAnimationFrame(getHeight);
    }
    getHeight();
  }, []);

  // modal close on press escape key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal]);

  //

  return showModal ? (
    <>
      <div
        className={clsx(
          "  fixed left-0 top-0  z-50 w-full flex  h-full items-center justify-center max-h-full overflow-auto ",
          classNameOuter
        )}
      >
        <div
          ref={ref}
          className="p-6  flex  "
          style={{ marginTop: height > 700 ? mt : 0 }}
        >
          {/*content start*/}
          <div
            ref={heightRef}
            className={clsx(
              " min-h-[100px]  bg-gray-100 rounded-lg  px-4 py-4 shadow font-normal  ",
              className
            )}
          >
            <div className="flex justify-between mb-3  ">
              <p className="text-xl font-bold">{title}</p>
              {/* <div> width- {height}</div> */}
              <div className="flex items-center gap-2">
                {titleRight && (
                  <p className="font-bold text-xl">{titleRight}</p>
                )}

                <RiCloseCircleLine
                  onClick={() => {
                    closeModal();
                  }}
                  className="text-3xl cursor-pointer"
                />
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#c4c4c4c4] mb-4 !text-base " />
            {/* <Divider className="mb-4  " /> */}
            {children}
          </div>
        </div>
      </div>
      <div className="opacity-30 fixed inset-0 z-40 bg-black"></div>
    </>
  ) : null;
}
