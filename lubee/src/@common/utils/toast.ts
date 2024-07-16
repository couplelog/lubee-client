import { toast } from "react-toastify";

export const successToast = (text: string, time = 1000) => {
  toast.success(text, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    icon: false,
    theme: "colored",
  });
};

export const errorToast = (text: string, time = 1000) => {
  toast.error(text, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    icon: false,
    theme: "colored",
  });
};

export const infoToast = (text: string, time = 1000) => {
  toast.info(text, {
    position: "bottom-center",
    autoClose: time,
    hideProgressBar: true,
    closeOnClick: false,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
    icon: false,
    theme: "colored",
  });
};
