export type Story = {
  by: string;
  descendants: number;
  id: number;
  kids: number[];
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
};

export type CommentType = {
  by: string;
  deleted: boolean;
  id: number;
  parent: number;
  text: string;
  time: number;
  type: 'comment';
  kids: number[];
};
