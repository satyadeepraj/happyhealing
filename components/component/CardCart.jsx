import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export function CardCart() {
  return (
    <Card className="w-full h-[650px] max-w-md py-4">
      <CardContent className="grid gap-6">
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <Label htmlFor="visit-type" className="font-bold">Visit Type</Label>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <Label htmlFor="airplane-mode">Centre Visit</Label>
              <Switch id="visit-type" />
              <Label htmlFor="airplane-mode">Home Collection</Label>
            </div>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="state">State</Label>
          <Select id="state">
            <SelectTrigger>
              <SelectValue placeholder="Select State" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ca">California</SelectItem>
              <SelectItem value="tx">Texas</SelectItem>
              <SelectItem value="ny">New York</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="city">City</Label>
          <Select id="city">
            <SelectTrigger>
              <SelectValue placeholder="Select City" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="la">Los Angeles</SelectItem>
              <SelectItem value="hou">Houston</SelectItem>
              <SelectItem value="ny">New York City</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="centre">Centres</Label>
          <Select id="centre">
            <SelectTrigger>
              <SelectValue placeholder="Select Centre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="c1">Centre 1</SelectItem>
              <SelectItem value="c2">Centre 2</SelectItem>
              <SelectItem value="c3">Centre 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="tests">Tests</Label>
          <Select id="tests">
            <SelectTrigger>
              <SelectValue placeholder="Select Tests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="t1">Test 1</SelectItem>
              <SelectItem value="t2">Test 2</SelectItem>
              <SelectItem value="t3">Test 3</SelectItem>
            </SelectContent>
          </Select>
        </div>
       
          <Button variant="outline">Cancel</Button>
          <Button variant="">Book Appointment</Button>
          <Button variant="destructive">Add to Cart</Button>
        
      </CardContent>
    </Card>
  );
}
