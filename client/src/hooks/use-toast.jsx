import { createContext, useCallback, useContext, useState } from "react"

const ToastContext = createContext({})

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  return (
    <ToastContext.Provider
      value={{
        toasts,
        setToasts,
      }}
    >
      {children}
    </ToastContext.Provider>
  )
}

function useToast() {
  const context = useContext(ToastContext)

  const { toasts, setToasts } = context

  const toast = useCallback(
    function ({ ...props }) {
      const id = Math.random().toString(36).substring(2, 9)
      setToasts((prevToasts) => [...prevToasts, { ...props, id }])
      return id
    },
    [setToasts]
  )

  const dismiss = useCallback(
    function (toastId) {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== toastId))
    },
    [setToasts]
  )

  return {
    toast,
    dismiss,
    toasts,
  }
}

export { ToastProvider, useToast }