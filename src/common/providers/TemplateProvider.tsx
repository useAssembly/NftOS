import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

const TemplateContext = createContext<{
  template: string;
  setTemplate: Dispatch<SetStateAction<string>> | null;
}>({
  template: null,
  setTemplate: null,
});
TemplateContext.displayName = "TemplateContext";

export const TemplateProvider = ({ children }) => {
  const [template, setTemplate] = useState<string>();

  return (
    <TemplateContext.Provider
      value={{ template: template, setTemplate: setTemplate }}
    >
      {children}
    </TemplateContext.Provider>
  );
};

export const useTemplate = () => {
  return useContext(TemplateContext);
};
