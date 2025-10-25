// RawProject represents the shape coming from project frontmatter / props.
export type RawImage = string | { url: string; alt?: string };

export interface RawProject {
  title: string;
  pubDate?: string;
  description?: string;
  image?: RawImage;
  contributors?: string[] | string;
  skills?: Array<string | null | undefined>;
  links?: Array<{ url?: string | URL | null; label?: string | null }>;
  tags?: string[];
}

export class Project {
  private data: RawProject;

  constructor(data: RawProject) {
    this.data = data;
  }

  get title(): string {
    return this.data.title;
  }

  get pubDate(): string | undefined {
    return this.data.pubDate;
  }

  get description(): string | undefined {
    return this.data.description;
  }

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
        month: "long",
        day: "numeric",
      });
    } catch (e) {
      return this.data.pubDate ?? "";
    }
  }

  get contributors(): string[] {
    if (!this.data.contributors) return [];
    if (Array.isArray(this.data.contributors))
      return this.data.contributors.filter(Boolean) as string[];
    return String(this.data.contributors)
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  get skills(): string[] {
    return Array.isArray(this.data.skills)
      ? (this.data.skills.filter(Boolean) as string[])
      : [];
  }

  get links(): Array<{ url?: string | URL | null; label?: string | null }> {
    return Array.isArray(this.data.links) ? this.data.links : [];
  }
}
