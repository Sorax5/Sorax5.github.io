// RawArticle represents the shape coming from frontmatter / props.
export type RawImage = string | { url: string; alt?: string };

export interface RawArticle {
  title: string;
  pubDate?: string;
  description?: string;
  author?: string;
  url?: string;
  image?: RawImage;
  tags?: string[];
  content?: string;
}

// Article is a small wrapper around RawArticle that provides
// convenient computed properties for presentation (imageUrl, imageAlt, formattedDate).
export class Article {
  private data: RawArticle;

  constructor(data: RawArticle) {
    this.data = data;
  }

  // Basic passthroughs (readonly)
  get title(): string {
    return this.data.title;
  }

  get pubDate(): string | undefined {
    return this.data.pubDate;
  }

  get description(): string | undefined {
    return this.data.description;
  }

  get author(): string | undefined {
    return this.data.author;
  }

  get url(): string | undefined {
    return this.data.url;
  }

  get tags(): string[] {
    return this.data.tags ?? [];
  }

  get content(): string | undefined {
    return this.data.content;
  }

  // Computed helpers
  get imageUrl(): string | undefined {
    if (!this.data.image) return undefined;
    return typeof this.data.image === "string"
      ? this.data.image
      : this.data.image.url;
  }

  get imageAlt(): string {
    if (!this.data.image) return this.data.title ?? "";
    return typeof this.data.image === "string"
      ? this.data.title ?? ""
      : this.data.image.alt ?? this.data.title ?? "";
  }

  get formattedDate(): string {
    if (!this.data.pubDate) return "";
    try {
      return new Date(this.data.pubDate).toLocaleDateString("fr-FR", {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return this.data.pubDate ?? "";
    }
  }
}
