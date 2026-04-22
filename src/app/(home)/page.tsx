import Header from "@/components/Header/Header";
import SectionAboutUS from "@/components/SectionAboutUs/SectionAboutUs";
import CategorySelector from "@/components/CategorySelector/CategorySelector";

export default function Home() {
  return (
    <div>
      <Header />
      <CategorySelector />
      <SectionAboutUS />
    </div>
  );
}
