import React, { useState, useEffect } from "react";

function DocCore({ doctable, docs }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Scroll to section when clicking menu
  const scrollToSection = (index) => {
    const el = document.querySelector(`#section-${index}`);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const sections = doctable.map((_, i) => document.querySelector(`#section-${i}`));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveIndex(index);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" } // triggers when section is centered
    );

    sections.forEach((section, index) => {
      if (section) section.setAttribute("data-index", index);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [doctable]);

  return (
    <div className="grid grid-cols-12 gap-10 items-start">
      {/* Sidebar Navigation */}
      <div className="col-span-3 hidden lg:block sticky top-0">
        <div className="DocTable">
          <ul>
            {doctable.map((doc, index) => (
              <li
                key={index}
                className={index === activeIndex ? "Active" : ""}
              >
                <button
                  onClick={() => scrollToSection(index)}
                  className="text-left focus:outline-none"
                >
                  {doc}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="col-span-12 lg:col-span-9">{docs}</div>
    </div>
  );
}

export default DocCore;
