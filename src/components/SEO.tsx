import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  canonical?: string;
}

export const SEO = ({
  title = "The Leaders' Guide | Business Coaching Nigeria | Rework Business Hub",
  description = "Transform your business with expert coaching in Nigeria. From idea to scale, we build teams, systems & companies that work without you. Book your clarity session today.",
  keywords = "business coaching Nigeria, leadership development, team building, business growth consultant, startup business coach, small business systems, business transformation Nigeria, executive coaching, leadership training, business strategy Nigeria",
  image = "https://reworkbusinesshub.com/og-image.jpg",
  url = "https://reworkbusinesshub.com",
  type = "website",
  author = "Adewumi Adeyanju, Rework Business Hub",
  canonical,
}: SEOProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attribute, name);
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    };

    // Update or create link tags
    const updateLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`);
      
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", rel);
        document.head.appendChild(link);
      }
      link.setAttribute("href", href);
    };

    // Primary meta tags
    updateMetaTag("title", title);
    updateMetaTag("description", description);
    updateMetaTag("keywords", keywords);
    updateMetaTag("author", author);

    // Open Graph tags
    updateMetaTag("og:title", title, true);
    updateMetaTag("og:description", description, true);
    updateMetaTag("og:image", image, true);
    updateMetaTag("og:url", canonical || url, true);
    updateMetaTag("og:type", type, true);
    updateMetaTag("og:site_name", "Rework Business Hub", true);
    updateMetaTag("og:locale", "en_NG", true);

    // Twitter Card tags
    updateMetaTag("twitter:card", "summary_large_image");
    updateMetaTag("twitter:title", title);
    updateMetaTag("twitter:description", description);
    updateMetaTag("twitter:image", image);
    updateMetaTag("twitter:url", canonical || url);
    updateMetaTag("twitter:site", "@ReworkBusinessHub");
    updateMetaTag("twitter:creator", "@ReworkBusinessHub");

    // Canonical URL
    if (canonical) {
      updateLinkTag("canonical", canonical);
    }

    // Update lang attribute if needed
    document.documentElement.lang = "en";
  }, [title, description, keywords, image, url, type, author, canonical]);

  return null;
};

