import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Link } from "@inertiajs/react";
const PropertyCard = ({ property }) => {
  return (
    <Card key={property.id} className="overflow-hidden">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] relative">
          <img
            alt={property.name}
            className="object-cover"
            src={property.image || "/placeholder.svg"}
          />
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-semibold">{property.name}</h3>
          <span className="font-semibold">${property.price}</span>
        </div>
        <p className="text-sm text-gray-500">{property.location}</p>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <div>
          <div className="flex justify-between">
            <div className="flex gap-2 text-sm text-gray-500">
              <span>{property.beds} bed</span>
              <span>•</span>
              <span>{property.baths} bath</span>
            </div>
            <span className="text-sm text-gray-500">{property.sqft} sqft</span>
          </div>
          <div className="block py-2 mt-2">
            <Link
              href={`/listings/${property.id}`}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
            >
              View Details
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
