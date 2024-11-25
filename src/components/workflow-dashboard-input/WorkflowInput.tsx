"use client";

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { AutosizeTextarea } from "../ui/autosizetextarea";

import { MAIN_INPUT_PLACEHOLDER } from "@/lib/constants";

export function WorkflowInput() {
  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative z-10 flex w-full flex-col">
        <div className="rounded-b-xl">
          <form className="bg-background-subtle relative rounded-xl border border-gray-800 transition-colors">
            <div className="bg-background-subtle relative z-10 grid rounded-xl">
              <label className="sr-only" htmlFor="chat-main-textarea">
                Workflow Input Text
              </label>
              <div className="relative flex rounded-xl">
                <AutosizeTextarea id="chat-main-textarea" name="workflow-description" placeholder={MAIN_INPUT_PLACEHOLDER} className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-input focus-visible:border-none overflow-y-auto w-full bg-transparent p-3 pb-1.5 text-sm outline-none ring-0 placeholder:text-gray-500" minHeight={42} maxHeight={384} />
              </div>
              <div className="flex items-center gap-2 p-3">
                {/* TODO: Add file and image upload */}
                {/* <>
                    <Button variant="ghost" size="icon" className="bg-background-subtle text-gray-900 size-8 hover:bg-gray-100 focus-visible:bg-gray-100 rounded-lg">
                      <PaperClip className="h-4 w-4" />
                      <span className="sr-only">Attach Files</span>
                    </Button>
                    <div className="shrink-1 min-w-0 grow-0">
                      <Button variant="ghost" className="bg-background-subtle hover:bg-gray-100 focus:bg-gray-100 focus-visible:bg-gray-100 h-8 px-3 text-sm rounded-lg flex min-w-20 max-w-[200px] justify-start pl-1.5 transition-colors border-dashed text-gray-500">
                        + Project
                      </Button>
                    </div>
                  </> */}
                <div className="ml-auto flex items-center gap-2">
                  <Button className="text-background border-gray-900 bg-gray-900 hover:border-gray-700 hover:bg-gray-700 focus:border-gray-700 focus:bg-gray-700 focus-visible:border-gray-700 focus-visible:bg-gray-700 h-8 px-3 text-sm rounded-lg">
                    <ArrowUpRight className="h-4 w-4" />
                    <span className="sr-only">Send Workflow Description</span>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
