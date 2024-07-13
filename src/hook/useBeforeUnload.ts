import { useAppSelector } from "@/redux/hook";
import { useEffect } from "react";

type BeforeUnloadProps = {
  message: string;
};

const useBeforeUnload = ({ message }: BeforeUnloadProps) => {
  const cart = useAppSelector((state) => state.cart);
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      if (cart.length > 0) {
        event.preventDefault();
        event.returnValue = message;
      }
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [cart, message]);
};

export default useBeforeUnload;
