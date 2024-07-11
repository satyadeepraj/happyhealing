export function AboutSecond() {
  return (
    <div className="bg-background text-foreground">
      <main className="container mx-auto">
        <section className="w-full py-12 md:py-24 lg:py-10 bg-muted mb-12 md:mb-16 lg:mb-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1720708461/HappyHealingDiagnostic/gettyimages-1687020310-612x612_xklskg.jpg"
                width="500"
                height="300"
                alt="Acme Lab Pathology Facilities"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  State-of-the-Art Facilities
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Lab Pathology operates in a modern, purpose-built
                  facility equipped with the latest diagnostic equipment and
                  technologies. Our lab is designed to ensure the highest
                  standards of quality, safety, and efficiency, enabling us to
                  deliver accurate and reliable results to our clients.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#c50000]" />
                    <span>Fully automated testing equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#c50000]" />
                    <span>Dedicated specimen processing and storage areas</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#c50000]" />
                    <span>Stringent quality control and safety protocols</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="">
            <div className="mx-4 md:mx-6 lg:mx-8">
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <DropletsIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Hematology</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our hematology lab provides comprehensive testing for blood
                    disorders, including complete blood counts, coagulation
                    studies, and more.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <BugIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Microbiology</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our microbiology lab specializes in the identification and
                    susceptibility testing of bacteria, viruses, and other
                    infectious agents.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <TableIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">Histopathology</h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our histopathology lab provides comprehensive analysis of
                    tissue samples, including biopsies and surgical specimens,
                    to aid in the diagnosis of various medical conditions.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="mb-12 md:mb-16 lg:mb-20">
          <div className="mx-4 md:mx-6 lg:mx-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Sample Collection and Turnaround Time
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg border border-input p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#c50000] p-3">
                    <SyringeIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Sample Collection</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Our lab offers convenient sample collection services, with
                  trained professionals available to collect blood, tissue, and
                  other samples at our facility or at your location.
                </p>
              </div>
              <div className="rounded-lg border border-input p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#c50000] p-3">
                    <ClockIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Turnaround Time</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  We understand the importance of timely results, which is why
                  we strive to provide accurate test results within 24-48 hours
                  for most routine tests, ensuring you receive the information
                  you need to make informed healthcare decisions.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mb-12 md:mb-16 lg:mb-20 py-12 md:py-24 lg:py-10 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <img
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1719687674/HappyHealingDiagnostic/hospital-8786638_640_uxwge4.webp"
                width="500"
                height="300"
                alt="Acme Lab Pathology Accreditations"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Accreditations and Certifications
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Lab Pathology is accredited by the College of American
                  Pathologists (CAP) and certified by the Clinical Laboratory
                  Improvement Amendments (CLIA). These prestigious
                  accreditations and certifications demonstrate our commitment
                  to quality, accuracy, and compliance in all aspects of our
                  operations.
                </p>
                <ul className="mt-4 grid gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#c50000]" />
                    <span>
                      College of American Pathologists (CAP) Accredited
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-[#c50000]" />
                    <span>
                      Clinical Laboratory Improvement Amendments (CLIA)
                      Certified
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <section className="py-4">
            <div className="mx-4 md:mx-6 lg:mx-8">
              <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <BadgeIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Accredited Laboratory
                    </h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our lab is accredited by the College of American
                    Pathologists (CAP), ensuring the highest standards of
                    quality and reliability in our testing services.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <MicroscopeIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      Experienced Pathologists
                    </h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our team of experienced pathologists and technicians are
                    dedicated to providing accurate and timely results, ensuring
                    the best possible care for our patients.
                  </p>
                </div>
                <div className="rounded-lg border border-gray-300 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-[#c50000] p-3">
                      <BeakerIcon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold">
                      State-of-the-Art Facilities
                    </h3>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Our lab is equipped with the latest technology and
                    equipment, allowing us to perform a wide range of pathology
                    tests with precision and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </section>
        <section className="w-full mb-12 md:mb-16 lg:mb-20">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Experienced Team
                </h2>
                <p className="mt-4 text-muted-foreground text-justify md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Acme Lab Pathology is led by a team of highly skilled and
                  experienced pathologists, each with a deep understanding of
                  the latest advancements in the field. Our team is dedicated to
                  providing accurate and timely results, ensuring that
                  healthcare providers can make informed decisions and deliver
                  the best possible care to their patients.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Dr. Jane Doe"
                      className="h-20 w-20 rounded-full"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Dr. Jane Doe</h3>
                      <p className="text-[#c50000]">Lead Pathologist</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Dr. John Smith"
                      className="h-20 w-20 rounded-full"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Dr. John Smith</h3>
                      <p className="text-[#c50000]">
                        Senior Pathologist
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Dr. Sarah Lee"
                      className="h-20 w-20 rounded-full"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">Dr. Sarah Lee</h3>
                      <p className="text-[#c50000]">Pathologist</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <img
                      src="/placeholder.svg"
                      width="80"
                      height="80"
                      alt="Dr. Michael Chen"
                      className="h-20 w-20 rounded-full"
                    />
                    <div className="text-center">
                      <h3 className="text-lg font-semibold">
                        Dr. Michael Chen
                      </h3>
                      <p className="text-[#c50000]">Pathologist</p>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1720708937/HappyHealingDiagnostic/pexels-photo-5726699_lc9gc5.webp"
                width="100"
                height="100"
                alt="Acme Lab Pathology Team"
                className="w-[70%] h-[600px] rounded-xl ml-20"
              />
            </div>
          </div>
        </section>
        <section className="mb-12 md:mb-16 lg:mb-20 bg-muted py-12 md:py-24 lg:py-10">
          <div className="mx-4 md:mx-6 lg:mx-8">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Contact Us
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-lg border border-gray-300 p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#c50000] p-3">
                    <PhoneIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                </div>
                <p className="mt-4 text-muted-foreground">+1 (123) 456-7890</p>
              </div>
              <div className="rounded-lg border border-gray-300 p-6">
                <div className="flex items-center gap-4">
                  <div className="rounded-full bg-[#c50000] p-3">
                    <MailIcon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold">Email</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  info@pathologylab.com
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

function BadgeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
    </svg>
  );
}

function BeakerIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 3h15" />
      <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3" />
      <path d="M6 14h12" />
    </svg>
  );
}

function BugIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
      <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6" />
      <path d="M12 20v-9" />
      <path d="M6.53 9C4.6 8.8 3 7.1 3 5" />
      <path d="M6 13H2" />
      <path d="M3 21c0-2.1 1.7-3.9 3.8-4" />
      <path d="M20.97 5c0 2.1-1.6 3.8-3.5 4" />
      <path d="M22 13h-4" />
      <path d="M17.2 17c2.1.1 3.8 1.9 3.8 4" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function DropletsIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z" />
      <path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97" />
    </svg>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function SyringeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m18 2 4 4" />
      <path d="m17 7 3-3" />
      <path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5" />
      <path d="m9 11 4 4" />
      <path d="m5 19-3 3" />
      <path d="m14 4 6 6" />
    </svg>
  );
}

function TableIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 3v18" />
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M3 9h18" />
      <path d="M3 15h18" />
    </svg>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}
