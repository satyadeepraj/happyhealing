import Link from "next/link";
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "../ui/button";

export function AllBlogsCard({ title, description, imgSrc }) {
  return (
    <Card className="w-full">
      <div className="group relative overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl">
        <CardHeader>
          <Link className="absolute inset-0 z-10" href="#">
            <span className="sr-only">View post</span>
          </Link>
          <CardHeader className="flex items-center gap-4">
            <img
              src="https://res.cloudinary.com/dzkpb9csm/image/upload/v1721040804/HappyHealingDiagnostic/icons8-doctor-64_vwx6he.png"
              width={50}
              height={40}
              alt="Happy Healing Diagnostics"
              className="rounded-full p-1 border-2 border-[#C50000]"
            />
            <div>
              <h3 className="text-lg font-semibold">
                Happy Healing Diagnostics
              </h3>
              <p className="text-muted-foreground text-center text-sm">
                Pathology Lab
              </p>
            </div>
          </CardHeader>
          <img
            alt={title}
            className="h-80 mobile:h-60 w-full object-cover transition-all group-hover:scale-110 rounded-2xl"
            height={800}
            src={imgSrc}
            style={{
              aspectRatio: "600/800",
              objectFit: "cover",
            }}
            width={600}
          />
        </CardHeader>
        <div className=" mobile:space-y-0 mobile:p-0 ">
          <CardContent className="-mt-2">
            <h3 className="text-xl font-semibold group-hover:text-[#c50000] ">
              {title}
            </h3>
            <p className="text-gray-500 line-clamp-2">{description}</p>
          </CardContent>
          <CardFooter>
            <Button
              variant="outline"
              className="text-[#c50000] border border-[#c50000] p-4 "
            >
              View More
            </Button>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
}
