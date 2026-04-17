import OverviewPage from "@/components/ui/OverviewPage";

export default function IntegrationOverviewPage() {
  return (
    <OverviewPage
      pageKey="pages.integration"
      image="/images/integration/classroom-presentation.jpg"
      children={[
        {
          labelKey: "nav.german_rwr",
          descKey: "pages.german_rwr.lead",
          href: "/integration/german-rwr",
        },
        {
          labelKey: "nav.legal_courses",
          descKey: "pages.legal_courses.lead",
          href: "/integration/legal-courses",
        },
      ]}
    />
  );
}
