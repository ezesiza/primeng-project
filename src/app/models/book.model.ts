export interface Book {
  id?:number,
  title?: string,
  isbn?: string,
  pageCount?: number,
  publishedDate?: Date,
  thumbnailUrl?: string,
  shortDescription?: string,
  longDescription?: string,
  status?: string,
  authors?:  string,
  categories?: string[]
}
