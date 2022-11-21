export type AuthorType = {
  photoURL?: string;
  displayName: string;
  uid?: string;
}

export interface PostListType {
  author: AuthorType;
  content: string;
  createdAt: Date;
  image: string;
  postNum: number;
  repleNum?: number;
  title: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface PostList {
  postList: PostListType[];
}

export interface PostInfo {
  postInfo: PostListType;
}

export interface PostId {
  postId: string
}

export interface RepleListType {
  author: AuthorType;
  content: string;
  createdAt: Date;
  postId: string;
  reple: string;
  updatedAt: Date;
  __v: number;
  _id: string;
}

export interface RepleList {
  repleList: RepleListType[];
}

export interface RepleType {
  reple: RepleListType;
}