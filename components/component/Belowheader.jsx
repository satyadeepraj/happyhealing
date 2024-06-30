
import { Button } from "@/components/ui/button"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"

export function Belowheader() {
  return (
    (<div className="">
    
      <main className="py-20">
        <div
          className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="text-center py-4">
            <MapPinIcon className="text-red-600 w-12 h-12 mx-auto border-2 rounded-full  border-red-600 p-2 "  />
            <CardTitle className="py-4 font-bold">Locate Centres</CardTitle>
            <CardDescription className="">Find Centres near you</CardDescription>
          </Card>
          <Card className="text-center py-4">
            <SearchIcon className="text-red-600 w-12 h-12 mx-auto border-2 rounded-full  border-red-600 p-2" />
            <CardTitle className="py-4 font-bold">Find a Test</CardTitle>
            <CardDescription>View Tests and Prices</CardDescription>
          </Card>
          <Card className="text-center py-4">
            <BriefcaseMedicalIcon className="text-red-600 w-12 h-12 mx-auto border-2 rounded-full  border-red-600 p-2" />
            <CardTitle className="py-4 font-bold">Health Packages</CardTitle>
            <CardDescription>View Health Bundles</CardDescription>
          </Card>
          <Card className="text-center py-4">
            <PillBottleIcon className="text-red-600 w-12 h-12 mx-auto border-2 rounded-full  border-red-600 p-2" />
            <CardTitle className="py-4 font-bold">Upload Prescription</CardTitle>
            <CardDescription>Upload Doctors Prescription</CardDescription>
          </Card>
        </div>
      </main>
      <div className="fixed bottom-8 right-8 flex flex-col space-y-4">
        <Button variant="outline" className="rounded-full p-3 bg-white shadow-lg">
          <PhoneIcon className="text-red-600 w-6 h-6" />
        </Button>
        <Button variant="outline" className="rounded-full p-3 bg-white shadow-lg">
          <PhoneIcon className="text-green-600 w-6 h-6" />
        </Button>
      </div>
    </div>)
  );
}

function BriefcaseMedicalIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M12 11v4" />
      <path d="M14 13h-4" />
      <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M18 6v14" />
      <path d="M6 6v14" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>)
  );
}


function MapPinIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>)
  );
}


function PhoneIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path
        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>)
  );
}


function PillBottleIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
      <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
      <rect width="16" height="5" x="4" y="2" rx="1" />
    </svg>)
  );
}


function SearchIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>)
  );
}
