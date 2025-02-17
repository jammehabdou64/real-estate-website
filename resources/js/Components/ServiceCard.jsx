import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex gap-4">
      <div className="text-4xl">{service.icon}</div>
      <div>
        <h3 className="font-semibold mb-2">{service.title}</h3>
        <p className="text-muted-foreground">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
