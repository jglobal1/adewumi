import { useEffect } from "react";

interface SchemaMarkupProps {
  pageType?: "home" | "about" | "services" | "packages" | "testimonials" | "contact";
  pageTitle?: string;
  pageDescription?: string;
  pageUrl?: string;
}

export const SchemaMarkup = ({ 
  pageType = "home",
  pageTitle,
  pageDescription,
  pageUrl 
}: SchemaMarkupProps) => {
  useEffect(() => {
    const baseUrl = "https://reworkbusinesshub.com";
    const currentUrl = pageUrl || baseUrl;

    // Main Organization Schema
    const organizationScript = document.createElement("script");
    organizationScript.type = "application/ld+json";
    organizationScript.id = "schema-organization";
    organizationScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${baseUrl}/#organization`,
      "name": "Rework Business Hub",
      "alternateName": "The Leaders' Guide",
      "description": "Business coaching and leadership development services in Nigeria. Build teams, systems, and companies that scale without you. Expert guidance from idea to launch, solopreneur to company, and company to scale.",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo-full.png`,
        "width": 512,
        "height": 512
      },
      "image": `${baseUrl}/og-image.jpg`,
      "sameAs": [
        "http://linkedin.com/in/adewumi-adeyanju",
        "https://www.facebook.com/adewumi.joshua.adeyanju",
        "https://www.instagram.com/adewumiadeyanju_"
      ],
      "telephone": "+234-706-053-5490",
      "email": "hello@reworkbusinesshub.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Abuja",
        "addressLocality": "Abuja",
        "addressRegion": "FCT",
        "postalCode": "",
        "addressCountry": "NG"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "9.0765",
        "longitude": "7.3986",
        "addressCountry": "NG"
      },
      "priceRange": "₦₦₦",
      "founder": {
        "@type": "Person",
        "@id": `${baseUrl}/#founder`,
        "name": "Adewumi Adeyanju",
        "givenName": "Adewumi",
        "familyName": "Adeyanju",
        "jobTitle": "Business Coach & Leadership Strategist",
        "url": `${baseUrl}/about`,
        "sameAs": [
          "http://linkedin.com/in/adewumi-adeyanju",
          "https://www.facebook.com/adewumi.joshua.adeyanju",
          "https://www.instagram.com/adewumiadeyanju_"
        ],
        "knowsAbout": [
          "Business Coaching",
          "Leadership Development",
          "Team Building",
          "Business Strategy",
          "Organizational Development"
        ]
      },
      "areaServed": {
        "@type": "Country",
        "name": "Nigeria"
      },
      "serviceType": "Business Coaching",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Business Coaching Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "The Clarity Session",
              "description": "90-minute strategic consultation to define your next step and create a customized roadmap for your business growth",
              "provider": {
                "@type": "ProfessionalService",
                "name": "Rework Business Hub"
              },
              "price": "50000",
              "priceCurrency": "NGN",
              "availability": "https://schema.org/InStock"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Growth & Structure Programs",
              "description": "Comprehensive coaching programs for business transformation including Idea-to-Launch, Solopreneur-to-Company, Leader's Operating System, and Scale Accelerator programs"
            }
          }
        ]
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "50",
        "bestRating": "5",
        "worstRating": "1"
      }
    });

    // Breadcrumb Schema - Dynamic based on page
    const breadcrumbItems = [
      { position: 1, name: "Home", item: baseUrl + "/" }
    ];

    if (pageType !== "home") {
      const pageNames: Record<string, string> = {
        about: "About",
        services: "Services",
        packages: "Packages",
        testimonials: "Testimonials",
        contact: "Contact"
      };
      breadcrumbItems.push({
        position: 2,
        name: pageNames[pageType] || "Page",
        item: currentUrl
      });
    }

    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "schema-breadcrumb";
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map(item => ({
        "@type": "ListItem",
        "position": item.position,
        "name": item.name,
        "item": item.item
      }))
    });

    // Website Schema
    const websiteScript = document.createElement("script");
    websiteScript.type = "application/ld+json";
    websiteScript.id = "schema-website";
    websiteScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Rework Business Hub",
      "alternateName": "The Leaders' Guide",
      "url": baseUrl,
      "description": pageDescription || "Business coaching and leadership development services in Nigeria",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": `${baseUrl}/search?q={search_term_string}`
        },
        "query-input": "required name=search_term_string"
      }
    });

    // Page-specific schema
    let pageScript: HTMLScriptElement | null = null;
    if (pageType === "about") {
      pageScript = document.createElement("script");
      pageScript.type = "application/ld+json";
      pageScript.id = "schema-page";
      pageScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": pageTitle || "About Us - The Leaders' Guide",
        "description": pageDescription || "Learn about The Leaders' Guide and how we help businesses grow through coaching and leadership development",
        "url": currentUrl,
        "mainEntity": {
          "@type": "Person",
          "name": "Adewumi Adeyanju",
          "jobTitle": "Business Coach & Leadership Strategist"
        }
      });
    } else if (pageType === "services") {
      pageScript = document.createElement("script");
      pageScript.type = "application/ld+json";
      pageScript.id = "schema-page";
      pageScript.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "The Clarity Session",
        "description": "90-minute strategic consultation to define your next step and create a customized roadmap for your business growth",
        "provider": {
          "@type": "ProfessionalService",
          "name": "Rework Business Hub"
        },
        "areaServed": {
          "@type": "Country",
          "name": "Nigeria"
        },
        "offers": {
          "@type": "Offer",
          "price": "50000",
          "priceCurrency": "NGN"
        }
      });
    }

    document.head.appendChild(organizationScript);
    document.head.appendChild(breadcrumbScript);
    document.head.appendChild(websiteScript);
    if (pageScript) {
      document.head.appendChild(pageScript);
    }

    return () => {
      const orgScript = document.getElementById("schema-organization");
      const breadScript = document.getElementById("schema-breadcrumb");
      const webScript = document.getElementById("schema-website");
      const pScript = document.getElementById("schema-page");
      if (orgScript) document.head.removeChild(orgScript);
      if (breadScript) document.head.removeChild(breadScript);
      if (webScript) document.head.removeChild(webScript);
      if (pScript) document.head.removeChild(pScript);
    };
  }, [pageType, pageTitle, pageDescription, pageUrl]);

  return null;
};
