"use client";

import { useState, useMemo } from "react";
import {
  ArrowRight,
  Bot,
  Download,
  FileCode2,
  Loader,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { LANGUAGES, type Language } from "@/lib/languages";
import { generateCodeAction } from "./actions";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [languageId, setLanguageId] = useState<string>(LANGUAGES[0].id);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const selectedLanguage = useMemo<Language>(
    () => LANGUAGES.find((lang) => lang.id === languageId) || LANGUAGES[0],
    [languageId]
  );

  const handleConvert = () => {
    setOutput(input);
  };

  const handleGenerate = async () => {
    if (!input) {
      toast({
        title: "Input required",
        description: "Please enter a prompt to generate an example.",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    setOutput("");
    const result = await generateCodeAction(input, selectedLanguage.name);
    if (result.success && result.code) {
      setOutput(result.code);
    } else {
      toast({
        title: "Error Generating Code",
        description:
          result.error || "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    }
    setIsLoading(false);
  };

  const handleDownload = () => {
    if (!output) return;

    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `example.${selectedLanguage.extension}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center p-4 sm:p-6 lg:p-8">
      <header className="w-full max-w-6xl mb-8 flex justify-between items-center">
        <div className="flex-1 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <FileCode2 className="w-8 h-8 text-primary" />
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground font-headline">
              BEST Text Files
            </h1>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Instantly convert text snippets or generate code examples with AI.
            Select a language, input your text or a prompt, and let the magic happen.
          </p>
        </div>
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
          <ThemeToggle />
        </div>
      </header>
      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        {/* Input Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle>Input</CardTitle>
            <CardDescription>
              Enter text to convert or a prompt for the AI to generate code.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col flex-grow">
            <Textarea
              placeholder="e.g., 'A simple Python function to add two numbers' or '<div>Hello World</div>'"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-grow min-h-[250px] lg:min-h-[400px] font-code text-sm"
              aria-label="Input text or prompt"
            />
            <div className="flex flex-col sm:flex-row gap-2 mt-4">
              <Button
                onClick={handleConvert}
                className="w-full"
                disabled={isLoading}
              >
                <ArrowRight />
                Convert
              </Button>
              <Button
                onClick={handleGenerate}
                variant="outline"
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  <Wand2 />
                )}
                Generate Example
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Output Card */}
        <Card className="flex flex-col">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
              <div>
                <CardTitle>Output</CardTitle>
                <CardDescription>
                  Your converted or generated code will appear here.
                </CardDescription>
              </div>
              <div className="flex items-center gap-2">
                <Select value={languageId} onValueChange={setLanguageId}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    {LANGUAGES.map((lang) => (
                      <SelectItem key={lang.id} value={lang.id}>
                        <div className="flex items-center gap-2">
                          <lang.Icon className="w-4 h-4" />
                          <span>{lang.name}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleDownload}
                  disabled={!output || isLoading}
                  aria-label="Download file"
                >
                  <Download className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="flex-grow bg-muted/30 rounded-lg p-0">
            <div className="relative w-full h-full min-h-[250px] lg:min-h-[400px] font-code text-sm overflow-auto rounded-lg">
              {isLoading ? (
                <div className="p-4 space-y-3">
                  <Skeleton className="h-4 w-[80%]" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[75%]" />
                  <Skeleton className="h-4 w-[85%]" />
                </div>
              ) : output ? (
                <pre className="p-4">
                  <code>{output}</code>
                </pre>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-muted-foreground p-4 text-center">
                  <Bot className="w-12 h-12 mb-4" />
                  <p>Your output will be displayed here.</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
      <footer className="w-full max-w-6xl mt-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} BEST Text Files. All rights reserved.</p>
      </footer>
    </div>
  );
}
