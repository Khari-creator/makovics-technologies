import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function POSPage() {
  return (
    <SolutionLayout
      badge="Streamline Your Sales"
      title="Point of Sale (POS) System"
      description="A comprehensive retail management solution designed for businesses of all sizes. Process transactions quickly, manage inventory in real-time, and gain valuable insights into your sales performance."
      features={[
        "Fast checkout processing",
        "Real-time inventory tracking",
        "Multi-location support",
        "Sales analytics & reports",
        "Customer loyalty programs",
        "Mobile POS capability",
      ]}
    />
  );
}
