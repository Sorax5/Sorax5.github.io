export interface RawExperience {
  title: string;
  pubDate?: string; // use for sorting / primary date
  startDate?: string;
  endDate?: string;
  institution?: string;
  description?: string;
  image?: string | { url: string; alt?: string };
  category?: string; // e.g. "Stage" | "Formation" | "Autre"
  skills?: Array<string | null | undefined>;
  links?: Array<{ url?: string | URL | null; label?: string | null }>;
}

export class Experience {
  private data: RawExperience;

  constructor(data: RawExperience) {
    this.data = data;
  }

  get title(): string {
    return this.data.title;
  }

  get pubDate(): string | undefined {
    return this.data.pubDate;
  }

  get startDate(): string | undefined {
    return this.data.startDate;
  }

  get endDate(): string | undefined {
    return this.data.endDate;
  }

  get institution(): string | undefined {
    return this.data.institution;
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

  get category(): string {
    return this.data.category ?? "Autre";
  }

  get skills(): string[] {
    return Array.isArray(this.data.skills)
      ? (this.data.skills.filter(Boolean) as string[])
      : [];
  }

  get formattedDate(): string {
    // Prefer start/end range, fall back to pubDate
    try {
      const fmt = (d?: string) =>
        d
          ? new Date(d).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "short",
            })
          : "";
      if (this.data.startDate || this.data.endDate) {
        const s = fmt(this.data.startDate);
        const e = this.data.endDate
          ? new Date(this.data.endDate).toLocaleDateString("fr-FR", {
              year: "numeric",
              month: "short",
            })
          : "présent";
        return s && e ? `${s} — ${e}` : s || e;
      }
      if (this.data.pubDate)
        return new Date(this.data.pubDate).toLocaleDateString("fr-FR", {
          year: "numeric",
          month: "long",
        });
      return "";
    } catch (e) {
      return this.data.pubDate ?? "";
    }
  }
}
