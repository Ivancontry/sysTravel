import {Editorial} from "./editorial";
import {Author} from "./author";

export class Book {
  public isbn?: number;
  public editorialId?: number;
  public editorialName?: string;
  public title?: string;
  public synopsis?: string;
  public pagesNumber?: string
  public editorial?: Editorial;
  public authors?: Author[];
}
