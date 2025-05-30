import { Dialog, DialogContent } from "@/components/ui/dialog";
import CodePanel from "./code-panel";
import { ThemeEditorState } from "@/types/editor";

interface CodePanelDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  themeEditorState: ThemeEditorState;
}

export function CodePanelDialog({
  open,
  onOpenChange,
  themeEditorState,
}: CodePanelDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="h-[80vh] max-w-4xl gap-6 overflow-hidden rounded-lg border p-0 py-6 outline-none">
        <div className="h-full overflow-auto px-6">
          <CodePanel themeEditorState={themeEditorState} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
