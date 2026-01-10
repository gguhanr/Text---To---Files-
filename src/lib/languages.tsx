import type { FC, SVGProps } from "react";
import { FileCode, FileText } from "lucide-react";

export type Language = {
  id: string;
  name: string;
  extension: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
};

const HtmlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 3h16l-1.6 18L12 22l-6.4-1L4 3z" />
    <path d="m9 9 8 0" />
    <path d="m8 13 5 0" />
    <path d="m9 17 2 1 2-1" />
  </svg>
);

const CssIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 3h16l-1.5 14L12 21l-6.5-4L4 3z" />
    <path d="M8 8h8" />
    <path d="M8 12h4" />
    <path d="M8 16h2" />
  </svg>
);

const JavaScriptIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20v-4" />
    <path d="M10 9a2 2 0 1 1 4 0" />
    <path d="M12 16a2 2 0 1 0 0-4h-4a2 2 0 1 0 0 4h4z" />
    <rect width="18" height="18" x="3" y="3" rx="2" />
  </svg>
);

const PythonIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M11 13.5c-2.485 0-4.5-2.015-4.5-4.5S8.515 4.5 11 4.5h2.5c2.485 0 4.5 2.015 4.5 4.5S15.985 13.5 13.5 13.5H11z" />
    <path d="M13 10.5c2.485 0 4.5 2.015 4.5 4.5s-2.015 4.5-4.5 4.5H10.5c-2.485 0-4.5-2.015-4.5-4.5s2.015-4.5 4.5-4.5H13z" />
    <circle cx="11" cy="7.5" r="1" fill="currentColor" stroke="none" />
    <circle cx="13" cy="16.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const JavaIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 10c0-2 1.8-4 4-4 1.5 0 3 1.2 3 3s-1.5 3-3 3H9v6" />
    <path d="M10 16c0 1.1.9 2 2 2s2-.9 2-2" />
    <path d="M4 11h13c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2H4v6z" />
  </svg>
);

const CSharpIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 8a2 2 0 1 0-4 0v8a2 2 0 1 0 4 0" />
      <path d="M10 12h4" />
      <path d="M5 10v4" />
      <path d="M3 12h2" />
      <path d="M19 10v4" />
      <path d="M17 12h2" />
    </svg>
);

const RIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 13a3 3 0 0 1-3-3V5h4" />
      <path d="M10 10a3 3 0 0 1 3 3" />
      <path d="M10 13l4 8" />
    </svg>
);

const NodeJsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9.91 9.91a3 3 0 1 0 4.18 4.18" />
    <path d="M12 2a10 10 0 1 0 10 10" />
    <path d="m14.32 9.68 4.25-2.47" />
    <path d="m11.53 15.53-3.2 4.01" />
    <path d="m9.68 14.32-2.47 4.25" />
    <path d="M15.53 11.53l4.01-3.2" />
  </svg>
);

const PHPIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="12" rx="10" ry="9" />
    <path d="M5.5 15C7.66 16.5 9.83 17 12 17s4.34-.5 6.5-2" />
    <path d="M12 8V5" />
    <path d="M12 19v-2" />
    <path d="M9 12h6" />
  </svg>
);

const ReactJsIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
  </svg>
);

const SqlIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

const CsvIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 10 10 11" />
  </svg>
);


export const LANGUAGES: Language[] = [
  { id: "plaintext", name: "Plain Text", extension: "txt", Icon: FileText },
  { id: "html", name: "HTML", extension: "html", Icon: HtmlIcon },
  { id: "css", name: "CSS", extension: "css", Icon: CssIcon },
  { id: "javascript", name: "JavaScript", extension: "js", Icon: JavaScriptIcon },
  { id: "typescript", name: "TypeScript", extension: "ts", Icon: FileCode },
  { id: "jsx", name: "React (JSX)", extension: "jsx", Icon: ReactJsIcon },
  { id: "python", name: "Python", extension: "py", Icon: PythonIcon },
  { id: "java", name: "Java", extension: "java", Icon: JavaIcon },
  { id: "c", name: "C", extension: "c", Icon: FileCode },
  { id: "csharp", name: "C#", extension: "cs", Icon: CSharpIcon },
  { id: "cpp", name: "C++", extension: "cpp", Icon: FileCode },
  { id: "r", name: "R", extension: "r", Icon: RIcon },
  { id: "php", name: "PHP", extension: "php", Icon: PHPIcon },
  { id: "nodejs", name: "Node.js", extension: "js", Icon: NodeJsIcon },
  { id: "sql", name: "SQL", extension: "sql", Icon: SqlIcon },
  { id: "json", name: "JSON", extension: "json", Icon: FileCode },
  { id: "xml", name: "XML", extension: "xml", Icon: FileCode },
  { id: "markdown", name: "Markdown", extension: "md", Icon: FileCode },
  { id: "csv", name: "CSV", extension: "csv", Icon: CsvIcon },
];
