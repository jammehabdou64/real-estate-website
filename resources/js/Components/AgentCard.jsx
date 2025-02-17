import React from "react";

const AgentCard = ({ agent }) => {
  return (
    <div className="text-center">
      <div className="relative w-32 h-32 mx-auto mb-4">
        <img
          src={agent.image || "/placeholder.svg"}
          alt={agent.name}
          className="object-cover rounded-full w-32 h-32"
        />
      </div>
      <h3 className="font-semibold">{agent.name}</h3>
      <p className="text-sm text-muted-foreground">{agent.role}</p>
    </div>
  );
};

export default AgentCard;
