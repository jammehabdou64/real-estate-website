import React from "react";

const SectionWrapper = ({
  title,
  centerTitle = false,
  className = "bg-gray-50",
  children,
}) => {
  return (
    <section className={`py-12  ${className}`}>
      <div className="max-container">
        {title && (
          <h2
            className={`text-2xl font-bold ${centerTitle ? "flex justify-center" : ""}`}
          >
            {title}
          </h2>
        )}

        <div className="mt-4">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrapper;
