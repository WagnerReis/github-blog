import { useContext } from "react";
import { IssuesContext } from "../contexts/IssuesContext";

export function useIssues() {
  const context = useContext(IssuesContext);

  return context;
}
