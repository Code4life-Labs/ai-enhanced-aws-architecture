import React from "react";

// Import ui components
import { useToast } from "src/hooks/use-toast";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// Import objects
import { DiagramAPI } from "src/objects/diagram/api";

export default function GenerationSection() {
  const { toast } = useToast();

  const descriptionTextAreaRef = React.useRef<HTMLTextAreaElement | null>(null);

  const handleGenerateButtonClick = function () {
    if (!descriptionTextAreaRef.current) return;
    // Display a toast
    toast({
      title: "Generating...",
      description: "Your requested diagram is being generated...",
    });

    DiagramAPI.generateDiagram(descriptionTextAreaRef.current.value)
      .then((response) => {
        // HTTP Stream is included
        // Display a toast
        toast({
          title: "Diagram is available",
          description:
            "The diagram is generated, please check in the `Result` section",
        });
      })
      .catch((error) => {
        console.error(error);

        // Display a toast
        toast({
          title: "Uh oh! Something went wrong.",
          description: "Cannot generate your requested diagram",
          variant: "destructive",
        });
      });
  };

  return (
    <div className="w-fullpx-3 my-3">
      <div className="mx-auto w-full max-w-[720px]">
        <h1 className="font-bold text-xl">Let's generate a diagram</h1>
        <Textarea
          ref={descriptionTextAreaRef}
          className="mb-3 mt-2"
          placeholder="Describe your architecture..."
        />
        <Button onClick={handleGenerateButtonClick} className="w-full">
          Request diagram
        </Button>
        <hr className="border-[#262626] my-3" />
      </div>
      <div className="mx-auto w-full max-w-[720px]">
        <h1 className="font-bold text-xl">Result</h1>
      </div>
      <div className="flex justify-center items-center min-h-[540px] mt-3 border-t border-b border-dashed">
        <p className="text-gray-700 italic">Your result will go here</p>
      </div>
    </div>
  );
}
