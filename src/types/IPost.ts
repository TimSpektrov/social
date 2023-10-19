export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: string[];
  userId: number;
  reactions: number;
}
