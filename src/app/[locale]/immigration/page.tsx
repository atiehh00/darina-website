import OverviewPage from "@/components/ui/OverviewPage";

export default function ImmigrationOverviewPage() {
  return (
    <OverviewPage
      pageKey="pages.immigration"
      children={[
        {
          labelKey: "nav.rwr_plus",
          descKey: "pages.rwr_plus.lead",
          href: "/immigration/rwr-plus",
        },
        {
          labelKey: "nav.settlement",
          descKey: "pages.settlement.lead",
          href: "/immigration/settlement",
        },
        {
          labelKey: "nav.family",
          descKey: "pages.family.lead",
          href: "/immigration/family-reunification",
        },
        {
          labelKey: "nav.student",
          descKey: "pages.student.lead",
          href: "/immigration/student-visa",
        },
      ]}
    />
  );
}
