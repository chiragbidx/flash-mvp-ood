import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { homeContent } from "@/content/home";

const { features } = homeContent;

function LayoutFeatureGridSection() {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg badge-green-gradient font-semibold text-center mb-2 tracking-wider rounded px-3 py-1">
        {features.eyebrow}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center text-primary font-bold mb-4">
        {features.heading}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        {features.subtitle}
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.items.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-gradient-to-br from-primary/10 to-background border-0 shadow-md hover-card-green">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/20 mb-4">
                  <Icon
                    name={icon}
                    size={24}
                    className="text-primary"
                  />
                </div>

                <CardTitle className="text-primary">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

export { LayoutFeatureGridSection };
export default LayoutFeatureGridSection;