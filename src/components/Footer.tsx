import { StudentInfo } from "./StudentInfo";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function Footer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:py-16">
        <div className="mt-12 border-t pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Changed to flex-row, centered items, and wrapped text wrap settings */}
          <div className="flex flex-row items-center justify-center gap-4 flex-wrap text-center">
            {/* insert Drawer of student information here */}

            <Button
              variant="default"
              onClick={() => setIsDrawerOpen(true)}
              className="bg-[#008bf5] hover:bg-[#1e40af] text-white font-medium rounded-lg px-4 py-2 text-sm h-auto"
            >
              Krisrin C.
            </Button>

            <StudentInfo
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
            />

            <span className="text-sm text-muted-foreground whitespace-nowrap">
              &copy; {new Date().getFullYear()} CPE207 Corp. All rights
              reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
