import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { homeContent } from "@/content/home";

const { benefits } = homeContent;

export const LayoutBenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg badge-green-gradient font-semibold mb-2 inline-block tracking-wider rounded px-3 py-1">
            {benefits.eyebrow}
          </h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
            {benefits.heading}
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            {benefits.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefits.items.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muteds bg-gradient-to-br from-primary/5 to-muted dark:from-primary/20 dark:to-card hover-card-green border border-primary/30 shadow-lg group/number"
            >
              <CardHeader>
                <div className="flex justify-between items-center">
                  <Icon
                    name={icon}
                    size={32}
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-primary/10 font-medium transition-all group-hover/number:text-primary/40">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle className="text-lg text-primary">{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-base">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};