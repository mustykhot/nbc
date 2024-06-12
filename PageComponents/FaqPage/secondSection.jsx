import TabsHeader from "Components/TabHeader/TabsHeader";
import { useState } from "react";
import CategoryFaq from "./FaqSections/categoryOneFaq";

const SecondSection = () => {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className="pd_second_section">
      <TabsHeader
        tabs={[
          { name: "General", value: "general" },
          { name: "Website", value: "website" },
          { name: "Inventory", value: "inventory" },
          { name: "Messaging", value: "messaging" },
          { name: "Payments", value: "payment" },
        ]}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      <div className="accordion_section">
        <CategoryFaq section={activeTab.toLocaleLowerCase()} />
      </div>
    </section>
  );
};

export default SecondSection;
