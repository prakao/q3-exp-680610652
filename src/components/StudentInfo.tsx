import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

import profileImg from "@/assets/S__170123266.jpg";
import { Button } from "@/components/ui/button";

interface StudentDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function StudentInfo({ isOpen, onClose }: StudentDrawerProps) {
  return (
    <Drawer open={isOpen} onOpenChange={onClose} swipeDirection="left">
      <DrawerContent className="h-full max-w-md m-0 rounded-none">
        <DrawerHeader>
          <DrawerTitle>ข้อมูลนักศึกษา</DrawerTitle>
          <DrawerDescription>Student Information</DrawerDescription>
        </DrawerHeader>

        <div className="p-4 space-y-4">
          <img src={profileImg} alt="Profile" className="w-1/2 rounded-lg" />
          <div>
            <h3 className="text-xl font-bold">Krisrin Chompoongernsangsakul</h3>
            <p className="text-sm text-gray-500">
              นักศึกษาวิศวกรรมศาสตร์ ชั้นปีที่2 สาขาวิศวกรรมคอมพิวเตอร์
              มหาวิทยาลัยเชียงใหม่{" "}
            </p>
          </div>

          {/* ส่วนของ Badges / Detail */}
          <div className="space-y-2">
            <div className="flex gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded text-xs">
                Hobbies
              </span>{" "}
              เล่นเกม,ดูหนัง,ฟังเพลง
            </div>
            <div className="flex gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded text-xs">
                Email
              </span>{" "}
              krisrin_c@cmu.ac.th
            </div>
            <div className="flex gap-2">
              <span className="bg-black text-white px-2 py-0.5 rounded text-xs">
                Social
              </span>{" "}
              <Button variant="link">
                <a
                  href="https://www.instagram.com/maxhla__?stkn=MWpycjg1c3Y4ZDc2NQ%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noreferrer"
                >
                  @maxhla__
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-4 border-t text-sm">รหัสนักศึกษา: 680610652</div>
        </div>

        <DrawerFooter>
          <DrawerClose>
            <button
              className="w-full bg-black text-white py-2 rounded"
              onClick={onClose}
            >
              Close
            </button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
