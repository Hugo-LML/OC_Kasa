import { FC, useEffect, useRef, useState } from "react";
import ArrowBottom from "../../icons/ArrowBottom";

interface AccordionProps {
  title: string;
  content: string | string[];
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [height, setHeight] = useState<number>(0);
  const accordionContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initHeight = () => {
      if (accordionContentRef.current) {
        setHeight(isOpen ? accordionContentRef.current.clientHeight : 0);
      }
    };

    initHeight();
    window.addEventListener('resize', initHeight);

    return () => {
      window.removeEventListener('resize', initHeight);
      setHeight(0);
    };
  }, [isOpen]);

  return (
    <div className="accordion">
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <ArrowBottom style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <div className="accordion__content" style={{ height: `${height}px` }}>
        <div ref={accordionContentRef} className="accordion__content__inner">
          {Array.isArray(content) ? (
            content.map((item, index) => (
              <p key={`AccordionContent.${index}`} className="accordion__content__list">{item}</p>
            ))
          ) : (
            <p className="accordion__content__text">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
