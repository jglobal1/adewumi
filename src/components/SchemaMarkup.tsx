import { useEffect } from "react";

export const SchemaMarkup = () => {
  useEffect(() => {
    // Main Organization Schema
    const organizationScript = document.createElement("script");
    organizationScript.type = "application/ld+json";
    organizationScript.id = "schema-organization";
    organizationScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://reworkbusinesshub.com/#organization",
      "name": "Rework Business Hub",
      "alternateName": "The Leaders' Guide",
      "description": "Business coaching and leadership development services in Nigeria. Build teams, systems, and companies that scale without you. Expert guidance from idea to launch, solopreneur to company, and company to scale.",
      "url": "https://reworkbusinesshub.com",
      "logo": "https://reworkbusinesshub.com/logo-full.png",
      "image": "https://reworkbusinesshub.com/og-image.jpg",
      "sameAs": [
        "https://www.linkedin.com/company/reworkbusinesshub",
        "https://twitter.com/ReworkBusinessHub",
        "https://www.facebook.com/ReworkBusinessHub"
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
        "name": "Adewumi Adeyanju",
        "jobTitle": "Business Coach & Leadership Strategist",
        "url": "https://reworkbusinesshub.com/about"
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

    // Breadcrumb Schema
    const breadcrumbScript = document.createElement("script");
    breadcrumbScript.type = "application/ld+json";
    breadcrumbScript.id = "schema-breadcrumb";
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://reworkbusinesshub.com/"
        }
      ]
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
      "url": "https://reworkbusinesshub.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://reworkbusinesshub.com/search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    });

    document.head.appendChild(organizationScript);
    document.head.appendChild(breadcrumbScript);
    document.head.appendChild(websiteScript);

    return () => {
      const orgScript = document.getElementById("schema-organization");
      const breadScript = document.getElementById("schema-breadcrumb");
      const webScript = document.getElementById("schema-website");
      if (orgScript) document.head.removeChild(orgScript);
      if (breadScript) document.head.removeChild(breadScript);
      if (webScript) document.head.removeChild(webScript);
    };
  }, []);

  return null;
};
