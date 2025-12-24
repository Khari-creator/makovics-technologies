import SolutionLayout from "@/components/solutions/SolutionLayout";

export default function POSPage() {
  return (
    <SolutionLayout
      title="Point of Sale (POS) System"
      subtitle="Sales, inventory, and reporting in one powerful platform"
      description="Our Point of Sale system is built for modern retail and service businesses that require fast transactions, accurate inventory control, and real-time reporting. The system is modular, secure, and scalable to support single outlets or multi-branch operations."
      features={[
        "Sales & Checkout Management",
        "Inventory & Stock Control",
        "Barcode & Product Management",
        "Multi-user Roles & Permissions",
        "Daily, Monthly & Custom Reports",
        "Customer & Supplier Management",
        "Receipt Printing & Digital Receipts",
        "Offline Mode with Sync Support",
      ]}
      audience={[
        "Retail shops and supermarkets",
        "Restaurants and cafes",
        "Pharmacies and medical stores",
        "Wholesale and distribution businesses",
        "Service-based businesses",
      ]}
      benefits={[
        "Faster checkout and reduced queues",
        "Accurate stock tracking in real time",
        "Reduced losses and improved accountability",
        "Better business decisions through analytics",
        "Scalable architecture for business growth",
      ]}
    />
  );
}
