import { Prose } from "./typhography";
import { USER } from "../data/USER";

import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function BioDetails() {
  return (
    <Panel id="about" className="scroll-mt-[4.75rem]">
      <PanelHeader>
        <PanelTitle>About</PanelTitle>
      </PanelHeader>

      <PanelContent>
        <Prose className="text-primary">{USER.about}</Prose>
      </PanelContent>
    </Panel>
  );
}
