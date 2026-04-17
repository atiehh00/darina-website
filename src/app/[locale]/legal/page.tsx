import OverviewPage from "@/components/ui/OverviewPage";

export default function LegalOverviewPage() {
  return (
    <OverviewPage
      pageKey="pages.legal"
      image="/images/legal/law-library-busts.jpg"
      children={[
        {
          labelKey: "nav.legal_support",
          descKey: "pages.legal_support.lead",
          href: "/legal/support",
        },
        {
          labelKey: "nav.certificates",
          descKey: "pages.certificates.lead",
          href: "/legal/certificates",
        },
        {
          labelKey: "nav.real_estate",
          descKey: "pages.real_estate.lead",
          href: "/legal/real-estate",
        },
      ]}
    />
  );
}
