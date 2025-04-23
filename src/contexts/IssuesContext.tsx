import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface IssueItem {
  id: number;
  title: string;
  body: string;
  createdAt: Date;
}

interface IssueItemResponse {
  number: number;
  title: string;
  body: string;
  created_at: Date;
}

interface Issue {
  totalCount: number;
  items: IssueItem[];
}

interface IssueContent {
  title: string;
  owner: string;
  body: string;
  url: string;
  comments: number;
  createdAt: Date;
}

interface IssuesContextType {
  issues: Issue;
  fetchIssues: (query?: string) => Promise<void>;
  fetchExpecificIssue: (id: string) => Promise<IssueContent | null>;
}

interface IssuesContextProviderProps {
  children: ReactNode;
}

export const IssuesContext = createContext({} as IssuesContextType);

export function IssuesContextProvider({
  children,
}: IssuesContextProviderProps) {
  const [issues, setIssues] = useState<Issue>({ totalCount: 0, items: [] });

  const fetchIssues = useCallback(async (query: string = "") => {
    try {
      const response = await api.get(
        `search/issues?q=${query}%20repo:WagnerReis/github-blog`,
      );

      const newIssue = {
        totalCount: response.data.total_count,
        items: response.data.items.map((item: IssueItemResponse) => {
          return {
            id: item.number,
            title: item.title,
            body: item.body,
            createdAt: new Date(item.created_at),
          };
        }),
      };

      setIssues(newIssue);
    } catch (err) {
      console.error(err);
    }
  }, []);

  const fetchExpecificIssue = useCallback(async (id: string) => {
    try {
      const response = await api.get(
        `repos/WagnerReis/github-blog/issues/${id}`,
      );

      const content = {
        title: response.data.title,
        owner: response.data.user.login,
        body: response.data.body,
        url: response.data.html_url,
        comments: response.data.comments,
        createdAt: new Date(response.data.created_at),
      };

      return content;
    } catch (err) {
      console.error(err);
      return null;
    }
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider
      value={{ issues, fetchIssues, fetchExpecificIssue }}
    >
      {children}
    </IssuesContext.Provider>
  );
}
