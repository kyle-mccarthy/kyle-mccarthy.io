export interface Post {
  id: number;
  title: string;
  slug: string;
  createdAt: Date;
  tags: Tag[];
  summary: string[];
  content: string[];
}

export interface PostDTO extends Omit<Post, "createdAt"> {
  createdAt: string;
}

export interface Tag {
  title: string;
  slug: string;
}
