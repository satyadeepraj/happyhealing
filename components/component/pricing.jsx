import Link from "next/link";

export function Pricing() {
  return (
    <div className="bg-background mt-10">
      <section className="container mx-auto py-10 px-4 md:py-16 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-block rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Happy Healing Diagnostics
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
            Affordable Lab Pathology Tests
          </h1>
          <p className="mb-8 text-muted-foreground md:text-xl">
            Get accurate and reliable lab results for all your diagnostic needs.
            Our team of experts ensures a seamless and hassle-free experience.
          </p>
        </div>
      </section>
      <section className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
            Pricing
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Basic Panel</h3>
              <p className="mb-6 text-4xl font-bold text-[#c50000]">$99</p>
              <p className="mb-6 text-muted-foreground">
                Includes essential tests for general health and wellness.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-[#c50000] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Comprehensive Panel</h3>
              <p className="mb-6 text-4xl font-bold text-[#c50000]">$199</p>
              <p className="mb-6 text-muted-foreground">
                Covers a wide range of tests for a thorough health assessment.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-[#c50000] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
            <div className="rounded-lg border bg-background p-6 shadow-sm">
              <h3 className="mb-4 text-2xl font-bold">Premium Panel</h3>
              <p className="mb-6 text-4xl font-bold text-[#c50000]">$299</p>
              <p className="mb-6 text-muted-foreground">
                Includes advanced tests for a comprehensive health evaluation.
              </p>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-[#c50000] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              prefetch={false}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
