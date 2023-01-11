export interface Item {
    id: string;
    title: string;
    text: string;
    tags: string[];
}

export interface Result {
    items: Item[];
  }