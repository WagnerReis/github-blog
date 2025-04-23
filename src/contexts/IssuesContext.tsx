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
  created_at: Date;
}

interface Issue {
  totalCount: number;
  items: IssueItem[];
}

interface IssuesContextType {
  issues: Issue;
  fetchIssues: (query?: string) => Promise<void>;
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
    console.log(query);
    try {
      const response = await api.get(
        `search/issues?q=${query}%20repo:WagnerReis/github-blog`,
      );

      const newIssue = {
        totalCount: response.data.total_count,
        items: response.data.items.map((item: IssueItem) => {
          return {
            id: item.id,
            title: item.title,
            body: item.body,
            createdAt: new Date(item.created_at),
          };
        }),
      };

      setIssues(newIssue);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchIssues();
  }, [fetchIssues]);

  return (
    <IssuesContext.Provider value={{ issues, fetchIssues }}>
      {children}
    </IssuesContext.Provider>
  );
}

// class IssueClass {
//   private readonly totalCount: number;
//   private readonly items: IssueItem[];

//   constructor(totalCount: number, items: IssueItem) {
//     this.totalCount = totalCount;
//     this.items = items.map((item) => new IssueItem({ ...item }));
//   }
// }

// class IssueItem {
//   private readonly title: string;
//   private readonly body: string;
//   private readonly created_at: Date;

//   constructor({ title, body, created_at }: IssueItem) {
//     this.title = title;
//     this.body = body;
//     this.created_at = new Date(created_at);
//   }
// }
