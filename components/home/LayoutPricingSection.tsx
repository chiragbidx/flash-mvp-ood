import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { homeContent } from "@/content/home";

const { pricing } = homeContent;

export const LayoutPricingSection = () => {
  return (
    <section id="pricing" className="container py-24 sm:py-32">
      <h2 className="text-lg badge-green-gradient font-semibold text-center mb-2 tracking-wider rounded px-3 py-1">
        {pricing.eyebrow}
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4 text-primary">
        {pricing.heading}
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        {pricing.subtitle}
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {pricing.plans.map(
          ({ title, popular, price, description, buttonText, benefits }) => (
            <Card
              key={title}
              className={
                popular
                  ? "drop-shadow-xl shadow-green-500/10 border-2 border-primary lg:scale-[1.08] bg-primary/5"
                  : "border border-primary/20"
              }
            >
              <CardHeader>
                <CardTitle className="pb-2 text-primary">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold text-primary">${price}</span>
                  <span className="text-muted-foreground"> {pricing.priceSuffix}</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefits.map((benefit) => (
                    <span key={benefit} className="flex items-center">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={popular ? "default" : "secondary"}
                  className={popular ? "w-full btn-green-glow shadow" : "w-full border-primary text-primary"}
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};